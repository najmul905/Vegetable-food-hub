import { useEffect, useRef, useState } from "react";

export default function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}