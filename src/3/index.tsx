import { FunctionComponent, useState } from "react";

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <label>Search Input: </label>
      <input type="text" placeholder="search..." onChange={event => {setInputValue(event.target.value)}} />
      <br />
      <br />
      {items.filter((val) => {
        if (inputValue == "")
          {
            return <div>{items.map(i => <li>{i}</li>)}</div>
          }
        else if(val.toLowerCase().includes(inputValue.toLowerCase()))
          {
            return <div>{items.map(i => <li>{i}</li>)}</div>
          }
      })}
          
        
      
        
    </div>
  );
};

export default Task3;
