/* begin cursor-arrow */
export default function initCursorArrow() {
  document.querySelectorAll('.cursor-arrow').forEach((element) => {
    // Создаем кастомный курсор
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-arrow__cursor');
    element.appendChild(cursor);

    element.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-arrow__cursor--show');
      cursor.classList.remove('cursor-arrow__cursor--hidden');
    });

    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-arrow__cursor--show');
      cursor.classList.add('cursor-arrow__cursor--hidden');
    });

    element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${event.clientY - rect.top}px`;

      if (x < rect.width / 2) {
        cursor.classList.add('cursor-arrow__cursor--left');
        cursor.classList.remove('cursor-arrow__cursor--right');
      } else {
        cursor.classList.add('cursor-arrow__cursor--right');
        cursor.classList.remove('cursor-arrow__cursor--left');
      }
    });
  });
}
/* end cursor-arrow */
