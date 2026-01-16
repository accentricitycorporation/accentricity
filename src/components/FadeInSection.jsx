import React, { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, className = "", delayMs = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return (
    <section
      ref={ref}
      className={`fade ${visible ? "fade--in" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
