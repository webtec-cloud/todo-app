import React, { useState } from "react";
import Addnewtodo from "./components/addnewtodo";
import Singletodo from "./components/singletodo";
import "./App.css";

const App = () => {
  const [alltodos, setalltodos] = useState([]);
  const handledelete = (item) => {
    setalltodos(alltodos.filter((x) => x !== item));
  };
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100">
      <div className="App-child">
        <h1>My Charles Todo Application</h1>
        {/* // we are passing the props to Addnewtodo component */}
        <Addnewtodo alltodos={alltodos} setalltodos={setalltodos} />
        //we are using ternery operators to check wether the todo list is empty or not 
        {alltodos.length > 0 ? (
          //we are mapping through all of our todos and then passing the item as a prop
          alltodos.map((item) => (
            <Singletodo item={item} handledelete={handledelete} />
          ))
        ) : (
          <p>please add a todo</p>
        )}
      </div>
    </div>
  );
};

export default App;
