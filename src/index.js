import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Student from "./student";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter Name"
                        name="name"
                      />
                      <label for="floatingInput">Enter Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter Email"
                        name="email"
                      />
                      <label for="floatingInput">Enter Email</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Conform Password"
                        name="c_password"
                      />
                      <label for="floatingPassword">Conform Password</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Enter Moblie number"
                        min={1000000000}
                        max={9999999999}
                        name="mNumber"
                      />
                      <label for="floatingPassword">Enter Moblie number</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gender"
                        id="formRadioDefault"
                      />
                      <label class="form-check-label" for="formRadioDefault">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gender"
                        id="formRadioChecked"
                      />
                      <label class="form-check-label" for="formRadioChecked">
                        Female
                      </label>
                      <div className="d-flex justify-content-end">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary m-2"
                        />
                        <input
                          type="reset"
                          value="clear all"
                          className="btn btn-danger m-2"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
root.render(<MyForm />);
