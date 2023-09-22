import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

var setpage = function (user) {
  if (user.Age >= 18) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card gl hover-success">
              <div className="card-body">
                <div className="my-5 ">
                  <h3 className=" ">Name : {user.name}</h3>
                  <br />
                  <h3 className=" ">Age : {user.Age}</h3>
                  <br />
                  <h3 className=" ">Age : {user.Weight}</h3>
                  <br />
                  <h3 className=" ">
                    <div className="btn btn-primary">vote</div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card gl hover-success">
              <div className="card-body">
                <div className="my-5 ">
                  <h3 className=" ">Name : {user.name}</h3>
                  <br />
                  <h3 className=" ">Age : {user.Age}</h3>
                  <br />
                  <h3 className=" ">Weight : {user.Weight}</h3>
                  <br />
                  <h3 className=" ">you are not aligible of voting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
let student = {
  name: "Sahil Belim ",
  Age: 17,
  Weight: 45.36,
};
root.render(setpage(student));
