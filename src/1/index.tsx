import { FunctionComponent, useState } from "react";

const Task1: FunctionComponent = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return <div>{items.map(i => <li>{i}</li>)}</div>;
};

export default Task1;
