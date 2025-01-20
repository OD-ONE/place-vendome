/** Example:
 * const body = document.querySelector('body');
 * initObserver(body, () => body.style.backgroundColor = 'red' [, observerOptions, timeout]);
 */

// eslint-disable-next-line max-len
export default function initObserver(el, callback, options = { threshold: 0.5 }) {
  if (!el) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        try {
          callback();
        } catch (error) {
          console.error('Error in callback function:', error);
        }
        observer.unobserve(el);
      }
    });
  }, options);

  observer.observe(el);
}
