import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import VideoHeroSection from '@/components/VideoHeroSection';
import StoryIntroSection from '@/components/StoryIntroSection';
import MansorySection from '@/components/MansorySection';
import BrandIntroSection from '@/components/BrandIntroSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import SwitchingChair from '@/components/SwitchingChair';
import TestimonialSection from '@/components/TestimonialSection';
import InspirationSection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import { throttle } from '@/utils/performance';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress tracking (throttled for performance)
    const updateScrollProgress = throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    }, 16); // 60fps

    // Scroll Reveal Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Float Animation Observer
    const floatObserverOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const floatObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, floatObserverOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Observe all scroll-float elements
    document.querySelectorAll('.scroll-float, .scroll-float-slow, .scroll-float-subtle').forEach(el => {
      floatObserver.observe(el);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll progress listener
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    // Cleanup
    return () => {
      observer.disconnect();
      floatObserver.disconnect();
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header />
      
      {/* Scroll Curtain Sections */}
      <div className="scroll-curtain-section" data-section="hero">
        <VideoHeroSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="story">
        <StoryIntroSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="masonry">
        <MansorySection />
      </div>
      
      <div className="scroll-curtain-section" data-section="brand">
        <BrandIntroSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="showcase">
        <ProductShowcaseSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="switching">
        <SwitchingChair />
      </div>
      
      <div className="scroll-curtain-section" data-section="cta">
        <InspirationSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="testimonial">
        <TestimonialSection />
      </div>
      
      <div className="scroll-curtain-section" data-section="footer">
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
