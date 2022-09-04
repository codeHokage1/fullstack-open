import { useState } from 'react';

const Statistics = ({ good, neutral, bad, total, average }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {((good*1) + (bad*-1) + (neutral*0))/total}</p>
      <p>Positive {(good * 100)/total} %</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }
  



  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        // positive={positive}
      />

    </div>
  );
}

export default App;
