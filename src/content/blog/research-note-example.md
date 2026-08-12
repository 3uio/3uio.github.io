---
title: "示例：一份可复用的 Research Note 模板"
description: "用于演示如何把论文阅读与实验过程整理成可追溯的研究笔记。"
publishedAt: 2026-08-09
category: "Research Notes"
tags: ["Paper Reading", "Experiment", "Template"]
featured: false
draft: true
isExample: true
---

> 这是结构占位示例，不是对某篇真实论文的解读，也不代表任何已完成研究。

好的 Research Note 应该让未来的自己快速回答三个问题：当时在研究什么、依据是什么、下一步为什么这样做。

## 1. Research Question

- 要解决的核心问题是什么？
- 这个问题的实际价值或理论价值是什么？
- 现有方法的限制在哪里？

## 2. Method & Assumptions

把方法拆成输入、处理、输出与关键假设。对于 Deep Learning 工作，还可以记录数据、模型结构、损失函数和训练策略。

## 3. Evidence

实验记录至少应包括：

| Item | What to record |
| --- | --- |
| Dataset | 来源、划分与预处理 |
| Baseline | 比较对象与实现版本 |
| Metric | 指标定义与选择理由 |
| Result | 主结果、消融与失败案例 |

## 4. Reflection

结论是否被证据充分支持？哪些结果可能来自数据偏差或实验设置？如果重新开始，最先改变什么？

## 5. Next Step

最后把开放问题写成可以执行的任务，例如“复现 baseline 并统一评测脚本”，而不是模糊地写“继续优化”。
