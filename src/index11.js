// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render();

import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
function getDateTime() {
  var now = new Date(); //Date is library class in javascript
  var output = (
    <div>
      <h1>Current Time</h1>
      <a className="btn btn-danger">{now.toLocaleTimeString()}.</a>
      <h1>Current Date</h1>
      <a className="btn btn-info">
        {now.getDate()}-{now.getMonth()}-{now.getFullYear()}
      </a>
    </div>
  );
  root.render(output);
}
setInterval(getDateTime, 1000); //setInterval is JS function called function passed as first argument at given interval in 2nd argument.
