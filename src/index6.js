import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
var page = (
  <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div
            className="card mt-5 shadow ">
            <div className="text-bg-danger card-header ">
              <h2 className="">Use Bootstrap in React</h2>
            </div>
            <div className="card-body">
              <form action="" className="form">
                <div className="mt-2">
                  <label htmlFor="name" className="form-label">
                    Enter name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="form-label">
                    Enter EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="password" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="cpassword" className="form-label">
                    Enter Conform Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    className="form-control"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-end">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-danger"
                  />
                  <input
                    type="reset"
                    value="Clear All"
                    className="ms-2 btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

root.render(page);
