import React from "react";
interface props{
  call:string;
  onCloseP: () => void;
}

const Phone = ({call,onCloseP} : props) => {
  return (
    <div className="email flex">
      <h3>{call}</h3>
      <button className="close-btn" onClick={onCloseP}>
        <i className="bx bx-x icon"></i>
      </button>
    </div>
  );
};

export default Phone;
