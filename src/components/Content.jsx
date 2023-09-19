import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Content = ({ name, part }) => {
  return (
    <div>
      <Header name={name} />
      {part.map((item) => (
        <Part key={item.id} name={item.name} exercise={item.exercises} />
      ))}
      <Total part={part} />
    </div>
  );
};

export default Content;
