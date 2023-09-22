import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function getpage() {
  console.log("Hello ");
  return `Name : ${student.name}  Age : ${student.age} \n Weight : ${student.weight}  `;
}
let student = {
  name: "sahil Belim",
  age: 18,
  weight: 45.36,
};

root.render(getpage(student));
