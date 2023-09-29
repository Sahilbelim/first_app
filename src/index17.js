import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      Age: this.props.age,
      roll_number: this.props.roll_no,

      email: this.props.email,
      address: this.props.address,
    };
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 offset-4 ">
              <div className="card  shadow">
                <div className="card-body">
                  <table className="table ">
                    <tr>
                      <td>
                        <b>Name </b>
                      </td>
                      <td>{this.state.name} </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Age </b>
                      </td>
                      <td>{this.state.Age} </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Inrollment number </b>
                      </td>
                      <td>{this.state.roll_number} </td>
                    </tr>

                    <tr>
                      <td>
                        <b>Email </b>
                      </td>
                      <td>{this.state.email} </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Address </b>
                      </td>
                      <td> {this.state.address}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

root.render(
  <Student
    name="Belim Sahil"
    age="18"
    roll_no="220430116010"
    m_number="8547762514"
    email="belimsahil@gmail.com"
    address="Bhavnager"
  />
);
