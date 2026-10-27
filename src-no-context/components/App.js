import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./startScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import QuestionsNumberSelection from "./QuestionsNumberSelection";
import DifficultyFilter from "./DifficultyFilter";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  allQuestions: [],

  // loading , error , ready , active , finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  numQuestionOption: "all",
  setDifficulty: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        allQuestions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.allQuestions.slice(
          0,
          state.numQuestionOption === "all"
            ? state.allQuestions.length
            : +state.numQuestionOption,
        ),
        allQuestions: state.allQuestions,
        numQuestionOption: state.numQuestionOption,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "setQuestionsNumber":
      if (action.payload === "all") {
        return {
          ...state,
          questions: state.allQuestions,
          numQuestionOption: "all",
        };
      }
      return {
        ...state,
        questions: state.allQuestions.slice(0, +action.payload),
        numQuestionOption: action.payload,
      };
    case "setDifficulty":
      if (action.payload === "all") {
        return {
          ...state,
          questions: state.allQuestions,
          setDifficulty: "all",
          numQuestionOption: "all",
        };
      }

      return {
        ...state,
        questions: state.allQuestions.filter(
          (question) => question.difficulty === action.payload,
        ),
        setDifficulty: action.payload,
        numQuestionOption: "all",
      };

    default:
      throw new Error("Action is unknown");
  }
}

export default function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      numQuestionOption,
      difficulty,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
            <QuestionsNumberSelection
              dispatch={dispatch}
              numQuestionOption={numQuestionOption}
            />
            <DifficultyFilter dispatch={dispatch} difficulty={difficulty} />
          </>
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          </>
        )}
      </Main>
    </div>
  );
}
