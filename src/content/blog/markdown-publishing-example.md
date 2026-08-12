---
title: "示例：用 Markdown 发布一篇新文章"
description: "演示本站 Blog 的文章结构、标题层级、代码块与列表样式；这不是个人真实经历记录。"
publishedAt: 2026-08-10
category: "Guide"
tags: ["Astro", "Markdown", "Blog"]
featured: true
draft: true
isExample: true
---

> 这是一篇用于验证页面结构的示例文章，不代表 3uio 的真实经历或成果。正式使用时可以删除或替换它。

这个 Blog 基于 Astro Content Collections。每篇文章都是 `src/content/blog/` 中的 Markdown 文件，文章元信息写在文件最上方的 frontmatter 中。

## 一篇文章需要什么

最基本的字段包括标题、摘要、发布日期、分类和标签：

```yaml
---
title: "文章标题"
description: "用于列表页和 SEO 的简短摘要"
publishedAt: 2026-08-10
category: "Deep Learning"
tags: ["PyTorch", "Experiment"]
featured: false
draft: false
isExample: false
---
```

然后直接在 frontmatter 下方编写 Markdown 正文即可。

## 推荐的笔记结构

1. 先写问题与背景；
2. 记录关键概念，而不是复制整段资料；
3. 用代码或实验验证理解；
4. 写下失败尝试与适用边界；
5. 最后总结后续问题。

## 一个很小的代码示例

```python
def describe_experiment(name: str, result: float) -> str:
    return f"{name}: {result:.3f}"
```

发布前将 `draft` 设为 `false`。如果文章仍在整理，可以先设为 `true`，它就不会出现在构建后的网站里。
