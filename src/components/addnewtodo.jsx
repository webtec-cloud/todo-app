import React, { useState } from "react";

const Addnewtodo = ({ alltodos, setalltodos }) => {
  const [inputchange, setinputchange] = useState("");
  return (
    <form className="Add-new-todo">
      <input type="text" />
      <h1>Charles</h1>
      <button type="submit">Add</button>
    </form>
  );
};

export default Addnewtodo;
