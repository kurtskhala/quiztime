import React, { useState } from 'react';
import { quiz } from '../static/data'
import OutlineIcon from '../../../assets/Vector.svg';
import styles from './Contact.module.css';
 
const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
 
  const letterMapping = ['A', 'B', 'C', 'D'];
 
  const handleAnswerSelection = (variantId: number, isCorrect: boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = variantId;
    setSelectedAnswers(newAnswers);
 
    if (isCorrect) {
      setScore((prevScore) => prevScore + quiz.questions[currentQuestionIndex].score);
    }
  };
 
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };
 
  const currentQuestion = quiz.questions[currentQuestionIndex];
 
  return (
    <div className={styles.container}> 
      {isQuizFinished ? (
        <div>
          <h2 className={styles.finalScore}>Quiz Completed</h2>
          <p className={styles.finalScore}>Your final score is: {score}</p>
        </div>
      ) : (
        <>
          <p className={styles.question}>{currentQuestion.name}</p>
          <div>
            {currentQuestion.variants.map((variant, index) => (
              <label key={variant.id} className={styles.label}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={variant.id}
                  aria-label={`Answer ${letterMapping[index]}`}
                  style={{ display: 'none' }}
                  checked={selectedAnswers[currentQuestionIndex] === variant.id}
                  onChange={() => handleAnswerSelection(variant.id, variant.isCorrect)}
                />
                <div className={styles.labelContent}>
                  <div className={styles.iconContainer}>
                    {selectedAnswers[currentQuestionIndex] === variant.id ? (
                      <img src={OutlineIcon} alt="Outline Icon" width="24" height="24" />
                    ) : (
                      <span>{letterMapping[index]}</span>
                    )}
                  </div>
                  <span>{variant.name}</span>
                </div>
              </label>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] == null}
            className={styles.button}
          >
            {currentQuestionIndex < quiz.questions.length - 1 ? 'Continue' : 'Finish'}
          </button>
          <p className={styles.progress}>
            {currentQuestionIndex + 1}/{quiz.questions.length}
          </p>
        </>
      )}
    </div>
  );
};
 
export default QuizComponent;