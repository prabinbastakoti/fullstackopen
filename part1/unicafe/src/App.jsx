import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return all > 0 ? (
    <table>
      <tbody>
        <StatisticsLine text="good" data={good} />
        <StatisticsLine text="neutral" data={neutral} />
        <StatisticsLine text="bad" data={bad} />
        <StatisticsLine text="all" data={all} />
        <StatisticsLine text="average" data={average} />
        <StatisticsLine text="positive" data={positive} sign="%" />
      </tbody>
    </table>
  ) : (
    <p>no feedbacks given</p>
  );
};

const StatisticsLine = ({ text, data, sign }) => (
  <tr>
    <td>{text}</td>
    <td>
      {data.toFixed(1).replace(/\.0$/, "")} {sign ? sign : null}
    </td>
  </tr>
);
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const increaseBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

export default App;
