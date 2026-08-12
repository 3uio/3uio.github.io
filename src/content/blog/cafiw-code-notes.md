---
title: "CAFIW 公开代码导读：把视频水印实验组织成可复现流程"
description: "从公开仓库的结构出发，梳理 CAFIW 如何组织频域可逆水印、压缩失真、数据划分与 codec attack 评测。"
publishedAt: 2026-08-12
category: "Research Notes"
tags: ["Video Watermarking", "PyTorch", "Reproducibility"]
featured: true
draft: false
isExample: false
---

这篇笔记只解读 [CAFIW 公开仓库](https://github.com/3uio/CAFIW) 中已经发布的代码与复现说明，不补充尚未公开的论文结论或实验结果。

## 它在解决什么问题

CAFIW（Compression-Aware Frequency-Domain Invertible Watermarking）面向视频水印的压缩鲁棒性问题。公开实现将 96-bit 消息嵌入 8 帧视频片段，并同时考虑消息提取准确性、视觉质量与压缩失真。

与只提供模型文件相比，这个仓库更值得记录的是它把研究工作拆成了几层清楚的可复现单元：

- `dinvmark_fa.py` 与 `fa_inb.py`：频域可逆水印模型；
- `compression_aware_noise.py`：可微压缩失真算子；
- `train.py` 与 `test.py`：训练和评测入口；
- `attacks.py`：clean、帧级攻击、H.264 与 HEVC 评测；
- `protocol/`：固定的数据清单、随机种子与文件哈希；
- `prepare_protocol.py`：从本地 UCF-101 构建规定的数据划分。

## 为什么数据协议也属于代码的一部分

小数据实验对划分方式很敏感。如果训练、验证与测试之间存在同源视频泄漏，结果可能被高估。因此，仓库不仅给出训练脚本，也固定不同 seed 的训练清单、验证集和测试集，并使用 group-level leakage control 排除重复视频组。

这提醒我：可复现研究不只是“公开模型结构”，还需要公开数据划分规则、选择 checkpoint 的依据、随机性控制和评测环境。

## Compression-aware evaluation

公开视频会经历真实 codec 压缩。仓库把 differentiable compression distortion 用于训练，同时在评测阶段通过 FFmpeg 测试 H.264 与 HEVC，并保留 Gaussian noise、frame average、frame drop 和 frame swap 等攻击入口。

训练期的近似失真与测试期的真实 codec 并不完全相同。把二者分开记录，有助于判断模型学到的是对某个近似算子的适配，还是更一般的鲁棒性。

## 我想持续保留的实验习惯

1. 在实验前冻结数据清单与随机种子；
2. 只使用验证集选择 checkpoint，不根据测试集调参；
3. 同时记录消息准确率与视觉质量，避免单一指标掩盖代价；
4. 保存 Python、PyTorch 与 FFmpeg 版本，承认平台差异；
5. 把失败案例和边界条件写进报告，而不只保留最优结果。

后续如果公开内容继续完善，这篇笔记也会同步更新；正式学术条目仍会等可核验的 Paper、Authors 与 Venue 信息齐全后再进入 Publications 页面。
