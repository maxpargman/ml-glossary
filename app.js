// ── State ──────────────────────────────────────────────
let activeCategory = "All";
let searchQuery = "";
let activeTerm = null;
let abortController = null;

// ── DOM refs ────────────────────────────────────────────
const searchInput = document.getElementById("search");
const chipsContainer = document.getElementById("chips");
const termListEl = document.getElementById("term-list");
const listCountEl = document.getElementById("list-count");
const definitionPane = document.getElementById("definition-pane");

// ── Init ────────────────────────────────────────────────
function init() {
  renderChips();
  renderTermList();
  renderPlaceholder();

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderTermList();
  });
}

// ── Render chips ────────────────────────────────────────
function renderChips() {
  chipsContainer.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "chip" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderChips();
      renderTermList();
    });
    chipsContainer.appendChild(btn);
  });
}

// ── Filter logic ────────────────────────────────────────
function getFilteredTerms() {
  return ML_TERMS.filter(t => {
    const catMatch = activeCategory === "All" || t.category === activeCategory;
    const searchMatch = !searchQuery
      || t.term.toLowerCase().includes(searchQuery)
      || t.category.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });
}

// ── Render term list ────────────────────────────────────
function renderTermList() {
  const terms = getFilteredTerms();
  listCountEl.textContent = `${terms.length} term${terms.length !== 1 ? "s" : ""}`;
  termListEl.innerHTML = "";

  if (terms.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<div class="empty-state">no matches for "<em>${escapeHtml(searchQuery)}</em>"</div>`;
    termListEl.appendChild(li);
    return;
  }

  terms.forEach(termObj => {
    const li = document.createElement("li");
    if (activeTerm && activeTerm.term === termObj.term) li.classList.add("active");

    li.innerHTML = `
      <div class="term-item-inner">
        <span class="term-name">${escapeHtml(termObj.term)}</span>
        <span class="term-cat-badge">${escapeHtml(termObj.category)}</span>
      </div>`;

    li.addEventListener("click", () => selectTerm(termObj, li));
    termListEl.appendChild(li);
  });
}

// ── Select a term ────────────────────────────────────────
function selectTerm(termObj, li) {
  // Update active state in list
  document.querySelectorAll("#term-list li").forEach(el => el.classList.remove("active"));
  li.classList.add("active");
  activeTerm = termObj;

  fetchDefinition(termObj);
}

// ── Fetch from Wikipedia ─────────────────────────────────
async function fetchDefinition(termObj) {
  if (abortController) abortController.abort();
  abortController = new AbortController();

  renderLoading(termObj.term);

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termObj.wikiTitle)}`;

  try {
    const res = await fetch(url, { signal: abortController.signal });
    if (!res.ok) throw new Error(`Wikipedia returned ${res.status}`);
    const data = await res.json();
    renderDefinition(termObj, data);
  } catch (err) {
    if (err.name === "AbortError") return;
    renderError(termObj, err.message);
  }
}

// ── Render states ────────────────────────────────────────
function renderPlaceholder() {
  definitionPane.innerHTML = `
    <div class="def-placeholder">
      <div class="prompt-symbol">&#9654;</div>
      <p>select a term to load its definition</p>
    </div>`;
}

function renderLoading(termName) {
  definitionPane.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <span>fetching ${escapeHtml(termName)}...</span>
    </div>`;
}

function renderDefinition(termObj, data) {
  const extract = data.extract || "No description available.";
  const wikiUrl = data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(termObj.wikiTitle)}`;

  definitionPane.innerHTML = `
    <div class="def-content">
      <div class="def-term-header">
        <h1 class="def-term-name">${escapeHtml(data.title || termObj.term)}</h1>
        <span class="def-category-tag">${escapeHtml(termObj.category)}</span>
      </div>
      <div class="def-divider"></div>
      <p class="def-extract">${escapeHtml(extract)}</p>
      <a class="def-wiki-link" href="${wikiUrl}" target="_blank" rel="noopener noreferrer">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        read full article on Wikipedia
      </a>
    </div>`;
}

function renderError(termObj, message) {
  definitionPane.innerHTML = `
    <div class="def-error">
      <span class="error-label">fetch error</span>
      <span>Could not load definition for "${escapeHtml(termObj.term)}".</span>
      <span style="color: var(--text-muted); font-size: 0.74rem;">${escapeHtml(message)}</span>
    </div>`;
}

// ── Helpers ──────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Boot ─────────────────────────────────────────────────
init();
