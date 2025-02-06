import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoveButtonProps {
  onClick: () => void;
  text: string;
  variant?: 'accept' | 'reject';
}

export const LoveButton: React.FC<LoveButtonProps> = ({ onClick, text, variant = 'accept' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-full font-bold text-lg shadow-lg
        flex items-center gap-2
        ${variant === 'accept' 
          ? 'bg-pink-500 hover:bg-pink-600 text-white' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}
      `}
      onClick={onClick}
    >
      <Heart className={variant === 'accept' ? 'text-white' : 'text-gray-700'} size={24} />
      {text}
    </motion.button>
  );
};