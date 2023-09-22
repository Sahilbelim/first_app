import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
  console.log("Card call");

  return (
    <div>
      <div className="col-12 col-sm-6 mt-5 me-2 col-md-4 col-lg-3">
        <div className="card shadow">
          <div className="card-header">Generet images</div>
          <div className="card-body">
            <img
              src="./img/cear2.jpg"
              className="img-fluid rounded w-100"
              alt="no-found"
            />
            <div align="center" className="card-text ">
              <b>
                Name :{props.name} <br />
                age:{props.age} <br />
                number:{props.number} <br />
                Email:{props.email}
                <br />
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// root.render(Card());
root.render(
  <Card name="Sahil Belim "age="18"number="85459625"email="sahil@gmail.com"/>
);
