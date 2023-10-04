import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Student from "./student";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class StudentData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: Data,
    };
  }

  render() {
    console.log(this.state.students[0]);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 align="center">All Student Data </h1>
            </div>
          </div>
          <div className="row">
            {/* <Student data={this.state.students[0]} />
            <Student data={this.state.students[1]} />
            <Student data={this.state.students[2]} />
            <Student data={this.state.students[3]} /> */}

            {this.state.students.map((student) => {
              return <Student data={student} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

var Data = [
  {
    id: 1,
    name: "Sahil belim",
    age: 18,
    number: 8574962512,
    email: "sahil@gmail.com",
  },
  {
    id: 2,
    name: "Viraj",
    age: 18,
    number: 8574362410,
    email: "viraj@gmail.com",
  },
  {
    id: 3,
    name: "param patel",
    age: 19,
    number: 8574631210,
    email: "param@gmail.com",
  },
  {
    id: 4,
    name: "pratham patel",
    age: 20,
    number: 8574631210,
    email: "pratham@gmail.com",
  },

  {
    id: 5,
    name: "kukadiya Vasu",
    age: 19,
    number: 8574631210,
    email: "user@gmail.com",
  },
  {
    id: 6,
    name: "darshan kanani",
    age: 18,
    number: 8574631210,
    email: "user1@gmail.com",
  },
];

root.render(<StudentData />);
