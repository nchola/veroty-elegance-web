import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  rootMargin?: string;
  threshold?: number;
  preload?: boolean;
}

export const useLazyImage = (src: string, options: UseLazyImageOptions = {}) => {
  const { rootMargin = '50px', threshold = 0.1, preload = false } = options;
  const [isLoaded, setIsLoaded] = useState(preload);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (preload) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsError(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          const img = new Image();
          img.src = src;
          img.onload = () => setIsLoaded(true);
          img.onerror = () => setIsError(true);
        }
      },
      { rootMargin, threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, isLoaded, preload, rootMargin, threshold]);

  return { imgRef, isLoaded, isError, src: isLoaded ? src : undefined };
};