/* ============================================================
   SVG SNIPPETS for brand icons (not in Lucide)
   ============================================================ */
const SVG_LINKEDIN = `<svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
</svg>`;

const SVG_GITHUB = `<svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>`;

/* ============================================================
   RENDER — build the page from PORTFOLIO data
   ============================================================ */
function render() {
  const d = PORTFOLIO;

  /* ---- <title> & nav logo ---- */
  document.title = `${d.name} | Portfolio`;
  document.getElementById('nav-logo').textContent = d.initials;

  /* ---- Hero ---- */
  const heroBg = document.getElementById('hero-bg-img');
  heroBg.src = d.heroBg;
  heroBg.onerror = () => { heroBg.style.display = 'none'; };

  const profileImg = document.getElementById('profile-img');
  profileImg.src = d.profileImage;
  profileImg.alt = d.name;

  document.getElementById('profile-initials').textContent = d.initials;
  document.getElementById('hero-name').textContent = d.name;
  document.getElementById('hero-tagline').textContent = d.tagline;

  document.getElementById('hero-buttons').innerHTML = `
    <a href="${d.linkedin}" target="_blank" rel="noopener" class="btn btn-secondary">
      ${SVG_LINKEDIN}LinkedIn
    </a>
    <a href="${d.github}" target="_blank" rel="noopener" class="btn btn-secondary">
      ${SVG_GITHUB}GitHub
    </a>
    <a href="mailto:${d.email}" class="btn btn-secondary">
      <i data-lucide="mail"></i>Email Me
    </a>`;

  /* ---- About ---- */
  document.getElementById('about-content').innerHTML =
    d.about.map(p => `<p>${p}</p>`).join('');

  /* ---- Skills ---- */
  document.getElementById('skills-grid').innerHTML =
    d.skills.map(s => `
      <span class="skill-badge">
        <i data-lucide="${s.icon}"></i>${s.label}
      </span>`).join('');

  /* ---- Education ---- */
  document.getElementById('education-grid').innerHTML =
    d.education.map(e => `
      <div class="edu-card reveal">
        <div class="edu-card-image-wrap">
          <img
            src="${e.image}"
            alt="${e.title}"
            class="edu-card-image"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="edu-card-placeholder">
            <i data-lucide="${e.icon}"></i>
            <span>Add image</span>
          </div>
        </div>
        <div class="edu-card-body">
          <span class="edu-card-badge ${e.type === 'degree' ? 'edu-badge-degree' : 'edu-badge-cert'}">
            ${e.type === 'degree' ? 'Degree' : 'Certificate'}
          </span>
          <h3>${e.title}</h3>
          <p class="edu-card-meta">${e.meta}</p>
        </div>
      </div>`).join('');

  /* ---- Projects ---- */
  document.getElementById('projects-grid').innerHTML =
    d.projects.map(p => `
      <div class="project-card reveal">
        <div class="project-image-wrapper">
          <img
            src="${p.image}"
            alt="${p.title}"
            class="project-image"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="project-image-placeholder">
            <i data-lucide="image"></i>No Image
          </div>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-links">
            ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn btn-small btn-primary"><i data-lucide="external-link"></i>Live Demo</a>` : ''}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-small btn-secondary">${SVG_GITHUB}GitHub</a>` : ''}
          </div>
        </div>
      </div>`).join('');

  /* ---- Experience ---- */
  document.getElementById('experience-list').innerHTML =
    d.experience.map(e => `
      <div class="experience-card reveal">
        <div class="exp-icon"><i data-lucide="${e.icon}"></i></div>
        <div class="exp-body">
          <h3>${e.title}</h3>
          <p class="exp-meta">${e.period}</p>
          <p>${e.description}</p>
        </div>
      </div>`).join('');

  /* ---- Contact ---- */
  document.getElementById('contact-details').innerHTML = `
    <li>
      <a href="mailto:${d.email}" class="contact-item">
        <span class="contact-icon-wrap"><i data-lucide="mail"></i></span>
        <span class="contact-text">
          <span class="contact-label">Email</span>
          ${d.email}
        </span>
      </a>
    </li>
    <li>
      <a href="tel:${d.phone.replace(/\s/g,'')}" class="contact-item">
        <span class="contact-icon-wrap"><i data-lucide="phone"></i></span>
        <span class="contact-text">
          <span class="contact-label">Phone</span>
          ${d.phone}
        </span>
      </a>
    </li>
    <li>
      <a href="${d.linkedin}" target="_blank" rel="noopener" class="contact-item">
        <span class="contact-icon-wrap">${SVG_LINKEDIN}</span>
        <span class="contact-text">
          <span class="contact-label">LinkedIn</span>
          ${d.linkedin.replace('https://','')}
        </span>
      </a>
    </li>
    <li>
      <a href="${d.github}" target="_blank" rel="noopener" class="contact-item">
        <span class="contact-icon-wrap">${SVG_GITHUB}</span>
        <span class="contact-text">
          <span class="contact-label">GitHub</span>
          ${d.github.replace('https://','')}
        </span>
      </a>
    </li>`;

  /* ---- Footer ---- */
  document.getElementById('footer-text').innerHTML =
    `${d.name} &mdash; Computer Science Student`;
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const body      = document.body;
const themeBtn  = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeLabel= document.getElementById('theme-label');

function applyTheme(theme) {
  body.className = theme;
  themeLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
  lucide.createIcons({ nodes: [themeIcon] });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const next = body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

/* ============================================================
   NAVBAR — shadow on scroll
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ============================================================
   ACTIVE NAV LINK ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });

/* ============================================================
   SMOOTH SCROLL — offset for fixed navbar
   ============================================================ */
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight,
    behavior: 'smooth'
  });
});

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   (re-runs after render() so dynamically added .reveal nodes work)
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = entry.target.parentElement
        ? Array.from(entry.target.parentElement.children) : [];
      const staggerParent = entry.target.closest(
        '.projects-grid, .skills-grid, .contact-details, .experience-list, .education-cards-grid'
      );
      const delay = staggerParent ? siblings.indexOf(entry.target) * 80 : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   BOOT — render data, then init icons + reveal
   ============================================================ */
render();
lucide.createIcons();
initReveal();
setActiveLink();
