import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
  return (
    <div>
      <Header name={"Web development curriculum"} />
      {courses.map((course) => (
          <Content key={course.id} name={course.name} part={course.parts} />
      ))}
    </div>
  );
};

export default Course;
