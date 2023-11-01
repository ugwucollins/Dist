import React, { useState } from "react";
interface props {
  list: string[];
}

const List = ({ list }: props) => {
  const heading = "Number of Buttons";
  const [lists, setLists] = useState(0);

  return (
    <div>
      <h2>{heading}</h2>
      <ul>
        {list.map((Number, index) => (
          <li
            className={lists == index ? "li" : "li active"}
            onClick={() => {
              setLists(index);
              console.log(Number);
            }}
          >
            {Number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
