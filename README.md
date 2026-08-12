# 3uio.github.io

[3uio](https://github.com/3uio) 的个人网站，使用 Astro 构建并部署到 GitHub Pages：<https://3uio.github.io/>。

网站用于长期整理 Research、Projects、Publications 与技术笔记。当前公开项目内容基于 GitHub 仓库整理；未公开的姓名、学校、邮箱、所在地和经历不会被推断或展示。

## 本地开发

需要 Node.js 22.12 或更高版本。

```sh
npm install
npm run dev
```

生产构建：

```sh
npm run build
npm run preview
```

## 内容位置

- `src/data/site.ts`：个人简介、导航、Research Interests、Projects 与技术栈
- `src/content/blog/`：Markdown Blog / Notes
- `src/components/`：页面组件
- `src/pages/`：路由页面、RSS 与 sitemap
- `public/`：头像、favicon、Open Graph 图片等静态资源

## 新增 Blog

在 `src/content/blog/` 新建 Markdown 文件：

```yaml
---
title: "文章标题"
description: "用于列表和 SEO 的摘要"
publishedAt: 2026-08-12
category: "Research Notes"
tags: ["PyTorch", "Experiment"]
featured: false
draft: true
isExample: false
---
```

完成后将 `draft` 改为 `false`。站点会自动生成文章详情页，并同步到 Blog 列表、RSS 和 sitemap。

## Deployment

部署由 `.github/workflows/deploy.yml` 中的 GitHub Actions 工作流完成。请在本地确认 `npm run build` 通过后再自行提交和推送。
