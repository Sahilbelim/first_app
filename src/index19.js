import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Student from "./my-components/student";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Student
    name="Belim Sahil"
    age="18"
    roll_no="220430116010"
    email="belimsahil@gmail.com"
    address="Bhavnager"
  />
);
