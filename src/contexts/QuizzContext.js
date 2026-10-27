import { createContext, useContext, useReducer } from "react";
import questionData from "../data/questions.json";

// create context
const QuizzContext = createContext();

// state
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: questionData.questions,
  allQuestions: questionData.questions,

  // loading , error , ready , active , finished
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  numQuestionOption: "all",
  difficulty: "all",
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
          difficulty: "all",
          numQuestionOption: "all",
        };
      }

      return {
        ...state,
        questions: state.allQuestions.filter(
          (question) => question.difficulty === action.payload,
        ),
        difficulty: action.payload,
        numQuestionOption: "all",
      };

    default:
      throw new Error("Action is unknown");
  }
}

function QuizzProvider({ children }) {
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

  return (
    <QuizzContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestionOption,
        difficulty,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}

function useQuizz() {
  const context = useContext(QuizzContext);
  if (context === undefined)
    throw new Error("error : useContext was used outside of Quizz Provider");
  return context;
}

export { QuizzProvider, useQuizz };
