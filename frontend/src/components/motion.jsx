import { useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import CountUp from "react-countup";

export const scrollToSection = (selector) => {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(selector, { offset: -72, duration: 1.4 });
  } else {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Reveal = ({ children, delay = 0, y = 28, className = "", testid }) => (
  <motion.div
    data-testid={testid}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", delay = 0, stagger = 0.14 }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className={`block overflow-hidden ${lineClassName}`}>
        <motion.span
          className="block will-change-transform"
          initial={{ y: "112%" }}
          animate={{ y: 0 }}
          transition={{ delay: delay + i * stagger, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

export const MaskedLinesInView = ({ lines, className = "", lineClassName = "", stagger = 0.12, testid }) => (
  <motion.span
    className={className}
    data-testid={testid}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    {lines.map((line, i) => (
      <span key={i} className={`block overflow-hidden ${lineClassName}`}>
        <motion.span
          className="block will-change-transform"
          variants={{
            hidden: { y: "112%" },
            visible: {
              y: 0,
              transition: { delay: i * stagger, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

export const Counter = ({ end, prefix = "", suffix = "", duration = 2.2, className = "", testid }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <span ref={ref} data-testid={testid} className={className}>
      {inView ? (
        <CountUp end={end} prefix={prefix} suffix={suffix} duration={duration} separator="," />
      ) : (
        <span>
          {prefix}0{suffix}
        </span>
      )}
    </span>
  );
};

export const Magnetic = ({ children, className = "", testid, onClick, as = "button", type, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || !el.getBoundingClientRect) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = as === "a" ? motion.a : motion.button;
  return (
    <Tag
      ref={ref}
      data-testid={testid}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      type={as === "button" ? type || "button" : undefined}
    >
      {children}
    </Tag>
  );
};
