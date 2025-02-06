import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { DateLocation } from "../types"

interface DateLocationSelectionProps {
  locations: DateLocation[]
  onLocationSelect: (location: DateLocation) => void
}

export const DateLocationSelection: React.FC<DateLocationSelectionProps> = ({ locations, onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = React.useState<DateLocation | null>(null);
  const [flippedCards, setFlippedCards] = React.useState<number[]>([]);

  const handleFlip = (location: DateLocation) => {
    if (!flippedCards.includes(location.id)) {
      setFlippedCards([...flippedCards, location.id]);
      setSelectedLocation(location);
    }
  };

  const handleSelect = (location: DateLocation) => {
    setSelectedLocation(location);
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto gap-8 lg:px-40 md:px-20">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8 w-full">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            whileHover={{ scale: 1.05 }}
            className="relative h-64"
          >
            <AnimatePresence mode="wait" initial={false}>
              {!flippedCards.includes(location.id) ? (
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleFlip(location)}
                  className="w-full h-full cursor-pointer absolute rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl">
                    <div className="text-2xl font-bold text-pink-600 text-center">Click to reveal!</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleSelect(location)}
                  className={`w-full h-full absolute rounded-xl bg-white shadow-lg cursor-pointer
                    ${selectedLocation?.id === location.id 
                      ? 'ring-4 ring-pink-500 ring-opacity-75' 
                      : 'hover:shadow-xl'
                    }`}
                >
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-white rounded-xl">
                    <h3 className="text-xl font-bold text-pink-600 mb-3">{location.name}</h3>
                    <p className="text-gray-600 text-center">{location.description}</p>
                    {selectedLocation?.id === location.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-4 text-pink-500 font-semibold"
                      >
                        Selected! 💝
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {selectedLocation && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLocationSelect(selectedLocation)}
          className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-lg"
        >
          Choose {selectedLocation.name} 💝
        </motion.button>
      )}
    </div>
  )
}