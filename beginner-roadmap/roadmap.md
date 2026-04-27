# Quant Starter Kit: 7-Day Roadmap

A structured one-week plan to build the math, stats, and code foundations every aspiring quant needs. This is a *starting* roadmap — opinionated, deliberately minimal. Send PRs to deepen any day.

> **How to use this:** Block one focused 90-minute slot per day. Read the topic, do the action, and write a 100-word reflection in your own notes. Skipping the action is how people end up "knowing" quant finance without being able to do anything.

---

## Day 1 — What is Quantitative Finance?

**Topic.** Understand what quants actually do day-to-day. The big splits:

- **Sell-side vs buy-side** — banks vs hedge funds/prop shops.
- **Systematic vs discretionary** — algorithms making the call vs humans.
- **HFT vs medium-frequency vs long-horizon** — different speeds, different edges.
- **Roles** — researcher, developer, trader, risk. They overlap more than people pretend.

**Action.** Write 200 words on the kind of quant role that excites you and *why*. Be specific. "I like math" doesn't count.

---

## Day 2 — Probability & Statistics

**Topic.** Random variables, expectation, variance, conditional probability, the Central Limit Theorem, and basic hypothesis testing. Quant interviews lean heavily here.

**Action.** Solve five problems on conditional expectation and Bayes' theorem (Ross, Chapter 3 is a good source).

---

## Day 3 — Linear Algebra

**Topic.** Vectors, matrices, eigenvalues, PCA. A portfolio is a weighted vector of returns; a covariance matrix is what makes it interesting. PCA is what's underneath risk-factor models.

**Action.** Pick any 5 stocks, fetch daily returns, build the covariance matrix in NumPy, and compute the principal components. Plot the variance explained by each component.

---

## Day 4 — Time Series Analysis

**Topic.** Stationarity, autocorrelation, ARIMA, GARCH. The two pitfalls that kill more strategies than any other:

- **Look-ahead bias** — using information you wouldn't have had at the time.
- **Survivorship bias** — your historical universe excludes companies that went bankrupt.

**Action.** Plot the 30-day rolling volatility of NIFTY 50 returns over the last decade. Identify three regime changes by eye. What happened in those weeks?

---

## Day 5 — Financial Modeling

**Topic.** Present value, the no-arbitrage principle, Black–Scholes intuition (you do *not* need the full derivation yet — you need to know what each input does), and the Greeks (delta, gamma, vega, theta).

**Action.** Implement a Black–Scholes pricer in Python (it's ~15 lines). Chart how delta varies with spot price for a 30-day call. Now do it for a 1-day call. Notice what changes.

---

## Day 6 — Machine Learning in Finance

**Topic.** Why naive ML usually fails on markets:

- Markets are non-stationary, so train/test splits are tricky.
- Signal-to-noise is brutal — daily returns are mostly noise.
- Standard k-fold CV leaks future information into the past.

Read about *combinatorial purged k-fold cross-validation* (Lopez de Prado).

**Action.** Build a logistic-regression next-day direction predictor on a single stock. Compare its out-of-sample accuracy to a coin flip. Be honest.

---

## Day 7 — Algorithmic Trading

**Topic.** The strategy lifecycle: idea → backtest → risk sizing → execution. The reasons most backtests lie: fees, slippage, look-ahead, overfitting to a specific period, and not modelling capacity.

**Action.** Backtest a simple moving-average crossover strategy with realistic fees and slippage. Compare net P&L to buy-and-hold. Reflect on why most published strategies look amazing in papers and don't ship.

---

## What next?

- Pick one project from `/projects/` and ship it end-to-end.
- Read one paper a week and summarise it for the community (`/resources/`).
- Start a trading journal — even paper trades. The journal teaches more than the trades.

Got a better roadmap? Open a PR. This is meant to evolve.
