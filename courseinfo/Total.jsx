const Total = ({ part }) => {
  const allExercises = part.map((exercise) => exercise.exercises);
  const i = 0;
  const total = allExercises.reduce((a, b) => a + b, i);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

export default Total;
