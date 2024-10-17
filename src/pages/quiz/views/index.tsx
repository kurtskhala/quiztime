import { useState } from "react";
import Question from "../components/question/Question";
import { quiz } from "../static/data";
import QuestionBottom from "../components/questionBottom/QuestionButtom";

const QuizPage = () => {
  const [currPage, setCurrPage] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleContinue = () => {
    console.log(currPage);
    if(currPage+1 < quiz.questions.length) {
      setCurrPage((prev) => prev = prev+1);
    }
  }
  return (
    <div>
      <Question
        key={quiz.questions[currPage].id}
        data={quiz.questions[currPage]}
      />
      <QuestionBottom onContinue={handleContinue}/>
    </div>
  );
};

export default QuizPage;
