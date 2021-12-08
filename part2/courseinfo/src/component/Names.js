import Part from "./Part";
export default function Names({ course }) {
  return (
    <div>
      {course.map(({ name, exercises }) => (
        <Part names={name} exercises={exercises} />
      ))}
    </div>
  );
}
