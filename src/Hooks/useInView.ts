import { useEffect, useRef, useState } from "react";

export default function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0, // trigger as soon as visible
        rootMargin: "0px 0px -1px 0px", // wait until element is ~100px inside viewport
        ...options,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
