import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class Output extends React.Component {
  render() {
    return <div>hello world</div>;
  }
}

root.render(<Output />);
