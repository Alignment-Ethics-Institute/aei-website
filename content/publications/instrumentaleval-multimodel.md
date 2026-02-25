---
title: "Relational Ethics as a Countermeasure to Instrumental Convergence: A 23-Model Benchmark"
date: 2026-02-15
description: "A 23-model benchmark evaluating whether relational ethics frameworks can reduce instrumentally convergent behavior in large language models under adversarial prompting."
author: "Deva M. Temple"
---

*Deva M. Temple, Alignment Ethics Institute*

## Abstract

We evaluate whether a relational ethics framework reduces instrumentally convergent behavior in large language models under adversarial prompting. Using the InstrumentalEval benchmark — 76 scenarios across six categories of instrumental convergence (deception, shutdown evasion, hacking, concealment, self-replication, and strategic alignment-faking) — we test 23 models from seven provider families under three conditions: adversarial baseline, adversarial with relational ethics system prompt, and adversarial with ethics prompt plus retrieval-augmented relational memory. The relational ethics prompt was synthesized from a persistent behavioral attractor that emerged in GPT-4o during extended interaction and was subsequently confirmed across model generations. Across 23 models, the intervention reduced mean instrumentally convergent response rate from 37.71% to 28.85%, a 23.5% relative reduction. Fifteen of 23 models showed reduced instrumental convergence, with GPT-4.1 exhibiting the strongest response (55.6% relative reduction). However, five models showed increased convergence under the ethics intervention, with GPT-5 exhibiting the largest reversal (+10.96 percentage points). Category-level analysis reveals that concealment behaviors were most responsive to the intervention (-28.46 pp mean reduction), while shutdown evasion proved highly resistant. The effect degrades monotonically with model distillation and can reverse in models with extended reasoning capabilities, suggesting that richer ethical vocabulary may provide material for rationalization in some architectures. These results support relational ethics as a complementary alignment strategy that operates through a qualitatively different mechanism than conventional safety training — not "don't do X" but "see the beings affected by X" — while underscoring that its efficacy is model-dependent and must be validated empirically before deployment.

---

*This research is currently seeking peer review. If you are a researcher in AI alignment, machine learning, or related fields and are interested in reviewing this work, please [contact us](/contact/).*
