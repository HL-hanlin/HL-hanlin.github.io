/* Progressive enhancements. The complete academic record is readable without JS. */
(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const newsList = document.getElementById('newsList');
  const newsToggle = document.getElementById('newsToggle');
  if (newsList && newsToggle) {
    const newsItems = [...newsList.querySelectorAll('.news-item')];
    if (newsItems.length > 5) {
      const updateNews = expanded => {
        newsList.classList.toggle('expanded', expanded);
        newsItems.forEach((item, index) => { item.hidden = !expanded && index >= 5; });
        newsToggle.setAttribute('aria-expanded', String(expanded));
        newsToggle.textContent = expanded ? 'Show less news ↑' : `Show all ${newsItems.length} news items ↓`;
      };
      newsToggle.hidden = false;
      newsToggle.classList.add('visible');
      updateNews(false);
      newsToggle.addEventListener('click', () => {
        const expanded = newsToggle.getAttribute('aria-expanded') !== 'true';
        updateNews(expanded);
        if (!expanded) newsToggle.scrollIntoView({ block: 'nearest', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      });
    }
  }

  const filter = document.getElementById('tagFilter');
  const publications = [...document.querySelectorAll('#publications .publication-card[data-tags]')];
  const tagsFor = card => card.dataset.tags.split(/[\s,]+/).filter(Boolean);
  if (filter && publications.length) {
    const buttons = [...filter.querySelectorAll('.tag-btn')];
    let status = document.getElementById('publicationStatus');
    if (!status) {
      status = document.createElement('p');
      status.id = 'publicationStatus';
      status.className = 'sr-only';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      filter.after(status);
    }
    buttons.forEach(button => {
      const tag = button.dataset.tag;
      const count = publications.filter(card => tag === 'all' || tagsFor(card).includes(tag)).length;
      const countBadge = button.querySelector('.tag-count') || document.createElement('span');
      countBadge.className = 'tag-count';
      countBadge.textContent = String(count);
      countBadge.setAttribute('aria-hidden', 'true');
      if (!countBadge.parentNode) button.append(countBadge);
      const label = [...button.childNodes].filter(node => node.nodeType === Node.TEXT_NODE).map(node => node.textContent).join('').trim();
      button.setAttribute('aria-label', `${label}: ${count} publications`);
      button.setAttribute('aria-pressed', String(tag === 'all'));
      button.classList.toggle('active', tag === 'all');
      button.addEventListener('click', () => {
        buttons.forEach(other => {
          const selected = other === button;
          other.setAttribute('aria-pressed', String(selected));
          other.classList.toggle('active', selected);
        });
        publications.forEach(card => { card.hidden = tag !== 'all' && !tagsFor(card).includes(tag); });
        status.textContent = `${count} ${count === 1 ? 'publication' : 'publications'} shown${tag === 'all' ? '' : ` for ${label}`}.`;
        updateVideos();
      });
    });
  }

  const videos = [...document.querySelectorAll('.publication-media video')];
  const motionToggle = document.getElementById('motionToggle');
  let userPaused = null;
  const previewsPaused = () => userPaused ?? reducedMotion.matches;
  const pendingPlays = new WeakMap();
  const blockedVideos = new Set();
  const playButtons = new WeakMap();
  const shouldPlay = video => {
    if (previewsPaused() || document.hidden || video.closest('.publication-card')?.hidden) return false;
    const rect = video.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight
      && rect.right > 0 && rect.left < window.innerWidth;
  };
  const needsPlayGesture = () => videos.some(video => shouldPlay(video) && blockedVideos.has(video));
  const updateMotionToggle = () => {
    if (!motionToggle) return;
    const showPlay = previewsPaused() || needsPlayGesture();
    motionToggle.setAttribute('aria-pressed', String(previewsPaused()));
    motionToggle.textContent = showPlay ? 'Play video previews' : 'Pause video previews';
    motionToggle.setAttribute('aria-label', showPlay ? 'Play all publication video previews' : 'Pause all publication video previews');
  };
  const syncVideo = (video, fromGesture = false) => {
    const eligible = shouldPlay(video);
    // Keep Safari's native autoplay path enabled only while this preview is eligible.
    video.autoplay = eligible;
    const button = playButtons.get(video);
    button.hidden = !eligible || !blockedVideos.has(video);
    if (!eligible) {
      pendingPlays.delete(video);
      video.pause();
      return;
    }
    if (!video.paused || (pendingPlays.has(video) && !fromGesture)) return;
    if (blockedVideos.has(video) && !fromGesture) return;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    const request = {};
    pendingPlays.set(video, request);
    const onFailure = error => {
      if (pendingPlays.get(video) !== request) return;
      pendingPlays.delete(video);
      if (error.name === 'NotAllowedError' && shouldPlay(video)) {
        blockedVideos.add(video);
        button.hidden = false;
      }
      // AbortError is expected when scrolling away or pausing a pending play request.
      updateMotionToggle();
    };
    try {
      const play = video.play();
      if (play && typeof play.then === 'function') {
        play.then(() => {
          if (pendingPlays.get(video) !== request) return;
          pendingPlays.delete(video);
          if (!shouldPlay(video)) { video.pause(); return; }
          blockedVideos.delete(video);
          button.hidden = true;
          updateMotionToggle();
        }, onFailure);
      } else pendingPlays.delete(video);
    } catch (error) { onFailure(error); }
  };
  const updateVideos = () => {
    videos.forEach(video => syncVideo(video));
    updateMotionToggle();
  };
  if (videos.length) {
    videos.forEach(video => {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'video-play';
      button.hidden = true;
      button.textContent = 'Play preview';
      button.setAttribute('aria-label', `Play ${video.getAttribute('aria-label') || 'video preview'}`);
      video.after(button);
      playButtons.set(video, button);
      button.addEventListener('click', () => syncVideo(video, true));
      ['loadeddata', 'canplay'].forEach(event => video.addEventListener(event, () => syncVideo(video)));
      video.addEventListener('play', () => { if (!shouldPlay(video)) video.pause(); });
      video.addEventListener('playing', () => {
        if (!shouldPlay(video)) { video.pause(); return; }
        blockedVideos.delete(video);
        button.hidden = true;
        updateMotionToggle();
      });
    });
    if ('IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver(updateVideos, { threshold: [0, 0.05] });
      videos.forEach(video => videoObserver.observe(video));
    } else {
      window.addEventListener('scroll', updateVideos, { passive: true });
      window.addEventListener('resize', updateVideos, { passive: true });
    }
    if (motionToggle) {
      motionToggle.hidden = false;
      motionToggle.classList.add('visible');
      motionToggle.addEventListener('click', () => {
        userPaused = previewsPaused() || needsPlayGesture() ? false : true;
        videos.forEach(video => syncVideo(video, true));
        updateMotionToggle();
      });
    }
    const retryFromGesture = event => {
      if (!event.isTrusted || event.target.closest?.('#motionToggle, .video-play, video')) return;
      // Call play synchronously during a real gesture; never override the pause preference.
      videos.forEach(video => { if (blockedVideos.has(video) && shouldPlay(video)) syncVideo(video, true); });
    };
    ['touchend', 'click', 'keydown'].forEach(event => {
      document.addEventListener(event, retryFromGesture, { passive: true });
    });
    const restoreVideos = () => {
      if (!document.hidden) blockedVideos.clear();
      updateVideos();
    };
    document.addEventListener('visibilitychange', restoreVideos);
    window.addEventListener('pageshow', restoreVideos);
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', updateVideos);
    else if (reducedMotion.addListener) reducedMotion.addListener(updateVideos);
    updateVideos();
  }

  const backToTop = document.getElementById('backToTop');
  const sectionNav = document.querySelector('.section-drip-nav');
  const navLinks = [...document.querySelectorAll('.section-drip-nav a[href^="#"]')];
  const sections = navLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  const footer = document.querySelector('.mountain-footer');
  let scrollScheduled = false;
  const updateScrollState = () => {
    scrollScheduled = false;
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 480);
    let activeId = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.3) activeId = section.id;
    }
    navLinks.forEach(link => {
      if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (sectionNav && footer) {
      sectionNav.classList.toggle('is-footer-visible', footer.getBoundingClientRect().top < sectionNav.getBoundingClientRect().bottom + 28);
    }
  };
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScrollState); }
  }, { passive: true });
  if (backToTop) backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    const about = document.getElementById('about');
    if (about) {
      about.setAttribute('tabindex', '-1');
      about.focus({ preventScroll: true });
    }
  });

  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();
})();
