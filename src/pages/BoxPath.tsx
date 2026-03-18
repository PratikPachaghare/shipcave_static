import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Images import
import boxwingsleft from "../assets/images/box-wings.png"; 
import boxwingsright from "../assets/images/box-wings2.png"; 

const BoxPath = () => {
  const { scrollYProgress } = useScroll();

  // Smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Image state
  const [currentBoxImg, setCurrentBoxImg] = useState(boxwingsleft);

  // Preload images (important)
  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = boxwingsleft;
    img2.src = boxwingsright;
  }, []);

  // Scroll checkpoints
  const scrollCheckpoints = [0, 0.2, 0.4, 0.6, 0.8, 1];

  // X movement (snake pattern)
  const xPositions = ["10%", "85%", "15%", "80%", "20%", "90%"];
  const xMovement = useTransform(smoothProgress, scrollCheckpoints, xPositions);

  // Y movement (FIXED - always visible)
  const topPosition = useTransform(
    smoothProgress,
    [0, 1],
    ["10vh", "80vh"] // FIX: was causing disappear before
  );

  // Rotation
  const rotateZ = useTransform(
    smoothProgress,
    scrollCheckpoints,
    [15, -15, 15, -15, 15, -15]
  );

  // ✅ FIXED: Image switching logic (no useTransform for images)
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (latest < 0.4) {
        setCurrentBoxImg(boxwingsleft);
      } else if (latest < 0.6) {
        setCurrentBoxImg(boxwingsright);
      } else if (latest < 0.8) {
        setCurrentBoxImg(boxwingsleft);
      } else {
        setCurrentBoxImg(boxwingsright);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div className="w-full mt-20 fixed inset-0 pointer-events-none z-[9999] overflow-visible">
      
      <motion.div
        style={{
          position: 'absolute',
          top: topPosition,
          left: xMovement,
          rotateZ: rotateZ,
          x: "-50%",
          y: "-50%",
        }}
        className="flex items-center justify-center"
      >
        <motion.div 
          className="relative"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.img 
            src={currentBoxImg} 
            alt="Flying Box" 
            className="w-auto h-24 md:h-40 object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))" }}
          />

          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-black/10 rounded-full blur-md" />
        </motion.div>
      </motion.div>

      {/* Optional path line */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path
          d="M 10% 50 Q 90% 1000, 15% 2000 T 85% 4000 T 20% 6000 T 90% 8000"
          fill="none"
          stroke="#f26522"
          strokeWidth="2"
          strokeDasharray="12,12"
        />
      </svg>
    </div>
  );
};

export default BoxPath;