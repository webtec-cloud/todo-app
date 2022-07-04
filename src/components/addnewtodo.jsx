import React, { useState } from "react";

const Addnewtodo = ({ alltodos, setalltodos }) => {
  const [inputchange, setinputchange] = useState("");
  const Handlesubmit = (e) => {
    e.preventDefault();
    if (inputchange !== "") {
      // store all todos with the previous and new value
      setalltodos([...alltodos, inputchange]);
      //to make the box empty
      setinputchange("");
    }
  };

  return (
    <form onSubmit={Handlesubmit} className="Add-new-todo">
      <input
        // for removing the console.log error and also changing the value of input box to null
        value={inputchange}
        // setting the value for input change ( same as everything written in the input box )
        onChange={(e) => setinputchange(e.target.value)}
        type="text"
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Addnewtodo;
