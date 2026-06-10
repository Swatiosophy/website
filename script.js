document.addEventListener('DOMContentLoaded', () => {

  // ── Lenis smooth scroll ──────────────────────────────────────
  const lenis = new Lenis({
    duration: 0.8,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ── Nav scroll class ─────────────────────────────────────────
  const nav = document.getElementById('nav');
  lenis.on('scroll', ({ scroll }) => {
    nav.classList.toggle('is-scrolled', scroll > 60);
  });

  // ── Mobile nav toggle ────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  function openNav() {
    navLinks.classList.add('is-open');
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation');
    document.body.style.overflow = 'hidden';
    lenis.stop();
  }

  function closeNav() {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    document.body.style.overflow = '';
    lenis.start();
  }

  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('is-open') ? closeNav() : openNav();
  });

  // Close on any nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) closeNav();
  });

  // ── Smooth anchor scrolling ──────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 0.8 });
    });
  });

  // ── Intersection Observer for reveal animations ───────────────
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -56px 0px' }
  );

  reveals.forEach(el => observer.observe(el));

});
