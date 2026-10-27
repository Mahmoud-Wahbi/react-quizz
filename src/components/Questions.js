import { useQuizz } from "../contexts/QuizzContext";
import Options from "./Options";

function Questions() {
  const { questions, dispatch, answer, index } = useQuizz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
