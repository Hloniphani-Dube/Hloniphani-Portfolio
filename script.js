/* ============================================================
   SVG SNIPPETS for brand icons
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

  /* ---- <title> ---- */
  document.title = `${d.name} | Software Developer`;

  /* ---- Hero ---- */
  const profileImg = document.getElementById('profile-img');
  profileImg.src = d.profileImage;
  profileImg.alt = d.name;

  document.getElementById('hero-name').textContent = d.name;
  document.getElementById('hero-tagline').textContent = d.tagline;
  document.getElementById('hero-description').textContent = d.heroDescription;

  document.getElementById('hero-buttons').innerHTML = `
    <a href="${d.linkedin}" target="_blank" rel="noopener" class="btn">LinkedIn</a>
    <span class="btn-divider">|</span>
    <a href="${d.github}" target="_blank" rel="noopener" class="btn">GitHub</a>
    <span class="btn-divider">|</span>
    <a href="mailto:${d.email}" class="btn">Email Me</a>
    <span class="btn-divider">|</span>
    <a href="https://drive.google.com/file/d/1Xzy3Z5d-7lutWM7WnBtKdGDgZHGQb9f6/view?usp=sharing" target="_blank" rel="noopener" class="btn">CV</a>
  `;

  /* ---- About ---- */
  document.getElementById('about-content').innerHTML = 
    d.about.map(p => `<p>${p}</p>`).join('') +
    (d.currentFocus ? `
      <h3 style="margin-top:20px;margin-bottom:10px;font-size:1rem;font-weight:700;">Current Focus</h3>
      <ul style="padding-left:20px;">
        ${d.currentFocus.map(f => `<li style="margin:6px 0;line-height:1.6;">${f}</li>`).join('')}
      </ul>` : '');

  /* ---- Skills ---- */
  document.getElementById('skills-grid').innerHTML =
    d.skills.map(s => `<div class="skill-item">${s}</div>`).join('');

  /* ---- Education ---- */
  document.getElementById('education-grid').innerHTML =
    d.education.map(e => `
      <div class="education-card">
        <img src="${e.image}" alt="${e.title}" class="education-card-image" onerror="this.style.display='none';" />
        <div class="education-card-body">
          <h3>${e.title}</h3>
          <p>${e.meta}</p>
        </div>
      </div>`).join('');

  /* ---- Projects ---- */
  document.getElementById('projects-list').innerHTML =
    d.projects.map(p => `
      <div class="project-block">
        <h3>${p.title}</h3>
        <ul>
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="project-tech"><strong>Tech:</strong> ${p.tech}</div>
        <div class="project-links">
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn">Live</a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn">GitHub</a>` : ''}
        </div>
      </div>`).join('');

  /* ---- Experience ---- */
  document.getElementById('experience-list').innerHTML =
    d.experience.map(e => `
      <div class="experience-card">
        <h3>${e.title}</h3>
        <p class="experience-meta">${e.period}</p>
        <p>${e.description}</p>
      </div>`).join('');

  /* ---- Contact ---- */
  document.getElementById('contact-details').innerHTML = `
    <li><a href="mailto:${d.email}">Email: ${d.email}</a></li>
    <li><a href="tel:${d.phone}">Phone: ${d.phone}</a></li>
    <li><a href="${d.linkedin}" target="_blank" rel="noopener">${d.linkedin.replace('https://', '')}</a></li>
    <li><a href="${d.github}" target="_blank" rel="noopener">${d.github.replace('https://', '')}</a></li>
  `;
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 60;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   BOOT
   ============================================================ */
render();
