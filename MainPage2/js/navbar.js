import { $ } from './utils.js';

/**
 * Handles navbar scrolled threshold behavior
 */
export function initNavbar() {
  const mainNav = $('#main-nav');
  
  // Move navbar to body to fix z-index overlay issues
  if (mainNav && mainNav.parentNode !== document.body) {
    document.body.insertBefore(mainNav, document.body.firstChild);
  }
  
  // Change background only when scrolling past the hero section
  const scrollThreshold = 50;

  if (mainNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    });
  }
}
