import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoveButton } from './LoveButton';
import { Question } from '../types';

interface QuestionModalProps {
  question: Question;
  onAccept: () => void;
  onReject: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({ question, onAccept, onReject }) => {
  return (
    <AnimatePresence>
      <img 
        src={question.imageUrl} 
        alt="Shy Cat" 
        className="mb-4 mx-auto w-56" 
        loading="lazy"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
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