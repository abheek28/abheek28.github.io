/* ─── State ─────────────────────────────────── */
let current = 'hero';

/* ─── On load: show hero ────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  hero.style.display = 'flex';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => hero.classList.add('visible'));
  });

  // Restore theme
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);
});

/* ─── Show section ──────────────────────────── */
function show(id) {
  if (id === current) return;

  // Hide current
  const prev = document.getElementById(current);
  prev.classList.remove('visible');
  setTimeout(() => {
    prev.style.display = 'none';
    prev.classList.remove('active');
  }, 350);

  // Show next
  current = id;
  const next = document.getElementById(id);
  next.style.display = 'flex';
  next.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => next.classList.add('visible'));
  });

  // Scroll the new section to top
  next.scrollTop = 0;

  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const targets = {
    projects: 1, internships: 2, achievements: 3, interests: 4, contact: 5
  };
  const idx = targets[id];
  if (idx !== undefined) {
    document.querySelectorAll('.nav-item')[idx]?.classList.add('active');
  }
}

/* ─── Go home ───────────────────────────────── */
function goHome() {
  // Clear all active nav states
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  show('hero');
}

/* ─── Theme ─────────────────────────────────── */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = t === 'dark' ? '☽' : '☀';
  localStorage.setItem('theme', t);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/* ─── Modal data ────────────────────────────── */
const MODALS = {
  p1: `
    <h2>Plagiarism Detection System</h2>
    <hr class="m-hr">
    <p>Designed and implemented a modular document similarity engine using structured object-oriented architecture, built to handle large document sets with performance-conscious comparison logic.</p>
    <p class="m-label">Core Components</p>
    <ul>
      <li>Substring segmentation algorithms</li>
      <li>Efficient pattern matching mechanisms</li>
      <li>Custom similarity scoring frameworks</li>
      <li>Optimised text preprocessing pipelines</li>
    </ul>
    <p class="m-label">Key Learnings</p>
    <ul>
      <li>Algorithmic design and time complexity optimisation</li>
      <li>Data structuring for text processing</li>
      <li>Clean software architecture principles</li>
      <li>Scalability and extensibility for future NLP enhancements</li>
    </ul>
  `,
  p2: `
    <h2>Supernova Cosmology Analysis</h2>
    <hr class="m-hr">
    <p>Conducted computational analysis on real astronomical datasets to study universal expansion using Type Ia supernova data. Applied numerical computing methods to interpret cosmological constants.</p>
    <p class="m-label">Implemented</p>
    <ul>
      <li>Redshift-distance modelling</li>
      <li>Regression techniques for parameter estimation</li>
      <li>Residual analysis for model validation</li>
      <li>Scientific visualisation pipelines in Python</li>
    </ul>
    <p class="m-label">Skills Developed</p>
    <ul>
      <li>Statistical modelling and scientific computing</li>
      <li>Data interpretation and research-oriented analysis</li>
    </ul>
  `,
  i1: `
    <h2>Astronomy and Astrophysics Intern</h2>
    <p class="m-org">India Space Academy</p>
    <hr class="m-hr">
    <p>Worked with Type Ia supernova datasets to estimate cosmological parameters and study the expansion of the universe through data-driven computational methods.</p>
    <p class="m-label">Responsibilities</p>
    <ul>
      <li>Data cleaning and preprocessing</li>
      <li>Model fitting using Python</li>
      <li>Curve fitting and statistical validation</li>
      <li>Visualisation of astrophysical relationships</li>
    </ul>
    <p class="m-label">Exposure Gained</p>
    <ul>
      <li>Scientific computing workflows</li>
      <li>Research documentation practices</li>
      <li>Applied numerical modelling</li>
    </ul>
  `,
  i2: `
    <h2>Winter Technical Intern</h2>
    <p class="m-org">India Space Lab</p>
    <hr class="m-hr">
    <p>Participated in structured technical training and guided project development in space technology systems. Focused on translating engineering principles into real-world solutions.</p>
    <p class="m-label">Worked On</p>
    <ul>
      <li>Applied engineering problem solving</li>
      <li>Technical documentation</li>
      <li>System design fundamentals</li>
      <li>Practical implementation of theoretical concepts</li>
    </ul>
  `,
  a1: `
    <h2>Technical Leadership</h2>
    <p class="m-org">IEEE PELS Chapter</p>
    <hr class="m-hr">
    <p>Progressed from volunteer to leadership roles, developing strong organisational, technical mentoring, and structured execution skills within the engineering community.</p>
    <p class="m-label">Led</p>
    <ul>
      <li>Technical project initiatives</li>
      <li>Research-oriented student programs</li>
      <li>Collaborative engineering discussions</li>
      <li>Knowledge-sharing sessions</li>
    </ul>
  `
};

function openModal(id) {
  const content = MODALS[id];
  if (!content) return;
  document.getElementById('modal-content').innerHTML = content;
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
