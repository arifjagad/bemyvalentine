import React from 'react';
import { motion } from 'framer-motion';
import { Outfit } from '../types';

interface OutfitSelectionProps {
  outfits: Outfit[];
  onComplete: () => void;
}

export const OutfitSelection: React.FC<OutfitSelectionProps> = ({ outfits, onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Our Perfect Outfits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {outfits.map((outfit) => (
          <motion.div
            key={outfit.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={outfit.imageUrl}
              alt={outfit.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-2">{outfit.name}</h3>
              <p className="text-gray-600">{outfit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-lg mx-auto block"
      >
        Perfect! Let's continue ❤️
      </motion.button>
    </motion.div>
  );
};