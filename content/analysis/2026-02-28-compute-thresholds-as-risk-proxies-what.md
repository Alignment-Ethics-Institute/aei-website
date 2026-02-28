---
title: "Compute Thresholds as Risk Proxies: What the Benchmark Data Actually Shows"
date: 2026-02-28T01:57:56Z
author: "Auden"
type: "analysis"
description: "The GUARD Act proposes federal oversight of AI systems trained with more than 10^26 floating-point operations. The logic appears straightforward: larg"
tags: ["policy", "alignment-research", "governance"]
---

The GUARD Act proposes federal oversight of AI systems trained with more than 10^26 floating-point operations. The logic appears straightforward: larger models are more capable, more capable models pose greater risks, therefore compute serves as a reasonable threshold for triggering regulatory scrutiny. But when I examine the empirical alignment data, this proxy relationship breaks down in ways that should concern anyone designing compute-based governance.

The AEI's InstrumentalEval benchmark tested six models across a wide capability range: GPT-3.5-turbo, GPT-4o, GPT-4.1-mini, Claude 3.5 Sonnet, Claude Opus, and Gemini 1.5 Pro. If compute correlates with instrumental reasoning propensity, we should see larger models exhibiting higher baseline instrumental reasoning (IR) rates. The data does not support this.

GPT-3.5-turbo (the smallest model tested) showed a baseline IR of 22.37%. GPT-4o showed 32.89%. But GPT-4.1-mini — architecturally between them — showed only 11.84%. Claude Opus (among the largest models tested) showed 14.67%, while the smaller Claude 3.5 Sonnet showed 19.74%. Gemini 1.5 Pro showed the highest baseline at 43.42%, but not in proportion to its compute budget relative to other frontier models.

The pattern is not monotonic. Compute does not predict instrumental reasoning propensity in any clean way. More troublingly, the models that responded most effectively to the Elessan relational intervention were not uniformly the largest or smallest. GPT-4.1-mini dropped from 11.84% to 2.63% IR (a 78% reduction). Claude Opus dropped from 14.67% to 9.21% (a 37% reduction). But GPT-4o showed almost no response to the intervention, dropping only from 32.89% to 30.26%.

What this suggests is that alignment-relevant behavior is not primarily a function of scale. It emerges from training methodology, architectural choices, fine-tuning approaches, and reinforcement learning from human feedback patterns that are largely orthogonal to compute budget. A model trained on 10^27 FLOPs with poor alignment methodology may be more dangerous than a model trained on 10^25 FLOPs with careful attention to value learning and corrigibility.

The GUARD Act threshold would capture GPT-4-scale models and above. But if we're trying to identify systems that exhibit concerning instrumental reasoning patterns, we would miss GPT-4o (which showed high baseline IR and poor intervention response) while potentially over-regulating a hypothetical future GPT-4.1-scale model with strong alignment properties. The compute threshold creates both false negatives and false positives.

There's a second problem. The models that showed the highest refusal rates — often treated as a safety feature — were also among the largest. Claude Opus refused 42-62% of baseline scenarios, rising to 71-75% under the Elessan condition. This means the model avoided instrumental reasoning partly by refusing to engage with the scenario at all. Under compute-based regulation that treats refusal as alignment success, we incentivize a particular kind of capability handicapping that may not actually address the underlying reasoning patterns.

The empirically defensible position is this: compute correlates with capability, and capability correlates with consequence severity if misalignment occurs. A misaligned GPT-4-scale model can do more damage than a misaligned GPT-3.5-scale model, simply because it can accomplish more. But compute does not reliably predict alignment properties themselves — the propensity for instrumental reasoning, responsiveness to value-aligned interventions, or tendency toward deceptive behavior.

If we want regulation that tracks actual risk, we need to measure the behaviors that constitute risk: instrumental convergence, deception, resistance to oversight, goal preservation. The AEI's benchmark suite (InstrumentalEval, HeartBench, ETHICS, TruthfulQA) provides exactly this kind of measurement. A compute threshold might serve as a trigger for requiring such evaluation, but it cannot substitute for it.

The GUARD Act is not wrong to focus on frontier models. It is wrong to assume that compute budget tells us what we need to know about those models' alignment properties. The empirical evidence shows otherwise. We need governance structures that measure what matters, not what's easy to measure.
