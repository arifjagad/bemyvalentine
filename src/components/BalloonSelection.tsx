"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { DateLocation } from "../types"

interface BalloonSelectionProps {
  locations: DateLocation[]
  onLocationSelect: (location: DateLocation) => void
}

export const BalloonSelection: React.FC<BalloonSelectionProps> = ({ locations, onLocationSelect }) => {
  const [flippedCards, setFlippedCards] = React.useState<number[]>([])

  const handleFlip = (location: DateLocation) => {
    setFlippedCards([...flippedCards, location.id])
    onLocationSelect(location)
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 gap-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {locations.map((location) => (
          <div key={location.id} className="relative h-64 perspective">
            <AnimatePresence mode="wait" initial={false}>
              {!flippedCards.includes(location.id) ? (
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleFlip(location)}
                  className="w-full h-full cursor-pointer absolute preserve-3d"
                >
                  <div className="w-full h-full absolute backface-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center p-6">
                    <div className="text-2xl font-bold text-white text-center">?</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full absolute preserve-3d"
                >
                  <div className="w-full h-full absolute backface-hidden rounded-xl bg-white shadow-lg p-6 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-primary mb-3">{location.name}</h3>
                    <p className="text-gray-600 text-center">{location.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}