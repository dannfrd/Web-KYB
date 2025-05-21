'use client';

import { animated, easings, useSpring, useTrail } from '@react-spring/web';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  threshold?: number;
}

// Enhanced AnimatedSection with customizable animation parameters
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  duration = 800,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "0px 0px -50px 0px" // Triggers animation sooner when scrolling
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)', // Reduced vertical movement
    delay,
    config: {
      duration: duration * 0.8, // Slightly faster animation
      easing: easings.easeOutQuart
    }
  });

  // Apply any className passed in but ensure there's no excessive margin
  const containerClass = `${className || ''} overflow-visible`.trim();

  return (
    <animated.div ref={ref} style={props} className={containerClass}>
      {children}
    </animated.div>
  );
};

// Elegant fade-in animation
export const FadeIn: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    delay,
    config: {
      tension: 280,
      friction: 60,
      easing: easings.easeInOutCubic
    }
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  );
};

// Professional slide from left with subtle shadow effect
export const SlideInFromLeft: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  duration = 800,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-80px)',
    filter: inView ? 'blur(0px)' : 'blur(4px)',
    delay,
    config: {
      duration,
      easing: easings.easeOutCubic
    }
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  );
};

// Professional slide from right with subtle shadow effect
export const SlideInFromRight: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  duration = 800,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(80px)',
    filter: inView ? 'blur(0px)' : 'blur(4px)',
    delay,
    config: {
      duration,
      easing: easings.easeOutCubic
    }
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  );
};

// Sophisticated zoom in effect with faster initial rendering
export const ZoomIn: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    initialInView: threshold <= 0.01, // Starts visible for hero section with small threshold
    fallbackInView: true // Ensures animation works even if IntersectionObserver fails
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.85)',
    delay,
    config: {
      tension: 280,
      friction: 70,
      easing: easings.easeOutQuad // Slightly faster easing
    }
  });

  // Safeguard children rendering
  const content = React.useMemo(() => children, [children]);

  return (
    <animated.div ref={ref} style={props} className={className}>
      {content}
    </animated.div>
  );
};

// Staggered children animation for lists or grids
export const StaggeredAnimation: React.FC<AnimatedSectionProps & { childrenCount: number }> = ({ 
  children, 
  delay = 0,
  childrenCount,
  className = "",
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const items = React.Children.toArray(children);
  const trail = useTrail(childrenCount, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay,
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
    },
  });

  return (
    <div ref={ref} className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

// Parallax effect for backgrounds or hero sections
export const ParallaxSection: React.FC<AnimatedSectionProps & { speed?: number }> = ({ 
  children, 
  delay = 0,
  speed = 0.5,
  className = "",
  threshold = 0
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold,
  });

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      // Set initial scroll position
      setScrollY(window.scrollY);
      
      // Add throttled scroll listener to improve performance
      let ticking = false;
      const scrollListener = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", scrollListener, { passive: true });
      return () => window.removeEventListener("scroll", scrollListener);
    }
  }, []);

  const props = useSpring({
    transform: `translateY(${scrollY * speed}px)`,
    opacity: inView ? 1 : 0.8,
    delay,
    config: {
      tension: 280,
      friction: 60,
    }
  });

  // Add custom styling to reduce spacing
  const combinedClassName = `${className || ''} overflow-hidden`.trim();

  return (
    <animated.div ref={ref} style={props} className={combinedClassName}>
      {children}
    </animated.div>
  );
};