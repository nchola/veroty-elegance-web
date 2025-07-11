
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import BrandIntroSection from '@/components/BrandIntroSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
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

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
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

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandIntroSection />
      <FeaturedProductsSection />
      <CraftsmanshipSection />
      <TestimonialSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
