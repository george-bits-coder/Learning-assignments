import { useState } from "react";

export const Groceryinput = ({ fn }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    fn(text);
  };
  return (
    <>
      <input
        type="text"
        placeholder=" Enter Grocery item"
        onChange={handleChange}
      />
      <button onClick={handleClick}> Enter Grocery Item </button>
      <br />
    </>
  );
};
