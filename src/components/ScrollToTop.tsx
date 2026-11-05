"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-navy text-cream shadow-lg transition-all duration-300 hover:bg-gold hover:text-navy ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
