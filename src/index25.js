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
    this.email = React.createRef();
    this.password = React.createRef();
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log("Submit call");
    console.log("Email : ", this.email.current.value);
    console.log("Password : ", this.password.current.value);
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
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter Email"
                        name="email"
                        ref={this.email}
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
                        ref={this.password}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

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
