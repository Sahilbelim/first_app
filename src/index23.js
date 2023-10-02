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
      name: "sahil",
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
  Btn;
  Change = (name) => {
    console.log(name);
    this.setState({ Change: name });

    console.log("Change");
    console.log(this.state.name);
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.Form}>
                    Inline If with Logical ( && ) Operator
                    {this.state.name == "sahil" && <h1>it's sahil</h1>}
                    <button
                      type="button"
                      onClick={() => this.Change("Viraj")}
                      className="btn  btn-primary"
                    >
                      {this.state.name}
                    </button>
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
