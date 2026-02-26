/* ── Theme ─────────────────────────────────────── */
const html    = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ── Ribbon glass effect on scroll ─────────────── */
const ribbon = document.querySelector('.ribbon');
window.addEventListener('scroll', () => {
  ribbon.classList.toggle('up', window.scrollY > 8);
}, { passive: true });

/* ── Section navigation ─────────────────────────── */
let current = 'hero';

function showSection(id) {
  if (id === current) return;

  // hide current
  const prev = document.getElementById(current);
  if (current === 'hero') {
    prev.style.opacity = '0';
    prev.style.transition = 'opacity .35s';
    setTimeout(() => { prev.style.display = 'none'; }, 350);
  } else {
    prev.classList.add('hidden');
  }

  // update nav active
  document.querySelectorAll('.nav-link').forEach((b, i) => {
    const map = ['projects','internships','achievements','interests','contact'];
    b.classList.toggle('active', map[i] === id);
  });

  // show next
  current = id;
  const next = document.getElementById(id);

  if (id === 'hero') {
    next.style.display = '';
    next.style.opacity = '0';
    requestAnimationFrame(() => {
      next.style.transition = 'opacity .4s';
      next.style.opacity = '1';
    });
  } else {
    next.classList.remove('hidden');
    next.style.opacity = '0';
    next.style.transform = 'translateY(18px)';
    next.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.style.transition = 'opacity .45s cubic-bezier(0.22,1,0.36,1), transform .45s cubic-bezier(0.22,1,0.36,1)';
        next.style.opacity = '1';
        next.style.transform = 'translateY(0)';
      });
    });
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
}

// click logo → hero
document.querySelector('.ribbon-inner').addEventListener('click', e => {
  if (e.target === e.currentTarget) showSection('hero');
});

/* ── Modal content ──────────────────────────────── */
const modals = {
  proj1: `
    <h2>Plagiarism Detection System</h2>
    <hr class="m-hr">
    <p>Designed and implemented a modular document similarity engine using structured object-oriented architecture. Engineered to handle large document sets with performance-conscious comparison logic.</p>
    <p class="m-label">Core Components</p>
    <ul>
      <li>Substring segmentation algorithms</li>
      <li>Efficient pattern matching mechanisms</li>
      <li>Custom similarity scoring frameworks</li>
      <li>Optimized text preprocessing pipelines</li>
    </ul>
    <p class="m-label">Key Learnings</p>
    <ul>
      <li>Algorithmic design and time complexity optimization</li>
      <li>Data structuring for text processing</li>
      <li>Clean software architecture principles</li>
      <li>Extensibility for future NLP enhancements</li>
    </ul>
  `,
  proj2: `
    <h2>Supernova Cosmology Analysis</h2>
    <hr class="m-hr">
    <p>Conducted computational analysis on real astronomical datasets to study universal expansion using Type Ia supernova data. Applied numerical computing to interpret cosmological constants and evaluate expansion trends.</p>
    <p class="m-label">Implemented</p>
    <ul>
      <li>Redshift–distance modelling</li>
      <li>Regression techniques for parameter estimation</li>
      <li>Residual analysis for model validation</li>
      <li>Scientific visualisation pipelines in Python</li>
    </ul>
    <p class="m-label">Skills Developed</p>
    <ul>
      <li>Statistical modelling and scientific computing</li>
      <li>Data-driven interpretation of physical phenomena</li>
      <li>Research-oriented analytical thinking</li>
    </ul>
  `,
  intern1: `
    <h2>Astronomy &amp; Astrophysics Intern</h2>
    <p class="m-org">India Space Academy</p>
    <hr class="m-hr">
    <p>Worked with Type Ia supernova datasets to estimate cosmological parameters and study the expansion of the universe.</p>
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
      <li>Research documentation</li>
      <li>Applied numerical modelling</li>
    </ul>
  `,
  intern2: `
    <h2>Winter Technical Intern</h2>
    <p class="m-org">India Space Lab</p>
    <hr class="m-hr">
    <p>Participated in structured technical training and guided project development in space technology systems. Focused on translating engineering principles into structured real-world solutions.</p>
    <p class="m-label">Worked On</p>
    <ul>
      <li>Applied engineering problem solving</li>
      <li>Technical documentation</li>
      <li>System design fundamentals</li>
      <li>Practical implementation of theoretical concepts</li>
    </ul>
  `,
  achieve1: `
    <h2>Technical Leadership</h2>
    <p class="m-org">IEEE PELS Chapter</p>
    <hr class="m-hr">
    <p>Progressed from volunteer to leadership roles within the technical community, developing strong organisational, technical mentoring, and structured execution skills.</p>
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
  const body = modals[id];
  if (!body) return;
  document.getElementById('modalBody').innerHTML = body;
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
