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
      date: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.clock(), 1000);

    console.log("Component did mount ", this.timerID);
  }
  componentWillUnmount() {
    console.log("Component will unmount ");
    clearInterval(this.timerID);
  }
  clock = () => {
    this.setState({
      date: new Date().getSeconds(),
    });
  };

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
                    Date : {this.state.date}
                  </div>
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
