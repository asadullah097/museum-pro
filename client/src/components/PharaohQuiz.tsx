import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Sparkles } from "lucide-react";

interface QuizQuestion {
  hint: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    hint: "I was the boy king who died young, but my tomb remained untouched for over 3,000 years",
    options: ["Ramses II", "Tutankhamun", "Cleopatra", "Khufu"],
    correctAnswer: "Tutankhamun",
    explanation: "Tutankhamun became pharaoh at age 9 and died at 19. His tomb was discovered in 1922 by Howard Carter."
  },
  {
    hint: "I am the sun god, the most important deity in the Egyptian pantheon",
    options: ["Anubis", "Osiris", "Ra", "Isis"],
    correctAnswer: "Ra",
    explanation: "Ra was the ancient Egyptian sun god, often depicted with a falcon head and sun disk."
  },
  {
    hint: "I built one of the greatest architectural achievements - the Great Pyramid",
    options: ["Khufu", "Tutankhamun", "Ramses II", "Cleopatra"],
    correctAnswer: "Khufu",
    explanation: "Pharaoh Khufu built the Great Pyramid of Giza around 2560 BC, one of the Seven Wonders of the Ancient World."
  }
];

export default function PharaohQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
    console.log('Answer selected:', answer, 'Correct:', answer === question.correctAnswer);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      console.log('Quiz completed! Score:', score + 1, '/', quizQuestions.length);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (currentQuestion >= quizQuestions.length) {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Crown className="h-16 w-16 text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold">Quiz Complete!</h3>
        <p className="text-lg">
          You scored <span className="font-bold text-primary">{score}</span> out of {quizQuestions.length}
        </p>
        <Button onClick={handleRestart} data-testid="button-restart-quiz">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Badge variant="outline" data-testid="text-question-number">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </Badge>
        <Badge variant="secondary" data-testid="text-score">
          Score: {score}
        </Badge>
      </div>

      <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <p className="font-serif text-lg italic">
            "{question.hint}"
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((option) => (
          <Button
            key={option}
            variant={
              showResult
                ? option === question.correctAnswer
                  ? "default"
                  : option === selectedAnswer
                  ? "destructive"
                  : "outline"
                : "outline"
            }
            className="h-auto py-4"
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            data-testid={`button-quiz-option-${option.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {option}
          </Button>
        ))}
      </div>

      {showResult && (
        <div className={`rounded-lg p-4 ${isCorrect ? 'bg-primary/10 border border-primary/20' : 'bg-destructive/10 border border-destructive/20'}`}>
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-primary' : 'text-destructive'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-sm text-muted-foreground">
            {question.explanation}
          </p>
          <Button 
            onClick={handleNext}
            className="mt-4"
            data-testid="button-next-question"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        </div>
      )}
    </div>
  );
}
