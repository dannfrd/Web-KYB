'use client';

// Smooth scroll to element function
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    // Calculate offset to account for fixed navbar
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
    
    // Get element's position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Calculate position adjusted for navbar
    const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px for spacing
    
    // Perform smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Hook for handling anchor links
export const useScrollHandler = (): void => {
  if (typeof window !== 'undefined') {
    // Run once on mount
    setTimeout(() => {
      // Check if there's a hash in the URL
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // Remove the # character
        scrollToElement(id);
      } else {
        // If no hash, scroll to hero section
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, 100);
  }
};