// src/App.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { exams } from './data/exams';

// Lista de Exámenes Componente
const ExamList = ({ onSelect }) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-blue-700">
          Selecciona un examen para empezar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {Object.values(exams).map((exam) => (
            <li key={exam.id}>
              <button
                onClick={() => onSelect(exam.id)}
                className="w-full py-3 px-6 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                {exam.title}
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Componente de Examen
const ExamPage = ({ examId, onBack }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const exam = exams[examId];

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center text-blue-700">
            {exam.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Volver al menú principal
          </button>
          
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Preguntas</h3>
            {exam.questions.map((question, index) => (
              <div key={index} className="space-y-4">
                <p className="text-lg font-semibold">{question.question}</p>
                <div className="space-y-2">
                  {Object.entries(question.answers).map(([letter, answer]) => (
                    <label
                      key={letter}
                      className={`block p-3 rounded-lg border cursor-pointer transition-colors duration-200
                        ${showResults 
                          ? letter === question.correctAnswer 
                            ? 'bg-green-100 border-green-500'
                            : userAnswers[index] === letter 
                              ? 'bg-red-100 border-red-500'
                              : 'bg-white border-gray-200'
                          : 'hover:bg-blue-50 bg-white border-gray-200'
                        }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={letter}
                        onChange={() => handleAnswerSelect(index, letter)}
                        disabled={showResults}
                        className="mr-2"
                      />
                      {letter}: {answer}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <h3 className="text-xl font-semibold mt-8">Casos Clínicos</h3>
            {exam.clinicalCases.map((case_, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold">{case_.title}</h4>
                <p className="text-gray-700">{case_.description}</p>
                <div className="space-y-2">
                  {Object.entries(case_.answers).map(([letter, answer]) => (
                    <label
                      key={letter}
                      className={`block p-3 rounded-lg border cursor-pointer transition-colors duration-200
                        ${showResults 
                          ? letter === case_.correctAnswer 
                            ? 'bg-green-100 border-green-500'
                            : userAnswers[`case-${index}`] === letter 
                              ? 'bg-red-100 border-red-500'
                              : 'bg-white border-gray-200'
                          : 'hover:bg-blue-50 bg-white border-gray-200'
                        }`}
                    >
                      <input
                        type="radio"
                        name={`case-${index}`}
                        value={letter}
                        onChange={() => handleAnswerSelect(`case-${index}`, letter)}
                        disabled={showResults}
                        className="mr-2"
                      />
                      {letter}: {answer}
                    </label>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-2 p-4 bg-blue-50 rounded">
                    <p className="font-semibold">Explicación:</p>
                    <p>{case_.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {!showResults && (
            <button
              onClick={handleSubmit}
              className="mt-8 w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Enviar Respuestas
            </button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Componente Principal
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedExam, setSelectedExam] = useState(null);

  const handleExamSelect = (examId) => {
    setSelectedExam(examId);
    setCurrentPage('exam');
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
    setSelectedExam(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-blue-100">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Portal de Exámenes Médicos</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' ? (
          <ExamList onSelect={handleExamSelect} />
        ) : (
          <ExamPage examId={selectedExam} onBack={handleReturnHome} />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Portal de Exámenes Médicos</p>
        </div>
      </footer>
    </div>
  );
};

export default App;