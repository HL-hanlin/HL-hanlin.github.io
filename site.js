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
  let previewsPaused = reducedMotion.matches;
  const videoVisibility = new WeakMap();
  const updateVideos = () => {
    videos.forEach(video => {
      const card = video.closest('.publication-card');
      const shouldPlay = !previewsPaused && !document.hidden && !card?.hidden && videoVisibility.get(video);
      if (shouldPlay) {
        const play = video.play();
        if (play && typeof play.catch === 'function') play.catch(() => {});
      } else video.pause();
    });
    if (motionToggle) {
      motionToggle.setAttribute('aria-pressed', String(previewsPaused));
      motionToggle.textContent = previewsPaused ? 'Play video previews' : 'Pause video previews';
      motionToggle.setAttribute('aria-label', previewsPaused ? 'Play all publication video previews' : 'Pause all publication video previews');
    }
  };
  if (videos.length) {
    videos.forEach(video => {
      video.removeAttribute('autoplay');
      video.muted = true;
      const rect = video.getBoundingClientRect();
      videoVisibility.set(video, rect.bottom > 0 && rect.top < window.innerHeight);
    });
    if ('IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => videoVisibility.set(entry.target, entry.isIntersecting));
        updateVideos();
      }, { threshold: 0.05 });
      videos.forEach(video => videoObserver.observe(video));
    } else {
      const trackVideos = () => {
        videos.forEach(video => {
          const rect = video.getBoundingClientRect();
          videoVisibility.set(video, rect.bottom > 0 && rect.top < window.innerHeight);
        });
        updateVideos();
      };
      window.addEventListener('scroll', trackVideos, { passive: true });
      window.addEventListener('resize', trackVideos, { passive: true });
    }
    if (motionToggle) {
      motionToggle.hidden = false;
      motionToggle.classList.add('visible');
      motionToggle.addEventListener('click', () => { previewsPaused = !previewsPaused; updateVideos(); });
    }
    document.addEventListener('visibilitychange', updateVideos);
    const onMotionPreferenceChange = event => { previewsPaused = event.matches; updateVideos(); };
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionPreferenceChange);
    else if (reducedMotion.addListener) reducedMotion.addListener(onMotionPreferenceChange);
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
