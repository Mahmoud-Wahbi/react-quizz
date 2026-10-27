function DifficultyFilter({ dispatch, difficulty }) {
  return (
    <div className="filter start">
      <label htmlFor="difficulty">Difficulty:</label>

      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) =>
          dispatch({
            type: "setDifficulty",
            payload: e.target.value,
          })
        }
      >
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultyFilter;
