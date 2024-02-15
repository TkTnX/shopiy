// База

import ScrollReveal from "scrollreveal";
ScrollReveal({
  distance: "60px",
  duration: 1800,
});

function ScrollRevealFunc() {
  ScrollReveal().reveal(
    `.header, .separation-line, .weDo__categories, .weDo__img-1, .products-hint, .hint-process, .footer`,
    {
      origin: "top",
    }
  );

  ScrollReveal().reveal(`.hint-progress, .weDo__img-2, .weDo__category-desc`, {
    origin: "right",
  });
  ScrollReveal().reveal(
    `.top__info, .services__achivments-item, .weDo__desc, .weDo__img-4, .services__title, .products__img, .process__desc, .contacts__desc, .contacts__form`,
    {
      origin: "bottom",
    }
  );

  ScrollReveal().reveal(
    `.top__form, .hint, .weDo__img-3, .process__title, .process__img-wrapper`,
    {
      origin: "left",
    }
  );
  ScrollReveal().reveal(
    `.hint-video, .services__img, .weDo__title, .weDo__category-title, .products__title, .contacts__title `,
    {
      origin: "left",
      duration: 1000,
    }
  );
  ScrollReveal().reveal(`.products__item`, {
    origin: "left",
    duration: 1000,
    interval: 500,
  });
  ScrollReveal().reveal(`.hint-process__avatars-item`, {
    origin: "left",
    duration: 1000,
    interval: 300,
  });
}

export default ScrollRevealFunc;
