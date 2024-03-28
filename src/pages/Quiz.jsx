import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      questionText: 'What year was the Mazda MK1 MX-5 first introduced?',
      answerOptions: [
        { answerText: '1989', isCorrect: true },
        { answerText: '1990', isCorrect: false },
        { answerText: '1987', isCorrect: false },
        { answerText: '1991', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the engine displacement of Nigel the Mazda MK1 MX-5?',
      answerOptions: [
        { answerText: '1.6L', isCorrect: true },
        { answerText: '1.8L', isCorrect: false },
        { answerText: '2.0L', isCorrect: false },
        { answerText: '1.4L', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following features was unique to the Mazda MK1 MX-5?',
      answerOptions: [
        { answerText: 'Pop-up headlights', isCorrect: true },
        { answerText: 'Turbocharged engine', isCorrect: false },
        { answerText: 'All-wheel drive', isCorrect: false },
        { answerText: 'Hybrid powertrain', isCorrect: false },
      ],
    },
    {
      questionText: 'What was the original name of the Mazda MX-5 in Japan?',
      answerOptions: [
        { answerText: 'Miata', isCorrect: false },
        { answerText: 'Roadster', isCorrect: true },
        { answerText: 'Eunos', isCorrect: false },
        { answerText: 'MX-5', isCorrect: false },
      ],
    },
    {
      questionText: 'What year was Nigel made?',
      answerOptions: [
        { answerText: '1992', isCorrect: true },
        { answerText: '1990', isCorrect: false },
        { answerText: '1993', isCorrect: false },
        { answerText: '1991', isCorrect: false },
      ],
    },
    {
      questionText: 'What colour are Nigel\'s brake calipers?',
      answerOptions: [
        { answerText: 'Black', isCorrect: false },
        { answerText: 'Red', isCorrect: false },
        { answerText: 'Yellow', isCorrect: true },
        { answerText: 'White', isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz-container' style={{ color: 'white' }}>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section' style={{ textAlign: 'center' }}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <button 
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#FFD700', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    border: 'none', 
                    cursor: 'pointer', 
                    display: 'block', 
                    width: '100%' 
                  }}
                >
                  {answerOption.answerText}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;