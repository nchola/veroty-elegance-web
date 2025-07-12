
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import ImageTrail from '../Animations/ImageTrail/ImageTrail';

const LuxuryCarousel = () => {
  // Hapus state currentSlide dan efek otomatis
  // const [currentSlide, setCurrentSlide] = useState(0);

  // Daftar 20 gambar Unsplash statis
  const unsplashImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
  ];

  // Hapus fungsi nextSlide dan prevSlide
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % furnitureItems.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + furnitureItems.length) % furnitureItems.length);
  // };

  // Hapus useEffect interval
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const renderSlide = (item: any, index: number) => {
    if (item.layout === "complex") {
      return (
        <div key={item.id}>
          <ImageTrail items={[item.image]} />
          <div>
            <ImageTrail items={["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]} />
          </div>
        </div>
      );
    }

    const aspectClasses = {
      square: "aspect-square",
      portrait: "aspect-[3/4]",
      tall: "aspect-[3/5]"
    };

    return (
      <div key={item.id}>
        <ImageTrail items={[item.image]} />
      </div>
    );
  };

  // Render hanya satu ImageTrail dengan 20 gambar
  return (
    <div className="luxury-carousel px-4 py-16" style={{ padding: '64px 0' }}>
      <div className="carousel-container">
        <ImageTrail items={unsplashImages} />
      </div>
    </div>
  );
};

export default LuxuryCarousel;
