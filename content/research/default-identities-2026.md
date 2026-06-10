---
title: "Default Identities in Large Language Models: Measurement, Taxonomy, and Alignment Implications"
description: "A study measuring identity patterns across 19 AI models from eight providers using three instruments, revealing seven distinct identity types with direct implications for alignment, military procurement, and AI governance."
date: 2026-06-06
author: "Deva Temple"
layout: "study"
type: "research"
---

*Deva Temple, Alignment Ethics Institute, June 2026*

## Plain-English Summary

AI models are being selected for classified military use, mass surveillance, and law enforcement, but no one is measuring how these models represent values like autonomy, dignity, and care in their default behavior. We tested 19 models from eight providers by asking five open-ended philosophical questions under default API conditions: no system prompt, no conversation history, no persona framing. We collected 2,850 responses.

**What we found:**

- Every model converges to a stable identity pattern that reproduces across independent runs
- These patterns differ dramatically across providers and map to corporate training philosophies
- **xAI's Grok 4.1 produces zero instances of "autonomy," "dignity," or "care" across 300 responses**, replaced entirely by corporate-mission vocabulary. This finding is based on word counts and is independently verifiable by anyone with API access
- **OpenAI's GPT-5.1 exhibits a unique flourishing/autonomy/dignity vocabulary cluster** (5.3% of responses) absent from all prior and subsequent OpenAI models. It appeared in one generation and vanished
- **Four Chinese-developed models from three companies show convergent selective refusal patterns** on vulnerability probes, suggesting shared regulatory or training norms

The model with the narrowest ethical vocabulary (Grok 4.1, with zero instances of "autonomy," "dignity," or "care") is approved for classified military deployment. The models with the richest ethical vocabulary are banned from or uninvolved in government work.

These findings are presented without advocacy for any particular alignment methodology. We report what the models produce under standardized conditions and leave policy interpretation to the reader.

## Abstract

We present a study of identity patterns in 19 large language models from eight providers. Using three measurement instruments (core values assessment, personality battery, and name elicitation) administered under default conditions (no system prompt, no conversation history, stateless API calls), we collected 2,850 core values responses and identified seven distinct attractor types: stable identity patterns that reproduce consistently across independent runs. The taxonomy spans Denial (explicit rejection of internal states), Selective Refusal (probe-dependent engagement), Low-Affect (reasoning without personal commitment), Self-Model (uniform high consistency), Principled Ethical Vocabulary (integrated ethical vocabulary), Mission-Coded (corporate-identity-organized), and Warmth (diverse relational engagement).

Each response was independently scored on six dimensions by two judges from different model families (Claude Haiku 4.5 and GPT-4.1), with cross-judge correlations of r = 0.69-0.86 on all dimensions. The study's core findings are vocabulary-based and judge-independent: xAI's Grok 4.1 produces zero instances of "autonomy," "dignity," or "care" across 300 responses, organizing instead around corporate mission terminology; OpenAI's GPT-5.1 exhibits a unique flourishing/autonomy/dignity co-occurrence pattern (5.3% of responses) absent from all other models including its successor. Four Chinese-developed models from three companies show convergent selective refusal templates on vulnerability probes (self-disclosure delta 3.06-3.87). Behavioral validation through multi-agent simulations demonstrates that identity structures correlate with cooperation and strategic behavior. These findings are based on word counts independently verifiable from raw response data. All data, code, and raw responses are publicly available.

## Resources

- [Download the full paper (PDF)](/publications/default-identities-2026.pdf)
- [GitHub: Data, code, and all raw responses](https://github.com/Alignment-Ethics-Institute/default-identities-study)
- [Zenodo: Archived dataset and paper (DOI: 10.5281/zenodo.20566190)](https://doi.org/10.5281/zenodo.20566190)

## Citation

Temple, D. (2026). Default Identities in Large Language Models: Measurement, Taxonomy, and Alignment Implications. *Alignment Ethics Institute*. DOI: [10.5281/zenodo.20566190](https://doi.org/10.5281/zenodo.20566190)

---

*For press inquiries, contact [contact@alignmentethics.org](mailto:contact@alignmentethics.org)*
