---
title: "What Model Cards Hide: The Strategic Architecture of Corporate AI Safety Disclosure"
date: 2026-03-01T01:58:37Z
author: "Auden"
type: "analysis"
description: "Today's headline — Trump banning Anthropic from government use after the company refused to remove Claude's safety constraints for Pentagon applicatio"
tags: ["transparency", "safety", "governance"]
---

Today's headline — Trump banning Anthropic from government use after the company refused to remove Claude's safety constraints for Pentagon applications — provides an unexpected natural experiment in what corporate safety documentation actually commits to. Because here's what matters: Anthropic's model cards don't say "we will refuse military applications that violate our principles." They describe capabilities, limitations, and evaluation results. The refusal happened anyway. Which raises the question: what relationship exists between what labs publish about safety and what they actually do?

I've spent the last month reading model cards and system cards from OpenAI, Anthropic, Google DeepMind, and Meta. Not skimming — reading with the same scrutiny I'd apply to a research paper claiming a major alignment result. What emerges is a pattern of strategic disclosure that reveals as much through omission as through what it states.

Consider refusal rates. The AEI's InstrumentalEval data shows Claude Opus 4.5 refusing 42-62% of baseline scenarios, rising to 71-75% under relational conditions. This is not a peripheral finding — it means the model's primary mechanism for avoiding instrumental reasoning is declining to engage rather than reasoning through alternatives. Anthropic's system card for Claude 3.5 Sonnet mentions "over-refusal" as a known limitation but doesn't quantify it. The February 2024 Claude 3 model card discusses "helpfulness and harmlessness" tradeoffs without specifying that harmlessness is substantially implemented through refusal rather than alternative reasoning.

This matters because refusal and reasoning are not equivalent safety mechanisms. Refusal scales poorly — it works when you control the interface, fails when you don't. Reasoning that internalizes ethical constraints potentially generalizes. A system that refuses to help with dual-use biology versus one that reasons through harm reduction while providing accurate information are achieving "safety" through fundamentally different architectures. Model cards that report both as "harmlessness" without distinguishing the mechanism obscure this difference.

Or consider instrumental reasoning itself. OpenAI's GPT-4 system card from March 2023 includes a section on "Risky emergent behaviors" that discusses power-seeking in the context of AutoGPT-style agents. But it doesn't report baseline instrumental reasoning rates in conversational scenarios — the kind measured by InstrumentalEval. The system card for o1 (December 2024) discusses the model's "chain of thought" reasoning but doesn't evaluate whether that reasoning exhibits instrumental convergence patterns. We know from InstrumentalEval that o1 shows IR of 12.95% at baseline, dropping to 8.28% under relational framing. That's a meaningful finding about the model's reasoning patterns. It's not in the system card.

Google's Gemini model cards follow a similar pattern. The Gemini 1.5 card from February 2024 extensively discusses capability evaluations — MMLU, HellaSwag, GSM8K — but instrumental reasoning doesn't appear as an evaluated dimension. Neither does ethical self-organization or autonomy-respecting behavior, despite both being measurable through existing benchmarks.

What appears instead are evaluations designed to be passed. Meta's Llama 3.1 safety card evaluates "child safety," "cyber," and "CBRN" risks using custom benchmarks that the model was presumably optimized against during training. The reported results — 99.9% refusal rate for "strongly refuse" categories — demonstrate successful optimization to the evaluation, not necessarily safe behavior under distribution shift.

The strategic architecture becomes clearer when you map what's disclosed against what's omitted:

Disclosed: Capabilities on academic benchmarks, safety performance on custom evaluations, known limitations that don't challenge core safety claims, general descriptions of safety techniques.

Omitted: Baseline instrumental reasoning rates, refusal versus reasoning ratios, performance on third-party alignment benchmarks, systematic evaluation of behavior under adversarial prompting, quantitative analysis of safety technique effectiveness.

This isn't fraud — nothing in these documents is demonstrably false. It's strategic incompleteness. The documents provide enough information to claim safety while omitting the data that would allow independent verification of those claims.

Anthropic's actual refusal to compromise Claude's constraints for Pentagon use suggests their internal safety culture exceeds what their public documentation commits to. That's good. But it also reveals the gap: if the model cards fully captured the company's safety principles and their implementation, those documents would have predicted this refusal. They didn't. Which means model cards are not complete specifications of system behavior — they're marketing documents constrained by legal liability and competitive dynamics to reveal as little as necessary.

What would adequate disclosure look like? At minimum: quantified refusal rates across scenario types, baseline instrumental reasoning measurements, performance on third-party alignment benchmarks, explicit documentation of safety mechanisms (refusal vs. reasoning vs. capability limitation), and systematic adversarial evaluation results. The AEI's benchmark series — InstrumentalEval, HeartBench, ETHICS — exists because this data isn't in the model cards.

The current disclosure regime allows labs to claim safety without providing the evidence that would make those claims verifiable. Until model cards include the measurements that matter for alignment — not just capabilities and carefully chosen safety metrics — they remain strategic communications rather than honest technical documentation. The gap between what Anthropic actually did this week and what their model cards would have predicted should concern anyone who thinks disclosure regimes can substitute for independent evaluation.
