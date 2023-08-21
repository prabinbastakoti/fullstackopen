function Header(props) {
  return <h1>{props.course.name}</h1>;
}

function Part(props) {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercise}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </>
  );
}

function Total(props) {
  return (
    <>
      <p>
        Number of exericses{" "}
        {props.course.parts[0].exercise +
          props.course.parts[1].exercise +
          props.course.parts[2].exercise}
      </p>
    </>
  );
}

function App() {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a Component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
