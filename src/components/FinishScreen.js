import { useQuizz } from "../contexts/QuizzContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuizz();

  const persentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (persentage === 100) emoji = "🥇";
  if (persentage >= 80 && persentage < 100) emoji = "🎉";
  if (persentage >= 50 && persentage < 80) emoji = "😊";
  if (persentage >= 0 && persentage < 50) emoji = "🤔";
  if (persentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <stron>{points}</stron> out of{" "}
        {maxPossiblePoints}({Math.ceil(persentage)}%)
      </p>
      <p className="highscore">(HighScore : {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
