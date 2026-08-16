import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    // High performance GSAP quickSetters (Zero GC allocation per frame)
    const xDotSet = gsap.quickSetter(dot, "x", "px");
    const yDotSet = gsap.quickSetter(dot, "y", "px");
    const xOutlineTo = gsap.quickTo(outline, "x", { duration: 0.2, ease: "power2.out" });
    const yOutlineTo = gsap.quickTo(outline, "y", { duration: 0.2, ease: "power2.out" });

    const moveCursor = (e) => {
      xDotSet(e.clientX);
      yDotSet(e.clientY);
      xOutlineTo(e.clientX);
      yOutlineTo(e.clientY);
    };

    const addHover = () => {
      dot.style.width = "0px";
      dot.style.height = "0px";
      outline.style.width = "54px";
      outline.style.height = "54px";
      outline.style.borderColor = "var(--color-accent)";
      outline.style.background = "rgba(59, 130, 246, 0.1)";
    };

    const removeHover = () => {
      dot.style.width = "6px";
      dot.style.height = "6px";
      outline.style.width = "36px";
      outline.style.height = "36px";
      outline.style.borderColor = "rgba(255, 255, 255, 0.3)";
      outline.style.background = "transparent";
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    const interactiveSelector = "a, button, [data-cursor-hover], input, textarea, select";

    const handleMouseOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        addHover();
      } else {
        removeHover();
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
