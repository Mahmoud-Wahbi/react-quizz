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
import { useQuizz } from "../contexts/QuizzContext";

export default function App() {
  const { status } = useQuizz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <StartScreen />
            <QuestionsNumberSelection />
            <DifficultyFilter />
          </>
        )}
        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
          </>
        )}
      </Main>
    </div>
  );
}
