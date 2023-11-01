import React, { useState } from "react";
interface props {
  OnClicked: () => void;
  onActive: () => void;
  call: string;
}
const Button = ({ OnClicked, onActive, call }: props) => {
  return (
    <div>
      <button
        className={call}
        onClick={() => {
          OnClicked();
          onActive();
        }}
      >
        My Alert Button
      </button>
    </div>
  );
};

export default Button;
