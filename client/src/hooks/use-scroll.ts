/**
 * Hook for scroll-related utility functions
 */

/**
 * Scrolls the window to the top of the page
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}