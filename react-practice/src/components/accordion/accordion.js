import { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

  return (
    <div className="accordion">
      <button onClick={toggleExpand}>
        header <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && <div className="content">this is just a simple pomponent</div>}
    </div>
  );
};

export default Accordion;
