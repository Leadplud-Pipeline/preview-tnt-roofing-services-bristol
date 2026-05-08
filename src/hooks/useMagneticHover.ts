import { useCallback, useRef } from "react";

export function useMagneticHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const card = ref.current;
    if (!card || window.matchMedia("(hover: none)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.transition = "transform 0.1s ease";
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
