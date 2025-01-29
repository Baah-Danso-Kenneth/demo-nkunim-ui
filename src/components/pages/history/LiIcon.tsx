import { motion, useScroll } from "framer-motion";
import React, { RefObject } from "react";


function LiIcon({ reference }: { reference: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: reference, 
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-zinc-800">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-bg-softBlend stroke-1 fill-none" />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-bg-softBlend stroke-[5px] fill-brand-light"
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 animate-pulse fill-brand-hot-red" />
      </svg>
    </figure>
  );
}

export default LiIcon;
