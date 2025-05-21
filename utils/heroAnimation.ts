'use client';

import { useEffect, useRef } from 'react';

// Track if we're returning to the hero section
let hasVisitedBefore = false;

// Function to get a reference to whether the user has visited before
export function useHeroAnimation() {
  const hasAnimatedRef = useRef(hasVisitedBefore);
  
  // Update the global state when component mounts
  useEffect(() => {
    // This will return true after the first render
    hasVisitedBefore = true;
    
    return () => {
      // Keep track of state between visits
      hasAnimatedRef.current = true;
    };
  }, []);
  
  return {
    isFirstVisit: !hasAnimatedRef.current
  };
}

// Function to create a more dramatic animation when returning to the hero
export function useReturnToHeroAnimation() {
  useEffect(() => {
    // Handler for when a user clicks a link to return to the hero
    const handleHeroLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href') || target.parentElement?.getAttribute('href');
      
      if (href === '#hero' || href === '/#hero' || href === '/') {
        e.preventDefault();
        
        // Show return animation
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          // Add flash effect to the hero section
          heroSection.classList.add('flash-animation');
          
          // Scroll to hero
          heroSection.scrollIntoView({ behavior: 'smooth' });
          
          // Remove flash effect
          setTimeout(() => {
            heroSection.classList.remove('flash-animation');
          }, 1000);
        }
      }
    };
    
    // Add event listeners to navbar links
    const navLinks = document.querySelectorAll('a[href="#hero"], a[href="/#hero"], a[href="/"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleHeroLinkClick as EventListener);
    });
    
    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleHeroLinkClick as EventListener);
      });
    };
  }, []);
}