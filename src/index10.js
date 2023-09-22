import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

var getTD=() => {
    var now = new Date();
var page = (
  <div>
    <div className="contianer mt-5 ">
      <div className="row mt-5 ">
        <div className="col-6 offset-3 mt-5 ">
          <div className="card gl hover-success">
            <div className="card-body">
              <div className="my-5 d-flex text-align-center fa-2xl">
                <h3 className=" m-5 ">Date:</h3>
                <h3 className=" m-5 ">{now.toDateString()}</h3>

                <h3 className=" m-5 ">Time:</h3>
                                <h3 className=" m-5 ">{now.getHours()}:{now.getMinutes()}:{now.getSeconds() }</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
    return page
}

root.render(getTD());

setInterval(() => {
  root.render(getTD()); // Call getTD() and render the result every second
}, 1000);
