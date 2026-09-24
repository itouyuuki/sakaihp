(() => {
  // FV スライダー
  const slides = document.querySelectorAll('.fv__slide');
  const dots = document.querySelectorAll('.fv__dots li');
  let cur = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[cur].classList.remove('is-active');
      dots[cur].classList.remove('is-active');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-active');
      dots[cur].classList.add('is-active');
    }, 5500);
  }

  // ヘッダー
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // SPメニュー
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('gnav');
  const toggle = (open) => {
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle(btn.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));

  // スクロール表示
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.js-reveal').forEach(el => io.observe(el));
})();
