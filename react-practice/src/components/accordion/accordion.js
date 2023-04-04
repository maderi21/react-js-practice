import { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

  return (
    <div>
      <button onClick={toggleExpand}>header +</button>
      {expand && <div>this is just a simple pomponent</div>}
    </div>
  );
};

export default Accordion;
