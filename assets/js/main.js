/* =========================================================
   Africa Services RDC — scripts partagés
   - en-tête, menu mobile et pied de page injectés (une seule
     source à modifier pour toutes les pages)
   - animations au défilement, compteurs, barres de progression
   - filtres, formulaires, sélecteur de don
   ========================================================= */

/* ---- Coordonnées : à modifier ici une seule fois ---- */
const ORG = {
  name: "Africa Services RDC",
  short: "AFSRDC",
  sloganFr: "Restaurer les vies et transformer les communautés",
  sloganEn: "Restoring Lives and Transforming Communities",
  phone: "+243 900 000 000",
  email: "contact@africaservicesrdc.org",
  address: "Avenue de la Paix, Goma, Nord-Kivu, RD Congo",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

const NAV = [
  { href: "index.html", label: "Accueil" },
  { href: "a-propos.html", label: "À propos" },
  { href: "ce-que-nous-faisons.html", label: "Ce que nous faisons" },
  { href: "projets.html", label: "Nos projets" },
  { href: "actualites.html", label: "Actualités" },
  { href: "publications.html", label: "Publications" },
  { href: "contact.html", label: "Contact" },
];

const LOGO_SVG = `
<svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
  <rect width="48" height="48" rx="14" fill="#f26a1b"/>
  <path d="M10 33a14 14 0 0 1 28 0Z" fill="#fff"/>
  <rect x="22.6" y="9" width="2.8" height="11" rx="1.4" fill="#fff"/>
  <rect x="19" y="12.2" width="10" height="2.8" rx="1.4" fill="#fff"/>
  <rect x="10.4" y="14.8" width="2.6" height="6" rx="1.3" transform="rotate(-45 11.7 17.8)" fill="#fff" opacity=".75"/>
  <rect x="35" y="14.8" width="2.6" height="6" rx="1.3" transform="rotate(45 36.3 17.8)" fill="#fff" opacity=".75"/>
  <rect x="8" y="36" width="32" height="3" rx="1.5" fill="#2a1a12" opacity=".35"/>
</svg>`;

const logoHTML = `
<a href="index.html" class="logo" aria-label="${ORG.name} — accueil">
  ${LOGO_SVG}
  <span class="logo__text"><span class="logo__name">Africa Services</span><span class="logo__sub">RD CONGO</span></span>
</a>`;

const headerLogoHTML = `
<a href="index.html" class="logo" aria-label="${ORG.name} — accueil">
  ${LOGO_SVG}
  <span class="logo__text"><span class="logo__name logo__name--acronym">${ORG.short}</span></span>
</a>`;

const currentPage = (() => {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
})();

function buildHeader() {
  const navLinks = NAV.map(
    (n) => `<a href="${n.href}" class="${n.href === currentPage ? "is-active" : ""}" ${n.href === currentPage ? 'aria-current="page"' : ""}>${n.label}</a>`
  ).join("");
  const drawerLinks = NAV.map(
    (n) => `<a href="${n.href}" class="${n.href === currentPage ? "is-active" : ""}">${n.label}<i data-lucide="arrow-up-right"></i></a>`
  ).join("");

  return `
<a class="skip-link" href="#main">Aller au contenu</a>
<div class="topbar">
  <div class="container">
    <div class="topbar__left">
      <span><i data-lucide="phone"></i><a href="tel:${ORG.phone.replace(/\s/g, "")}">${ORG.phone}</a></span>
      <span class="hide-md"><i data-lucide="mail"></i><a href="mailto:${ORG.email}">${ORG.email}</a></span>
    </div>
    <div class="topbar__right">
      <span class="slogan">${ORG.sloganEn}</span>
      <a href="s-impliquer.html">S'impliquer</a>
    </div>
  </div>
</div>
<header class="site-header" id="site-header">
  <div class="container">
    ${headerLogoHTML}
    <nav class="nav" aria-label="Navigation principale">${navLinks}</nav>
    <div class="header-actions">
      <a href="s-impliquer.html" class="btn btn--outline btn--sm">Get Involved</a>
      <a href="faire-un-don.html" class="btn btn--primary btn--sm"><i data-lucide="heart"></i>Faire un don</a>
      <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
    </div>
  </div>
</header>
<div class="drawer" id="drawer" aria-hidden="true">
  <nav aria-label="Navigation mobile">${drawerLinks}</nav>
  <div class="drawer__cta">
    <a href="faire-un-don.html" class="btn btn--primary btn--block">Faire un don</a>
    <a href="s-impliquer.html" class="btn btn--ghost btn--block">S'impliquer / Get Involved</a>
  </div>
  <div class="drawer__meta">${ORG.address}<br>${ORG.phone} · ${ORG.email}</div>
</div>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        ${logoHTML}
        <p class="footer-about">Organisation internationale à base de foi chrétienne intervenant en RD Congo dans le relief, la santé mentale et le soutien psychosocial, le développement socio-économique et l'éducation.</p>
        <p class="footer-slogan">« ${ORG.sloganFr} »</p>
        <div class="socials">
          <a href="${ORG.socials.facebook}" aria-label="Facebook"><i data-lucide="facebook"></i></a>
          <a href="${ORG.socials.instagram}" aria-label="Instagram"><i data-lucide="instagram"></i></a>
          <a href="${ORG.socials.linkedin}" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
          <a href="${ORG.socials.youtube}" aria-label="YouTube"><i data-lucide="youtube"></i></a>
        </div>
      </div>
      <div>
        <h4>Organisation</h4>
        <ul>
          <li><a href="a-propos.html">À propos</a></li>
          <li><a href="a-propos.html#valeurs">Nos valeurs</a></li>
          <li><a href="projets.html">Nos projets</a></li>
          <li><a href="actualites.html">Actualités</a></li>
          <li><a href="publications.html">Publications</a></li>
        </ul>
      </div>
      <div>
        <h4>Domaines</h4>
        <ul>
          <li><a href="ce-que-nous-faisons.html#urgence">Aide d'urgence</a></li>
          <li><a href="ce-que-nous-faisons.html#sante-mentale">Santé mentale & SPS</a></li>
          <li><a href="ce-que-nous-faisons.html#leadership">Leadership & discipolat</a></li>
          <li><a href="ce-que-nous-faisons.html#developpement">Développement socio-économique</a></li>
          <li><a href="ce-que-nous-faisons.html#education">Éducation</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul class="footer-contact">
          <li><i data-lucide="map-pin"></i><span>${ORG.address}</span></li>
          <li><i data-lucide="phone"></i><a href="tel:${ORG.phone.replace(/\s/g, "")}">${ORG.phone}</a></li>
          <li><i data-lucide="mail"></i><a href="mailto:${ORG.email}">${ORG.email}</a></li>
        </ul>
        <div style="margin-top:24px"><a href="faire-un-don.html" class="btn btn--primary btn--sm">Faire un don</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${year} ${ORG.name} (${ORG.short}). Tous droits réservés.</span>
      <span><a href="credits.html">Crédits photos</a> · <a href="contact.html">Nous écrire</a></span>
    </div>
  </div>
</footer>
<a href="faire-un-don.html" class="btn btn--primary fab-donate" id="fab-donate"><i data-lucide="heart"></i>Faire un don</a>`;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.outerHTML = buildHeader();
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });

  initHeader();
  initReveal();
  initCounters();
  initFilters();
  initSubnav();
  initForms();
  initDonate();
});

function initHeader() {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".menu-toggle");
  const drawer = document.getElementById("drawer");
  const fab = document.getElementById("fab-donate");
  const hideFab = currentPage === "faire-un-don.html";

  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("is-scrolled", y > 10);
    fab && !hideFab && fab.classList.toggle("is-visible", y > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && drawer) {
    const setOpen = (open) => {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      drawer.setAttribute("aria-hidden", String(!open));
    };
    toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
    drawer.addEventListener("click", (e) => e.target.closest("a") && setOpen(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
    window.addEventListener("resize", () => window.innerWidth > 1024 && setOpen(false));
  }
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, .progress__bar");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    fillBars(document);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        if (entry.target.classList.contains("progress__bar")) fillBar(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}
function fillBar(bar) {
  const i = bar.querySelector("i");
  if (i) i.style.width = (bar.dataset.value || 0) + "%";
}
function fillBars(root) {
  root.querySelectorAll(".progress__bar").forEach(fillBar);
}

function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const t0 = performance.now();
    const fmt = (v) => Math.round(v).toLocaleString("fr-FR");
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nums.forEach((el) => (el.textContent = (el.dataset.prefix || "") + Number(el.dataset.count).toLocaleString("fr-FR") + (el.dataset.suffix || "")));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }),
    { threshold: 0.5 }
  );
  nums.forEach((el) => io.observe(el));
}

/* Filtres génériques : <div data-filters="groupe"> + items [data-filter-item][data-cat] */
function initFilters() {
  document.querySelectorAll("[data-filters]").forEach((bar) => {
    const group = bar.dataset.filters;
    const items = document.querySelectorAll(`[data-filter-group="${group}"] [data-filter-item]`);
    bar.querySelectorAll(".filter").forEach((btn) => {
      const cat = btn.dataset.cat;
      const count = cat === "all" ? items.length : [...items].filter((i) => i.dataset.cat.split(" ").includes(cat)).length;
      const badge = btn.querySelector(".count");
      if (badge) badge.textContent = count;
      btn.addEventListener("click", () => {
        bar.querySelectorAll(".filter").forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        items.forEach((it) => {
          const show = cat === "all" || it.dataset.cat.split(" ").includes(cat);
          it.classList.toggle("is-hidden", !show);
        });
        fillBars(document);
      });
    });
  });
}

/* Sous-navigation : surligne la section visible */
function initSubnav() {
  const links = document.querySelectorAll(".subnav a[href^='#']");
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map();
  links.forEach((a) => { const s = document.querySelector(a.getAttribute("href")); if (s) map.set(s, a); });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove("is-active"));
        const a = map.get(e.target);
        a.classList.add("is-active");
        a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      }
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  map.forEach((_, s) => io.observe(s));
}

/* Formulaires : validation côté client.
   GitHub Pages n'a pas de serveur : pour recevoir les messages,
   renseignez data-endpoint (ex. https://formspree.io/f/xxxx). */
function initForms() {
  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll("[required]").forEach((input) => {
        const field = input.closest(".field");
        const valid = input.type === "checkbox" ? input.checked : input.checkValidity() && input.value.trim() !== "";
        if (field) field.classList.toggle("has-error", !valid);
        if (!valid) ok = false;
      });
      if (!ok) { form.querySelector(".has-error input, .has-error textarea, .has-error select")?.focus(); return; }

      const success = form.querySelector(".form-success") || form.parentElement.querySelector(".form-success");
      const endpoint = form.dataset.endpoint;
      const btn = form.querySelector("[type=submit]");
      if (btn) { btn.disabled = true; btn.dataset.label = btn.innerHTML; btn.textContent = "Envoi…"; }
      try {
        if (endpoint) {
          await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        }
        form.reset();
        success && success.classList.add("is-visible");
      } catch (err) {
        alert("L'envoi a échoué. Écrivez-nous directement à " + ORG.email);
      } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = btn.dataset.label; }
      }
    });
    form.querySelectorAll("input, textarea, select").forEach((i) =>
      i.addEventListener("input", () => i.closest(".field")?.classList.remove("has-error"))
    );
  });
}

/* Sélecteur de don */
function initDonate() {
  const box = document.querySelector("[data-donate]");
  if (!box) return;
  const impacts = {
    10: "Un kit d'hygiène complet pour une famille déplacée.",
    25: "Des fournitures scolaires pour 5 enfants pendant une année.",
    50: "Un mois de séances d'écoute et de soutien psychosocial pour un survivant.",
    100: "Un kit de démarrage d'activité génératrice de revenus pour une mère.",
    250: "La formation d'un leader communautaire en leadership serviteur.",
    500: "Des vivres d'urgence pour 20 familles pendant deux semaines.",
  };
  const amountBtns = box.querySelectorAll(".amount");
  const custom = box.querySelector("#custom-amount");
  const note = box.querySelector("[data-impact]");
  const total = box.querySelector("[data-total]");
  const freqBtns = box.querySelectorAll(".seg button");
  let amount = 50;
  let freq = "once";

  const render = () => {
    const keys = Object.keys(impacts).map(Number);
    const best = keys.filter((k) => k <= amount).pop() || keys[0];
    note.textContent = (amount >= keys[0] ? `${amount} $ ` : "") + (freq === "monthly" ? "chaque mois : " : ": ") + impacts[best].charAt(0).toLowerCase() + impacts[best].slice(1);
    total.textContent = `Donner ${amount || 0} $${freq === "monthly" ? " / mois" : ""}`;
  };
  amountBtns.forEach((b) =>
    b.addEventListener("click", () => {
      amountBtns.forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      amount = Number(b.dataset.amount);
      custom.value = "";
      render();
    })
  );
  custom.addEventListener("input", () => {
    amountBtns.forEach((x) => x.classList.remove("is-active"));
    amount = Math.max(0, Math.round(Number(custom.value) || 0));
    render();
  });
  freqBtns.forEach((b) =>
    b.addEventListener("click", () => {
      freqBtns.forEach((x) => { x.classList.remove("is-active"); x.setAttribute("aria-pressed", "false"); });
      b.classList.add("is-active");
      b.setAttribute("aria-pressed", "true");
      freq = b.dataset.freq;
      render();
    })
  );
  render();
}
