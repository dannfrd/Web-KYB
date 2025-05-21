'use client';

import About from "@/components/about";
import Activities from "@/components/activities";
import Contact from "@/components/contact";
import Divisions from "@/components/divisions";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Membership from "@/components/membership";
import Navbar from "@/components/navbar";
import News from "@/components/news";
import PageTransition from "@/components/PageTransition";
import styles from "@/styles/sectionSpacing.module.css";
import {
  AnimatedSection,
  FadeIn,
  SlideInFromLeft,
  SlideInFromRight,
  ZoomIn
} from "@/utils/animation";
import { useReturnToHeroAnimation } from "@/utils/heroAnimation";
import { useScrollHandler } from "@/utils/smoothScroll";
import { useEffect } from "react";

export default function Home() {
  // Handle smooth scrolling when URL has hash
  useScrollHandler();

  // Add animation when returning to hero section
  useReturnToHeroAnimation();

  // Ensure page starts at the hero section on initial load
  useEffect(() => {
    // Set a small timeout to ensure DOM is fully loaded before scrolling
    const timer = setTimeout(() => {
      // First scroll to top to ensure consistent behavior
      window.scrollTo(0, 0);
      
      // If there's no hash in the URL, focus on hero section
      if (!window.location.hash) {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Entry animation shown when page first loads */}
      <PageTransition />
      
      <div className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <FadeIn threshold={0.01}>
          <Navbar />
        </FadeIn>
      </div>
      <main className="overflow-hidden flex flex-col w-full px-4 sm:px-6 lg:px-8">
        <section id="hero">
          <ZoomIn delay={0} threshold={0.01}>
            <Hero />
          </ZoomIn>
        </section>
        <section id="about">
          <SlideInFromLeft delay={200} threshold={0.05}>
            <About />
          </SlideInFromLeft>
        </section>
        <section id="divisions">
          <AnimatedSection delay={300} threshold={0.05}>
            <Divisions />
          </AnimatedSection>
        </section>
        <section id="activities">
          <SlideInFromRight delay={400} threshold={0.05}>
            <Activities />
          </SlideInFromRight>
        </section>
        <section id="membership">
          <AnimatedSection delay={500} threshold={0.05} className={`mb-0 pb-0 ${styles.noGap}`}>
            <Membership />
          </AnimatedSection>
        </section>
        <section id="gallery">
          <AnimatedSection delay={300} threshold={0.05} className={`mt-0 pt-0 ${styles.sectionWrapper}`}>
            <Gallery />
          </AnimatedSection>
        </section>
        <section id="news">
          <SlideInFromLeft delay={350} threshold={0.05}>
            <News />
          </SlideInFromLeft>
        </section>
        <section id="contact">
          <FadeIn delay={400} threshold={0.05}>
            <Contact />
          </FadeIn>
        </section>
      </main>
      <FadeIn delay={450} threshold={0.01}>
        <Footer />
      </FadeIn>
    </div>
  )
}
