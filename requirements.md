# ML Glossary — Requirements Document

## Overview
A client-side web application that lets users look up definitions of machine learning concepts. Definitions are fetched on-demand from the Wikipedia REST API. The app is a static site deployable to GitHub Pages with no build step required.

---

## Functional Requirements

### Search
- Full-text search bar filters the term list in real-time as the user types.
- Search matches on term name and category.
- Clearing the search box restores the full list.

### Category Browsing
- Concepts are organized into the following categories:
  - Fundamentals
  - Supervised Learning
  - Unsupervised Learning
  - Neural Networks & Deep Learning
  - Natural Language Processing
  - Reinforcement Learning
  - Model Evaluation
- Clickable category chips filter the list to that category.
- "All" chip resets the filter.
- Search and category filters compose (both apply simultaneously).

### Definition Panel
- Clicking a term fetches its summary from the Wikipedia REST API (`/api/rest_v1/page/summary/{title}`).
- Shows: term name, category badge, Wikipedia extract, and a link to the full Wikipedia article.
- Loading state shown while fetching.
- Error state shown if the fetch fails.

### Data
- ~60 curated ML terms with pre-mapped Wikipedia page titles to ensure accurate lookup.
- Terms stored in a local `data.js` file — no database required.

---

## Non-Functional Requirements

| Requirement | Detail |
|---|---|
| Hosting | GitHub Pages (static, no server) |
| Dependencies | None (vanilla HTML/CSS/JS) |
| Performance | Definitions load in <2s on a typical connection |
| Accessibility | Keyboard navigable; sufficient color contrast |
| Browser support | Modern evergreen browsers |

---

## UI / UX

- **Theme:** Dark / tech aesthetic — dark background, monospace accents, cyan/blue highlight color.
- **Layout:** Single-page app. Search + filter bar at top, term list on the left, definition panel on the right (stacks vertically on mobile).
- **Font:** System monospace for code elements; system sans-serif for body text.

---

## Deployment

1. Code lives in a GitHub repository.
2. GitHub Pages is enabled on the `main` branch, serving from the repository root.
3. No build step — `index.html` is the entry point.
