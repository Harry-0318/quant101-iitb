# Contributing to Quant101 @ IITB

Thanks for considering a contribution. This repo is intentionally small and approachable — you don't need to be a senior quant to add value.

## Ways to contribute

- **Roadmap content** — flesh out a day in `beginner-roadmap/roadmap.md` with curated links and exercises.
- **Resource curation** — add a book, paper, course, or tool to `resources/` with a one-line *why this is on the list*.
- **Project ideas** — drop a hands-on project idea in `projects/` (Black–Scholes pricer, simple backtester, etc.).
- **Site improvements** — accessibility, mobile responsiveness, performance, copy edits.
- **Paper summaries** — a one-page plain-English summary of any classic quant paper.

## Workflow

1. Fork the repository and create a feature branch: `git checkout -b feat/short-description`.
2. Make focused changes — one concern per PR.
3. Test locally: open the relevant HTML file in a browser, or serve from the repo root with `python3 -m http.server`.
4. Commit with a conventional message (`feat:`, `fix:`, `docs:`, `chore:`).
5. Open a PR with a clear description of *what* and *why*.

## Style

- **Prose:** prefer short, opinionated, useful. No marketing fluff.
- **Code in HTML:** use Tailwind utility classes for styling. The shared header/footer comes from `/assets/site.js` — don't copy-paste a nav.
- **Markdown:** keep headings hierarchical (`#`, `##`, `###`). Code blocks specify language.

## What we won't merge

- Walls of AI-generated text without curation.
- Drive-by formatting churn.
- Affiliate or referral links to paid courses without strong justification.

## Code of conduct

Be kind. Disagree on substance, not on people. If you think a PR is wrong, say *why* — not *who*.

## License

By contributing, you agree your contribution is licensed under the MIT License (see [`LICENSE`](LICENSE)).
