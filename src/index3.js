import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

var num1 = 10;
var num2 = 20;

var page = (
  <div>
    <h1 align="center"> lesso3 in react user exprestion </h1>
    <p>
      {" "}
      number 1 : {num1} <br />
      number 2 : {num2} <br />
      Addition : {num1 + num2} <br />
      subtraction : {num1 - num2} <br />
      multiplication : {num1 * num2} <br />
      division : {num1 / num2} <br />
    </p>
  </div>
);

root.render(page);
