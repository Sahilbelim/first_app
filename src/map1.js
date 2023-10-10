import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
//  const [data,setdata]=useState[[]]

function List(props) {

  var con = props.eliment;
  // function mydata()
  // {

  // }
  var Data = con.map((name) => {
    // console.log(name)
    return(<li>{name}</li>)
  });


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className="card-body">
                <h3>country</h3>
                <ul>
{Data}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

var country = [
  "India",
  "usa",
  "uk",
  "Japan",
  "Bhutan",
  "Shrilanka",
  "Russhiya",
  "Canada",
  "tarky",
];

root.render(<List eliment={country}  />);
