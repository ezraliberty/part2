import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content part={course.parts} />
    </div>
  );
};

export default Course;
