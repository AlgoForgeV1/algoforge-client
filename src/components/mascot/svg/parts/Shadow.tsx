import { motion, easeInOut } from "framer-motion";

export default function Shadow() {
  return (
    <motion.g
      animate={{
        scaleX: [1, 0.96, 1],
        opacity: [0.28, 0.18, 0.28],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      }}
    >
      <ellipse
        cx={400}
        cy={680}
        rx={210}
        ry={38}
        fill="url(#dropShadow)"
      />
    </motion.g>
  );
}