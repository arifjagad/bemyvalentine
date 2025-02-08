import React from 'react';
import { motion } from 'framer-motion';
import { Outfit, DateLocation } from '../types';

interface OutfitSelectionProps {
  outfits: Outfit[];
  selectedLocation: DateLocation;
  onComplete: (outfit: Outfit) => void;
}

export const OutfitSelection: React.FC<OutfitSelectionProps> = ({ outfits, selectedLocation, onComplete }) => {
  const [selectedOutfit, setSelectedOutfit] = React.useState<Outfit | null>(null);

  const handleSelect = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full mx-auto lg:px-40 md:px-20"
    >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">
        Perfect Outfits for {selectedLocation.name}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        What should we wear for our special date at {selectedLocation.name}?
      </p>
      
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 h-full">
        {outfits.map((outfit) => (
          <motion.div
            key={outfit.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelect(outfit)}
            className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white
              ${selectedOutfit?.id === outfit.id 
                ? 'ring-4 ring-pink-500 ring-opacity-75' 
                : 'hover:shadow-xl'
              }`}
          >
            <div className="flex flex-col h-full">
              <img
                src={outfit.imageUrl}
                alt={outfit.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-bold text-pink-600 mb-2">{outfit.name}</h3>
                <p className="text-gray-600">{outfit.description}</p>
              </div>
              {selectedOutfit?.id === outfit.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="p-3 bg-white text-pink-500 font-semibold text-center border-t border-gray-100"
                >
                  Selected! 💝
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedOutfit && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onComplete(selectedOutfit)}
          className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-lg mx-auto block"
        >
          Perfect! Let's wear {selectedOutfit.name} 💝
        </motion.button>
      )}
    </motion.div>
  );
};