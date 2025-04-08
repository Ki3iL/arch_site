/**
 * Плавная прокрутка к элементу по ID
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
 * Инициализация плавной прокрутки для всех внутренних ссылок с якорями
 * @param {number} offset - Отступ от верха страницы (для учета фиксированного меню)
 */
export function initSmoothScroll(offset = 80) {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const id = href.substring(1);
        scrollToElement(id, offset);
      });
    });
  });
} 