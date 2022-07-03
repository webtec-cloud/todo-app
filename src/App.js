import React, { useState } from "react";
import Addnewtodo from "./components/addnewtodo";
import Singletodo from "./components/singletodo";
import "./App.css";

const App = () => {
  const [alltodos, setalltodos] = useState([]);
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100">
      <div className="App-child">
        <h1>Charles Todo Application</h1>
        <Addnewtodo alltodos={alltodos} setalltodos={setalltodos} />
        <Singletodo />
      </div>
    </div>
  );
};

export default App;
