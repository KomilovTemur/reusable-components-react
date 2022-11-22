import React from "react";

const Buttons = ({ text, bg, size }) => {
  return <button className={`btn btn-${bg} text-${size}`}>{text}</button>;
};

export default Buttons;
