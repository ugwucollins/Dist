import React, { useState } from "react";

const Input = () => {
  const [change, setChange] = useState("Hello");

  const onChange = (event) => {
    const newName = event.target.value;
    setChange(newName);
  };
  return (
    <div>
      <h4>Your Name {change.length} </h4>
      <input
        type="text"
        onChange={onChange}
        placeholder="Your letters..."
        className="input"
      />
      <h2>{change}</h2>
    </div>
  );
};

export default Input;
