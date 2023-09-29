import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

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
    UpdateData = () => {
    //   console.log("update funtion call")
    this.setState({
      name: "Viraj",
      Age: "18",
      roll_number: "220430116012",
      email: "Viraj@gmail.com",
    });
  };
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
                                    <tr>
                                        <td colSpan="2"><button onClick={this.UpdateData} className="btn btn-primary mt-2">
                                        Update</button></td>
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

export default Student;
