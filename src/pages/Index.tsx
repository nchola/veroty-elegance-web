import { useEffect } from 'react';
import Header from '@/components/Header';
import VideoHeroSection from '@/components/VideoHeroSection';
import StoryIntroSection from '@/components/StoryIntroSection';
import MansorySection from '@/components/MansorySection';
import BrandIntroSection from '@/components/BrandIntroSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
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

    // Cleanup
    return () => {
      observer.disconnect();
      floatObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="full-bleed section-seamless">
        <VideoHeroSection />
        <StoryIntroSection />
        <MansorySection />
        <BrandIntroSection />
        <FeaturedProductsSection />
        <TestimonialSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
