export const profile = {
  handle: '3uio',
  role: 'Computer Science Student',
  github: 'https://github.com/3uio',
  website: 'https://3uio.github.io/',
  avatar: '/avatar.png',
  description:
    '记录科研探索、工程实践与持续学习，关注可靠的 Artificial Intelligence、Multimedia Security 与可复现研究。',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/research/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
];

export const researchAreas = [
  {
    index: '01',
    category: 'FOUNDATION',
    title: 'Artificial Intelligence',
    subtitle: '人工智能与可靠系统',
    description: '关注智能系统的模型能力、风险边界，以及方法在真实场景中的可靠应用。',
    topics: ['Machine Learning', 'AI Safety', 'Reliable Systems'],
  },
  {
    index: '02',
    category: 'METHOD',
    title: 'Deep Learning',
    subtitle: '深度学习方法',
    description: '从模型训练、实验设计与实现细节出发，持续积累可解释、可复现的工程实践。',
    topics: ['PyTorch', 'Neural Networks', 'Experiment'],
  },
  {
    index: '03',
    category: 'DOMAIN',
    title: 'Multimedia Security',
    subtitle: '多媒体内容安全',
    description: '探索视频、图像与生成式内容的可信处理、风险防护及系统化评测。',
    topics: ['Content Security', 'Robustness', 'Trustworthy AI'],
  },
  {
    index: '04',
    category: 'FOCUS',
    title: 'Digital Watermarking',
    subtitle: '数字水印与鲁棒性',
    description: '关注水印嵌入与提取、压缩失真建模，以及视觉质量和消息准确率之间的平衡。',
    topics: ['Video Watermarking', 'Compression', 'Invertible Network'],
  },
];

export const projects = [
  {
    number: 'P–01',
    title: 'CAFIW',
    description:
      '面向小数据鲁棒视频水印的公开研究代码：使用频域可逆网络，并将压缩失真建模、训练与多种攻击评测组织为可复现流程。',
    type: 'Research Code · Video Watermarking',
    tags: ['Python', 'PyTorch', 'FFmpeg', 'UCF-101'],
    status: 'Public · MIT',
    github: 'https://github.com/3uio/CAFIW',
  },
  {
    number: 'P–02',
    title: 'SafeChat-Guard',
    description:
      '中文对话场景的大模型输入/输出安全防护原型，串联对抗归一化、规则检测、轻量语义分类、风险分级、输出复检与日志审计。',
    type: 'AI Safety · Engineering Prototype',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'Testing'],
    status: 'Public Prototype',
    github: 'https://github.com/3uio/SafeChat-Guard',
  },
  {
    number: 'P–03',
    title: 'MiniMinecraft',
    description:
      '不依赖 OpenGL 的纯 Java/Swing 体素沙盒，用于实践软件 3D 渲染、区块缓存、碰撞检测、物品系统与存档管理。',
    type: 'Learning Project · Graphics & Systems',
    tags: ['Java', 'Swing', 'Software Rendering', 'Voxel'],
    status: 'Public',
    github: 'https://github.com/3uio/MiniMinecraft-Java-Swing',
  },
  {
    number: 'P–04',
    title: '3uio.github.io',
    description:
      '当前个人网站的开源实现，以 Astro 和 Content Collections 组织项目、研究方向与 Markdown 笔记，并通过 GitHub Pages 持续部署。',
    type: 'Personal Website · Open Source',
    tags: ['Astro', 'TypeScript', 'Markdown', 'GitHub Pages'],
    status: 'Live',
    github: 'https://github.com/3uio/3uio.github.io',
    demo: 'https://3uio.github.io/',
  },
];

export const skillGroups = [
  {
    title: 'Languages & Engineering',
    items: ['Python', 'Java', 'Git', 'Testing'],
    note: '公开仓库包含 Python 工程、Java/Swing 项目与自动化测试实践。',
  },
  {
    title: 'AI & Research',
    items: ['PyTorch', 'scikit-learn', 'Video Watermarking', 'AI Safety'],
    note: '当前项目覆盖深度学习水印、中文文本安全检测与实验复现。',
  },
  {
    title: 'Interfaces & Publishing',
    items: ['Streamlit', 'Astro', 'Markdown', 'GitHub Pages'],
    note: '用于构建原型界面、整理技术内容并维护本站。',
  },
];
