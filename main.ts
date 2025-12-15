const sections: NodeListOf<HTMLElement> =
  document.querySelectorAll('.section');

const observerOptions: IntersectionObserverInit = {
  root: null,
  threshold: 0.15,
};

const revealOnScroll = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target as HTMLElement;
      target.classList.add('visible');
      target.classList.remove('hidden');
      observer.unobserve(target);
    }
  });
};

const observer = new IntersectionObserver(
  revealOnScroll,
  observerOptions
);

sections.forEach(section => observer.observe(section));
