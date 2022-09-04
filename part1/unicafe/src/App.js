import { useState } from 'react';

const Button = ({ name, handleClick }) => <button onClick={handleClick}>{name}</button>

const StatisticsLine = ({ text, value, sign }) => <p>{text} {value} {sign ? sign : ""} </p>

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h2>Statistics</h2>
      {
        total ? (
          <>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={total} />
            <StatisticsLine text="Average" value={((good*1) + (bad*-1) + (neutral*0))/total} />
            <StatisticsLine text="Positive" value={(good * 100)/total} sign="%" />
          </>
        ) : (<p>No Feedback given</p>)
      }
      
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

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
      <Button name="Good" handleClick={handleGood} />
      <Button name="Neutral" handleClick={handleNeutral} />
      <Button name="Bad" handleClick={handleBad} />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
      />

    </div>
  );
}

export default App;
