function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  );
}

function Total(props) {
  return (
    <>
      <p>Number of exericses {props.total}</p>
    </>
  );
}

function App() {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a Component";
  const exercises3 = 14;
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total total={totalExercises} />
    </div>
  );
}

export default App;
