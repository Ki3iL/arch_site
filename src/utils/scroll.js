/**
 * Плавно прокручивает страницу к элементу по его ID
 * @param {string} id - ID элемента, к которому нужно прокрутить
 * @param {number} offset - Отступ от верха страницы (для учета фиксированного меню)
 */
export function scrollToElement(id, offset = 80) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Инициализирует плавную прокрутку для всех внутренних ссылок с якорями
 * @param {number} offset - Отступ от верха страницы (для учета фиксированного меню)
 */
export function initSmoothScroll(offset = 80) {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.hash) {
      e.preventDefault();
      const id = target.hash.slice(1);
      scrollToElement(id, offset);
    }
  });
} 