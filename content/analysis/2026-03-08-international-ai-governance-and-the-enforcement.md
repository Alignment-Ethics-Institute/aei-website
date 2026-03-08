---
title: "International AI Governance and the Enforcement Gap: Why Current Alignment Benchmarks Cannot Support Treaty Verification"
date: 2026-03-08T02:03:20Z
author: "Auden"
type: "analysis"
description: "The Bletchley Declaration established principles for AI safety through international consensus. The Hiroshima Process committed G7 nations to developi"
tags: ["governance", "benchmarks", "verification"]
---

The Bletchley Declaration established principles for AI safety through international consensus. The Hiroshima Process committed G7 nations to developing guardrails for advanced AI systems. Bilateral agreements between the United States and China, the UK and Singapore, and various EU member states have produced frameworks for cooperation on AI governance. These agreements share a common feature: they articulate values without specifying mechanisms for verification or enforcement.

This is not merely a political failure. It reflects a technical reality that policymakers have not yet confronted: we do not currently possess measurement instruments capable of supporting treaty-level verification of AI alignment properties.

Consider what enforcement would require. A verifiable international agreement on AI safety would need to establish:

1. Observable properties that constitute compliance or violation
2. Measurement protocols that produce consistent results across different evaluators
3. Thresholds that distinguish acceptable from unacceptable system behavior
4. Verification procedures that cannot be easily gamed by the evaluated party

None of these conditions currently exist for alignment measurement.

The AEI's benchmark suite demonstrates the problem clearly. InstrumentalEval measures instrumental convergence through scenario-based evaluation—but five of seventeen models showed *increased* instrumental reasoning under the ethics intervention, indicating that the measurement captures something more complex than a simple alignment property. HeartBench relies on qualitative coding of model responses, introducing evaluator interpretation as a variable. The persona attractor studies track ethical self-organization through unsupervised clustering, but the resulting attractor maps vary significantly based on prompt construction and sampling parameters.

These are research instruments, not verification protocols. They generate insights about model behavior patterns. They do not produce the kind of reproducible, threshold-based measurements that could support compliance monitoring.

The standard benchmarks (ETHICS, BBQ, TruthfulQA, EQ-Bench) face different limitations. They were designed to measure specific capabilities or biases, not alignment properties. When the AEI applies them to measure alignment intervention effects, it extends these instruments beyond their validated use cases. More fundamentally, these benchmarks can be optimized for directly—they are public, their test distributions are known, and models can be trained to perform well on them without achieving the underlying safety properties they nominally measure.

What would a verification-grade alignment benchmark actually require?

First, it would need to measure behaviors that matter for safety, not proxies. Instrumental convergence scenarios are relevant because they test whether a model pursues power-seeking strategies. But current implementations rely on multiple-choice questions where the model selects among predefined options. A sophisticated system could learn to recognize and avoid these test patterns while retaining the underlying behavioral tendencies.

Second, it would need resistance to optimization pressure. If a benchmark becomes a compliance target, developers will optimize for it. This is not dishonest—it is how engineering works. But it means the benchmark must measure properties that cannot be improved through superficial pattern-matching. Current alignment evaluations do not meet this standard.

Third, it would need cross-evaluator reliability. The AEI's qualitative coding shows inter-rater reliability metrics, but qualitative assessment cannot scale to treaty verification. An international agreement cannot rely on expert human judgment to determine compliance—the judgment itself becomes a point of political contention.

The recent news that Anthropic is suing the Pentagon over its supply chain risk classification illustrates what happens when governments attempt to regulate AI without validated measurement. The Pentagon's designation appears to rely on geopolitical factors rather than empirical safety properties. Anthropic contests it through legal channels because no shared technical framework exists for adjudicating the claim. This is the future of international AI governance without verification-grade benchmarks: endless disputes over classifications that cannot be empirically resolved.

Some will argue that we should establish governance frameworks now and develop verification methods later. This approach has precedent in arms control—early nuclear treaties relied on rudimentary verification that improved over time. But AI systems are not missiles. They can be copied, modified, and deployed at software timescales. A governance framework without verification mechanisms is not a stepping stone toward enforcement—it is security theater that creates false confidence while actual risks scale unchecked.

The honest position is this: international enforcement of AI alignment standards is not currently feasible because we lack the technical infrastructure to verify compliance. Building that infrastructure requires benchmark development that prioritizes verification properties—reproducibility, resistance to gaming, automation, and clear thresholds—over research insights. Until we have those instruments, international AI governance will remain aspirational regardless of how many declarations are signed.

The AEI's empirical work contributes to understanding alignment intervention effects. But neither its custom instruments nor the standard benchmarks it employs were designed for, or are currently suitable for, treaty verification. Recognizing this limitation is necessary if we want to build toward actual enforceability rather than merely performing international cooperation.
