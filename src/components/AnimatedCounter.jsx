import React, { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isFloat = String(target).includes(".");
          const numTarget = parseFloat(target);
          const increment = numTarget / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numTarget) {
              clearInterval(timer);
              setCount(numTarget);
            } else {
              setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const isFloat = String(target).includes(".");
  const display = isFloat ? count.toFixed(1) : count;

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}
