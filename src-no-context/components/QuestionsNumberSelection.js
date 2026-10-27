function QuestionsNumberSelection({ dispatch, numQuestionOption }) {
  return (
    <div className="question-count start">
      <label htmlFor="question-count">Number of questions:</label>

      <select
        id="question-count"
        value={numQuestionOption}
        onChange={(e) =>
          dispatch({ type: "setQuestionsNumber", payload: e.target.value })
        }
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default QuestionsNumberSelection;
