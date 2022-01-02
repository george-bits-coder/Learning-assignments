import { Groceryinput } from "./Groceryinput";
import { useState } from "react";
import { Groceryitem } from "./Groceryitem";
import { nanoid } from "nanoid";
export const Grocery = () => {
  const [list, setList] = useState([]);

  const getthedata = (temp) => {
    const payload = {
      title: temp,
      status: false,
      id: nanoid(7)
    };

    setList([...list, payload]);
    // console.log(list);
  };

  return (
    <>
      <Groceryinput fn={getthedata} />
      {list.map((e, i) => (
        <Groceryitem key={i} {...e} />
      ))}
    </>
  );
};
