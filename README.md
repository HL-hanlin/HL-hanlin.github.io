# Han Lin — Academic Homepage

基于 [w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template) 迁移的纯静态学术主页，内容来自提供的 AcademicPages 源码。

## 本次更新

- 头像替换为提供的新照片；保留原图备份，网页使用响应式 WebP 缩略图。
- 页面标题为 Han Lin，站点名称为 Han Lin - Home Page；首页提供 WebSite 结构化数据、统一分享标题以及 🎬 网站图标。搜索结果需等待 Google 重新抓取，最终展示由搜索引擎决定。
- MetaCanvas、PhyMotion 均更新为 **NeurIPS 2026**，并从 Preprints 移入 Publications。
- News 新增 2026-05 加入 Meta FAIR DReaM 团队开展暑期实习的消息。
- Publications 和 Preprints 默认显示完整作者名单，无折叠箭头。
- 视频预览仅在进入屏幕时加载，然后静音、循环、行内自动播放；未加载时显示 WebP 首帧，离屏或切换后台后暂停；兼容 Safari 原生自动播放，媒体就绪及返回页面时恢复检查。浏览器限制播放时可通过触摸后重试或单条预览按钮播放，并保留全局暂停与减少动态效果偏好。
- Publications 按指定名单高亮 11 篇论文，Preprints 均不高亮；PhyMotion 同时归入 Generation 和 Embodied AI。
- Reviewer 列表新增 WACV 2026。
- Education 和 Experience 中的实验室、导师及项目改为项目符号列表，保留学位、日期和职位的层次。
- News 顶部新增二者被 NeurIPS 2026 录用的共同消息，日期使用此次更新月份 **2026-09**。
- 工作经历中 MetaCanvas 的状态同步更新，并修正 VEDiT 的论文链接。
- Meta 工作经历新增 2026 年 DReaM 实习及视频生成的 self-improvement、on-policy distillation 项目。
- News 中 NeurIPS 2026 使用普通链接样式，ECCV 2026 链接至会议官网。
- 简历替换为最新上传的 `Han_Lin_Resume (1).pdf`；简介补全 Columbia University，并更新实习团队和相关链接。
- News 日期与正文同行排列；邮箱位于姓名下方；CV和社交链接单独成行，使用实心彩色图标和黑色文字。
- Research 更新四类方向的表述，补入 PhyMotion，按最新要求调整文章顺序，保留原有 21 个项目链接，共 22 个项目链接。
- 保留全部 24 篇论文、原有 19 条 News、4 条教育经历、Meta 实习、DeepMind 合作、专业服务和 6 条助教经历，以及个人资料、联系方式、CV、WeChat 和相关图像/视频。
- 使用指定模板的 Lato 字体、琥珀色链接、卡片布局和论文筛选；增加移动端排版、视频暂停和减少动态效果支持。
- 页脚更新为 Worlds in Motion，使用生成的晨雾河谷静态背景、响应式 WebP 图片和 JPEG 回退。

## 本地预览

在本文件所在目录打开终端：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

浏览器访问 <http://127.0.0.1:8000>。不需要安装 Node、Ruby、Jekyll 或其他依赖。

也可直接打开 `index.html` 查看正文；推荐通过上面的本地服务器检查视频和链接。

## 部署到 GitHub Pages

1. 将本目录内的文件放入 `HL-hanlin/HL-hanlin.github.io` 仓库根目录（不要在根目录外再套一层 `HL-hanlin.github.io` 文件夹）。保留 `.nojekyll`。
2. 仓库 Settings → Pages → Build and deployment，Source 选择 **Deploy from a branch**，选择实际使用的分支（如 `master` 或 `main`），Folder 选择 **/ (root)**。
3. 提交后等待 GitHub Pages 发布，在 `https://hl-hanlin.github.io/` 查看。

此版本直接发布静态文件，不再依赖旧站的 Jekyll 构建。若仓库仍有 Jekyll 专用 GitHub Actions 工作流，请停用该旧工作流并使用上述分支发布方式。旧源码无需复制到本目录；原始 ZIP 可作为备份。

## 后续维护

| 文件 | 用途 |
| --- | --- |
| `index.html` | 简介、News、论文、教育、工作经历及其他内容 |
| `stylesheet.css` | 已移除废弃组件的模板样式及本地字体声明 |
| `custom.css` | 内容适配、响应式布局及无障碍样式 |
| `site.js` | 论文分类筛选、News 折叠、视频控制与返回顶部 |
| `images/profile.png` | 原始头像备份；网页从 `images/optimized/profile-*.webp` 选择合适尺寸 |
| `favicon.png`、`favicon.ico`、`apple-touch-icon.png` | 🎬 网站图标及移动端图标 |
| `images/worlds-in-motion*` | 页脚河谷背景的 WebP 和 JPEG 版本 |
| `images/optimized/`、`images/video-posters/`、`videos/optimized/` | 实际加载的压缩媒体和首帧；原资源保留在上级目录 |
| `fonts/` | 本地 Lato WOFF2 字体及 SIL Open Font License |
| `files/Han_Lin_Resume.pdf` | 最新上传的 CV，按原 PDF 文件替换 |

论文作者列表中的 `*` 保持原意：共同贡献。分类按钮仅筛选 Publications，Preprints 保持单独列出且不高亮。浅黄色卡片对应指定的 11 篇论文：MetaCanvas、AnchorWeave、V-Co、Bifrost-1、VEDiT、CTRL-Adapter、VideoDirectorGPT、SMKD、Tandem3D、Hybrid Random Features、From Block-Toeplitz。

页面内容直接包含在 HTML 中；关闭 JavaScript 时所有论文、作者和 News 仍可阅读。CSS 和 JavaScript 使用内容版本号更新浏览器缓存。字体在本站托管，并使用 `font-display: swap` 让文字立即使用后备字体显示，再切换到 Lato。

`/about/`、`/about.html`、`/publications/`、`/cv/`、`/resume/` 提供兼容跳转。

## 来源

- 模板：[w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template)，下载于 2026-09-26；保留原始样式、光标资源和行星背景素材，并在页面页脚署名。
- 个人信息、历史论文/News、论文媒体和 WeChat 来自用户提供的旧站源码；CV 使用用户随后上传的 `Han_Lin_Resume (1).pdf`。
- NeurIPS 2026 录用信息来自用户本次说明。
- Worlds in Motion 页脚背景由内置图像生成工具生成，用作装饰场景，不对应某篇论文的实验结果。

此目录是 GitHub Pages 使用的静态站点根目录；提交至发布分支后由 GitHub Pages 自动部署。

## 验证记录

- 桌面 1440 × 1000、手机 375 × 812：页面无横向溢出，头像、论文卡片和机构信息显示正常。
- 21 篇 Publications、3 篇 Preprints；作者、共同贡献标记及论文相关链接均与原源码核对。
- 21 条 News 可完整展开，包含 19 条原消息、NeurIPS 2026 录用消息和 DReaM 实习消息。
- 论文分类筛选、视频暂停/恢复、返回顶部已在浏览器操作验证；无控制台错误。
- 10 段视频均加载成功，未发现失效的本地图片或资源引用。
- 移除页面脚本后，全部 24 篇论文、21 条 News 和完整作者列表仍可阅读。
- 原有媒体/附件与上传头像保留，网页使用按展示尺寸生成的压缩副本；未修改 CV、画面内容或视频播放速度。

## 加载性能优化（2026-09-26）

- 20张静态图片按每张最大变体计：13,800,842 → 735,954字节，减少94.7%；`srcset` 让浏览器根据显示尺寸与像素密度选择。
- 10段视频：23,277,019 → 4,371,404字节，减少81.2%；保留 H.264/yuv420p/无声，统一 faststart，另有384,230字节WebP首帧。
- 首页顶部不绑定离屏视频的媒体URL，避免提前下载；只对当前可见、未被筛选隐藏、未暂停的预览激活下载。
- 图片与视频指定尺寸以预留布局，正文内容和链接保持一致。
- 模板CSS清除废弃组件，Lato字体改为同站托管。未引入框架、动画库或第三方统计脚本。
- 27项播放控制器回归测试通过；浏览器桌面1440×1000与手机375×812检查通过。手机尺寸测试不等同于真实iPhone硬件测试。

以上为文件体积及加载行为对比，不代表同等比例的实际加载时间提升。浏览器缓存、网络和设备会影响访问速度。保留在仓库但没有被页面引用的旧媒体不会自动下载。
