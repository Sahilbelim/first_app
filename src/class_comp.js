import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sahil Belim",
      Age: 18,
      weight: 45.36,
      gender: false,
      number: 8547962545,
    };
  }

  render() {
    var ms = "";
    if (this.state.gender) {
      ms = " Male";
    } else {
      ms = " Female";
    }
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 offset-4 ">
              <div className="card text-bg-info shadow">
                <div className="card-body">
                  <h4>
                    <b>Name : {this.state.name} </b>
                  </h4>
                  <h4>
                    <b>Age : {this.state.Age}</b>
                  </h4>
                  <h4>
                    <b>Weight : {this.state.weight} </b>
                  </h4>
                  <h4>
                    <b>Gender : {ms} </b>
                  </h4>
                  <h4>
                    <b>Number : {this.state.number}</b>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

root.render(<Page />);
