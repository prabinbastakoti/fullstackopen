const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((total, current) => {
    return total + current.exercises;
  }, 0);
  return (
    <>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </>
  );
};

const Header = ({ heading }) => <h1>{heading}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => <h4>total of {total} exercises</h4>;

export default Course;
