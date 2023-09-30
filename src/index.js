import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class Myform extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          
          Clicked:true
        
    };
  }

  Form = (e) => {
    e.preventDefault();
    console.log("Form Call ");
  };
    Input = (e) => {
    //   console.log(e.target)
    //   console.log(e.target.name)
    //   console.log(e.target.value)
    };
    Btn
    Change = () =>    
    {
        // console.log("Change") 
        this.setState((prevState) => ({
          Clicked: !prevState.Clicked
        }));
       
        
        

        
   }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.Form}>
                    <div className="mt-3">
                      <label htmlFor="formControlInput" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="formControlInput"
                        placeholder="name@example.com"
                        onChange={this.Input}
                        name="Email"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="formControlInput" className="form-label">
                        Enter Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="formControlInput"
                        placeholder="Password"
                        name="Password"
                        onChange={this.Input}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="formControlInput" className="form-label">
                        Conform password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="formControlInput"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary me-2">
                        submit
                      </button>
                      <button type="reset" className="btn btn-danger me-2">
                        clear all
                      </button>
                      <button type="reset" onClick={this.Change} className="btn btn-warning">
                        Change
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

root.render(<Myform />);
