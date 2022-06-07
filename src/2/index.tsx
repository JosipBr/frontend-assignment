import { FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label>Controlled Input: </label>
      <input onChange={(e) => setValue(e.target.value)}/>
      <br />
      <br />
      <p>{value}</p>
    </div>
  );
};

export default Task2;
