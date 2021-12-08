import React, { useState } from "react";

const Statistics = (props) => {
  if (props.All === 0) {
    return <h1>no feedback given</h1>;
  }
  return (
    <div>
      <h1>statistics</h1>

      <h3>Good: {props.good}</h3>
      <h3>Neutral: {props.neutral}</h3>
      <h3>Bad: {props.bad}</h3>
      <h3>All: {props.All}</h3>
      <h3>Average: {props.average}</h3>
      <h3>Positive: {props.positive}</h3>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        All={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        positive={(good + neutral) / (good + neutral + bad)}
      />
    </div>
  );
};

export default App;
