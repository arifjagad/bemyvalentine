import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoveButton } from './LoveButton';
import { Question } from '../types';
import { questions } from '../data/questions';

const preloadImages = () => {
  questions.forEach(question => {
    const img = new Image();
    img.src = question.imageUrl;
  });
};

interface QuestionModalProps {
  question: Question;
  onAccept: () => void;
  onReject: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({ question, onAccept, onReject }) => {
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src={question.imageUrl} 
          alt="Shy Cat" 
          className="mb-4 mx-auto w-56" 
          loading="eager"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </motion.div>
      <motion.div
        key="question-modal"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="bg-white rounded-2xl p-8 shadow-xl max-w-xl w-full mx-auto"
      >
        <motion.h2
          key="question-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-center mb-6 text-pink-600"
        >
          {question.text}
        </motion.h2>
        
        <div className="flex flex-col gap-4">
          <LoveButton
            key="love-button-accept"
            onClick={onAccept}
            text={question.acceptText}
            variant="accept"
          />
          {question.rejectionText && (
            <LoveButton
              key="love-button-reject"
              onClick={onReject}
              text={question.rejectionText}
              variant="reject"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};