import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Toaster, toast } from 'react-hot-toast';
import { QuestionModal } from './components/QuestionModal';
import { OutfitSelection } from './components/OutfitSelection';
import { LoveDeclaration } from './components/LoveDeclaration';
import { DateSummary } from './components/DateSummary';
import { questions } from './data/questions';
import { dateLocations } from './data/dateLocations';
import { outfits } from './data/outfits';
import { Stage, DateLocation, Outfit } from './types';
import { DateLocationSelection } from './components/DateLocationSelection';

function App() {
  const [stage, setStage] = useState<Stage>('initial');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(3);
  const [selectedLocation, setSelectedLocation] = useState<DateLocation | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);

  const handleAccept = () => {
    setShowConfetti(true);
    setStage('accepted');
    setTimer(4);
    let isToastShown = false;

    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev === 2 && !isToastShown) {
          isToastShown = true;
          setTimeout(() => {
            toast('Activated! 🎊', {
              icon: '💕',
              duration: 1000,
            });
          }, 0);
        }

        if (prev === 1) {
          clearInterval(countdown);
          setShowConfetti(false);
          setStage('location');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleReject = () => {
    setQuestionIndex(prev => prev + 1);
  };

  const handleLocationSelect = (location: DateLocation) => {
    setSelectedLocation(location);
    setStage('outfit');
  };

  const handleOutfitSelect = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setStage('summary');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
      <Toaster />
      {showConfetti && <Confetti tweenDuration={1000} />}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        {stage === 'initial' && (
          <QuestionModal
            question={questions[questionIndex]}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        )}

        {stage === 'accepted' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-md mx-auto"
          >
            <h1 className="text-2xl font-bold text-pink-600 text-center leading-relaxed">
              Romance mode: {timer}
              <motion.span
                className="block text-4xl text-pink-700 mt-2"
                initial={{ scale: 0 }}
                animate={{
                  scale: timer === 1 ? [0, 1.2, 1] : 0,
                  transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    when: timer === 1 ? "beforeChildren" : "afterChildren"
                  }
                }}
              >
                February 14th, here we come!
              </motion.span>
            </h1>
          </motion.div>
        )}

        {stage === 'location' && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">
              Choose our perfect date location! 💝
            </h2>
            <DateLocationSelection
              locations={dateLocations}
              onLocationSelect={handleLocationSelect}
            />
          </div>
        )}

        {stage === 'outfit' && selectedLocation && (
          <OutfitSelection
            outfits={outfits}
            selectedLocation={selectedLocation}
            onComplete={handleOutfitSelect}
          />
        )}

        {stage === 'summary' && selectedLocation && selectedOutfit && (
          <DateSummary
            selectedLocation={selectedLocation}
            selectedOutfit={selectedOutfit}
            onComplete={() => setStage('declaration')}
          />
        )}

        {stage === 'declaration' && (
          <LoveDeclaration />
        )}
      </motion.div>
    </div>
  );
}

export default App;