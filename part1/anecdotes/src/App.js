import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));
  let count;
  const voteChange = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy);
  };

  const maxNumber = () => {
    let max = -1;
    let maxText = votes[0];
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        maxText = i;
        max = votes[i];
      }
    }
    return maxText;
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <h3>{anecdotes[selected]}</h3>
      <h1>Has {votes[selected]} Votes</h1>
      <button onClick={voteChange}>Vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <h3>{anecdotes[maxNumber()]}</h3>
    </div>
  );
};

export default App;

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(" ")}</p>
//     </div>
//   );
// };
