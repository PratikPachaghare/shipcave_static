import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// Images import
import boxwingsleft from "../assets/images/box-wings.png"; 
import boxwingsright from "../assets/images/box-wings2.png"; 

const BoxPath = () => {
  const { scrollYProgress } = useScroll();
  
  // State to handle the current image source manually
  const [currentBoxImg, setCurrentBoxImg] = useState(boxwingsleft);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollCheckpoints = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const xPositions = ["10%", "85%", "15%", "80%", "20%", "90%"];

  const xMovement = useTransform(smoothProgress, scrollCheckpoints, xPositions);
  
  // Logic for switching images based on scroll checkpoints
  const boxImageMapping = useTransform(
    smoothProgress,
    scrollCheckpoints,
    [boxwingsleft, boxwingsleft, boxwingsright, boxwingsleft, boxwingsright, boxwingsleft]
  );

  // Update the state when the MotionValue changes
  useEffect(() => {
    return boxImageMapping.onChange((latest) => {
      setCurrentBoxImg(latest);
    });
  }, [boxImageMapping]);

  const rotateZ = useTransform(
    smoothProgress,
    scrollCheckpoints,
    [15, -15, 15, -15, 15, -15]
  );

  return (
    <div className="w-full fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <motion.div
        style={{
          position: 'absolute',
          top: useTransform(smoothProgress, [0, 1], ["5%", "95%"]), 
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
          {/* We use the state variable currentBoxImg here */}
          <img 
            src={currentBoxImg} 
            alt="Flying Box" 
            className="w-auto h-24 md:h-40 object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))" }}
          />
          
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-black/10 rounded-full blur-md" />
        </motion.div>
      </motion.div>
      
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