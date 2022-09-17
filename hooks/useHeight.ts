import { useEffect, useRef } from "react";

export default function useHeight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.clientHeight;
      const windowHeight = window.innerHeight - 150;
      if (height > windowHeight) {
        containerRef.current.style.height = `${windowHeight}px`;
      }
    }
  }, []);
  return containerRef;
}
