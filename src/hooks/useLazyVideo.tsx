import { useEffect, useRef, useState } from 'react';

interface UseLazyVideoOptions {
  rootMargin?: string;
  threshold?: number;
  preload?: boolean;
}

export const useLazyVideo = (src: string, options: UseLazyVideoOptions = {}) => {
  const { rootMargin = '100px', threshold = 0.1, preload = false } = options;
  const [isLoaded, setIsLoaded] = useState(preload);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (preload) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          setIsLoaded(true);
        }
      },
      { rootMargin, threshold }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded, preload, rootMargin, threshold]);

  const videoProps = {
    ref: videoRef,
    src: isLoaded ? src : undefined,
    'data-src': src,
    loading: 'lazy' as const,
  };

  return { videoRef, isLoaded, isInView, videoProps };
};