import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFadeUp = (options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [options.duration, options.delay]);
  return ref;
};

export const useStaggerUp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.children;
    if (!children.length) return;
    gsap.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return ref;
};

export const useParallax = (speed = 0.3) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [speed]);
  return ref;
};

export const useScaleIn = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return ref;
};
