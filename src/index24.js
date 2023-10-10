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
  onInputChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({
      // name:"sahil"
      [e.target.name]: e.target.value,
    });
  };
  onSubmitForm = (event) => {
    event.preventDefault();
    console.log("Submit call");
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.onSubmitForm}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter Name"
                        name="name"
                        onChange={this.onInputChange}
                        value={this.state.name}
                      />
                      <label htmlFor="floatingInput">Enter Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter Email"
                        name="email"
                        onChange={this.onInputChange}
                        value={this.state.email}
                      />
                      <label htmlFor="floatingInput">Enter Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={this.onInputChange}
                        value={this.state.password}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Conform Password"
                        name="c_password"
                        onChange={this.onInputChange}
                        value={this.state.c_password}
                      />
                      <label htmlFor="floatingPassword">Conform Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Enter Moblie number"
                        min={1000000000}
                        max={9999999999}
                        name="mNumber"
                        onChange={this.onInputChange}
                        value={this.state.mNumber}
                      />
                      <label htmlFor="floatingPassword">
                        Enter Moblie number
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="formRadioDefault"
                        onChange={this.onInputChange}
                        value="male"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formRadioDefault"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="formRadioChecked"
                        onChange={this.onInputChange}
                        value="female"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formRadioChecked"
                      >
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
