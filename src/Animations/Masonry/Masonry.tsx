/*
	Ultra Stable Masonry - No Height Management, No Recalculation
*/

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);
  const animationComplete = useRef(false);
  const lastItemsHash = useRef<string>('');

  useEffect(() => {
    const itemsHash = items.map(i => i.id).join(',');
    if (itemsHash !== lastItemsHash.current) {
      lastItemsHash.current = itemsHash;
      animationComplete.current = false;
      setImagesReady(false);
      preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
    }
  }, [items]);

  // Completely stable grid - no re-calculation triggers
  const grid = useMemo<GridItem[]>(() => {
    if (!width || items.length === 0) return [];

    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;
    const colHeights = new Array(columns).fill(0);

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  // ONE-TIME container height setup
  useEffect(() => {
    if (!imagesReady || grid.length === 0 || !containerRef.current) return;
    
    const gap = 16;
    const colHeights = new Array(columns).fill(0);

    grid.forEach((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      colHeights[col] += item.height / 2 + gap;
    });

    const maxHeight = Math.max(...colHeights);
    containerRef.current.style.height = `${maxHeight}px`;
  }, [grid, columns, imagesReady]);

  // SINGLE-FIRE animation effect
  useLayoutEffect(() => {
    if (!imagesReady || grid.length === 0 || animationComplete.current) return;

    // Kill any existing animations
    gsap.killTweensOf("[data-key]");
    
    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const element = document.querySelector(selector);
      if (!element) return;
      
      // Calculate initial position
      let initialX = item.x;
      let initialY = item.y;
      
      if (animateFrom === "bottom") {
        initialY = window.innerHeight + 100;
      } else if (animateFrom === "top") {
        initialY = -200;
      } else if (animateFrom === "left") {
        initialX = -200;
      } else if (animateFrom === "right") {
        initialX = window.innerWidth + 200;
      } else if (animateFrom === "center") {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          initialX = containerRect.width / 2 - item.w / 2;
          initialY = containerRect.height / 2 - item.h / 2;
        }
      } else if (animateFrom === "random") {
        const randomDirection = Math.random();
        if (randomDirection < 0.25) {
          initialY = window.innerHeight + 100;
        } else if (randomDirection < 0.5) {
          initialY = -200;
        } else if (randomDirection < 0.75) {
          initialX = -200;
        } else {
          initialX = window.innerWidth + 200;
        }
      }
      
      // Set initial state
      gsap.set(selector, {
        position: "absolute",
        left: 0,
        top: 0,
        x: initialX,
        y: initialY,
        width: item.w,
        height: item.h,
        opacity: 0,
        scale: 0.85,
        rotationY: 15,
        ...(blurToFocus && { filter: "blur(12px)" }),
      });

      // ONE-TIME reveal animation
      gsap.to(selector, {
        x: item.x,
        y: item.y,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        ...(blurToFocus && { filter: "blur(0px)" }),
        duration: duration * 0.8,
        ease: ease,
        delay: index * stagger,
        onComplete: index === grid.length - 1 ? () => {
          animationComplete.current = true;
        } : undefined,
      });
    });
  }, [imagesReady, grid.length]); // Minimal dependencies

  const handleMouseEnter = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: imagesReady ? 'auto' : '400px',
        position: 'relative',
        contain: 'layout style'
      }}
    >
      {grid.map((item) => {
        return (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute cursor-pointer"
            style={{ 
              willChange: "transform, opacity, filter",
              backfaceVisibility: "hidden",
              zIndex: 1,
              transformOrigin: "center center"
            }}
            onClick={() => window.open(item.url, "_blank", "noopener")}
            onMouseEnter={(e) => handleMouseEnter(e, item)}
            onMouseLeave={(e) => handleMouseLeave(e, item)}
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-[15px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[15px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
              
              {/* Hover overlay for better UX */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 rounded-[15px] flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                  View Details
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
