import React from 'react';
import { motion } from 'framer-motion';
import { DateLocation, Outfit } from '../types';

interface DateSummaryProps {
  selectedLocation: DateLocation;
  selectedOutfit: Outfit;
  onComplete: () => void;
}

export const DateSummary: React.FC<DateSummaryProps> = ({
  selectedLocation,
  selectedOutfit,
  onComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-pink-500 p-6 text-white">
          <h2 className="text-3xl font-bold text-center">Our Valentine's Date 💝</h2>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-600">Where We'll Go</h3>
            <div className="bg-pink-50 rounded-xl p-4">
              <h4 className="text-xl font-semibold text-pink-500 mb-2">
                {selectedLocation.name}
              </h4>
              <p className="text-gray-600">{selectedLocation.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-600">What We'll Wear</h3>
            <div className="bg-pink-50 rounded-xl p-4">
              <img
                src={selectedOutfit.imageUrl}
                alt={selectedOutfit.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-pink-500 mb-2">
                {selectedOutfit.name}
              </h4>
              <p className="text-gray-600">{selectedOutfit.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-pink-50">
          <p className="text-center text-pink-600 font-medium mb-4">
            Screenshot this to share with your Valentine! 📸
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="w-full px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-lg"
          >
            Continue 💕
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};