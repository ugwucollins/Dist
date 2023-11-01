import React from "react";
interface props {
  name: string;
  onCloseE: () => void;
  active:string;
}

const Email = ({ name,onCloseE,active }: props) => {
  return (
    <div className="email flex">
      <h3>{name}</h3>
      <button className={active} onClick={onCloseE}>
        <i className="bx bx-x icon"></i>
      </button>
    </div>
  );
};

export default Email;
