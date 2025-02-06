import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';

export const LoveDeclaration: React.FC = () => {
  const [showClickMe, setShowClickMe] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowClickMe(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const generateHeartPositions = (count: number) => {
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;

    // Adjust the maximum distance based on screen size
    const maxDistance = isMobile ? 20 : 40;
    const minScale = isMobile ? 0.2 : 0.4;
    const maxScale = isMobile ? 0.4 : 0.8;

    return Array.from({ length: count }, (_, i) => ({
      x: (Math.random() * maxDistance * 2 - maxDistance),
      y: (Math.random() * maxDistance * 2 - maxDistance),
      scale: Math.random() * (maxScale - minScale) + minScale,
      rotation: Math.random() * 30 - 15
    }));
  };

  const handleClick = () => {
    setShowHearts(true);
    setHeartCount(prev => prev + 24);
    toast("My heart is full of you!! 💖", {
      icon: '💝',
      position: 'top-center',
      style: {
        background: '#FDF2F8',
        color: '#DB2777',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        borderRadius: '9999px',
        padding: '16px 24px',
      },
    });
  };

  const heartPositions = generateHeartPositions(heartCount);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-pink-50">
      <div className="relative w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-8 z-10"
        >
          I Love You ❤️
        </motion.h1>

        <AnimatePresence>
          {(showClickMe || showHearts) && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
              className="px-6 py-3 bg-pink-500 text-white rounded-full font-bold text-lg
                       shadow-lg cursor-pointer z-10 mt-4 md:mt-8"
            >
              Click Me! 💝
            </motion.button>
          )}

          {showHearts && (
            <div className="absolute inset-0 pointer-events-none">
              {heartPositions.map((pos, index) => (
                <motion.div
                  key={`${index}-${heartCount}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: pos.scale,
                    x: pos.x + 'vw',
                    y: pos.y + 'vh',
                    rotate: pos.rotation,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.02,
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Heart 
                    className="text-pink-500" 
                    size={index % 2 === 0 ? 48 : 32} 
                    fill="currentColor" 
                  />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};