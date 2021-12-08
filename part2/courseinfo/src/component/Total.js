export default function Total({ exercises }) {
  const sum = exercises.reduce(
    (total_exercises, part) => total_exercises + part.exercises,
    0
  );
  return (
    <p>
      <strong>Total of {sum} exercises</strong>
    </p>
  );
}
