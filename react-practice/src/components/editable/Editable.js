import { useState } from "react";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleEditable = () => setEditable((prevEditable) => !prevEditable);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editable ? (
        <lable>
          Title
          <imput type="text" value={inputValue} onChange={handleInputValue} />
        </lable>
      ) : (
        <> Title {inputValue}</>
      )}
      <br />
      <button onClick={toggleEditable}>Edit</button>
    </div>
  );
};

export default Editable;
