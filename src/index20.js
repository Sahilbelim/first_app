import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString(),
    };
  }

  componentWillMount() {
    console.log("Component will mount call");
  }
  componentDidMount() {
    console.log("Component Did  mount call");
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log("Component should  update call");
    return true;
  }
  componentWillUpdate(nextprops, nextstate) {
    console.log("Component Will  update call");
  }

  updateDate = () => {
    this.setState({ date: new Date().toLocaleDateString() });
  };

  componentDidUpdate() {
    console.log("Component Did  Update call");
  }

  componentWillUnmount() {
    console.log("Component Will  Unmount call");
  }
  render() {
    console.log("Render call ");
    return (
      <>
        <div className="conatainer">
          <div className="row">
            <div className="col-4 mt-5 offset-4">
              <div className="card shadow">
                <div className="card-body ">
                  <div className="justify-content-center ">
                    Name : Sahil <br />
                    age : 18 <br />
                    dep : It <br />
                    Email : Sahil@gmail.com <br />
                    Number : 8547361245 <br />
                    Date : {this.state.date} <br />
                  </div>
                  <button
                    onClick={this.updateDate}
                    className="btn btn-primary mt-3"
                  >
                    Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

root.render(<LifeCycle />);
