import Part from "./Part";
import Total from "./Total";

const Content = ({ part }) => {
  return (
    <div>
      {part.map((item) => (
        <Part key={item.id} name={item.name} exercise={item.exercises} />
      ))}
      <Total part={part}/>
    </div>
  );
};

export default Content;
