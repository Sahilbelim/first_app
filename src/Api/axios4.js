import React, { Component } from "react";
import Users from "./Users";
import axios from "axios";

export default class Axios4 extends Component {
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
    console.log(this.state);
  };

  Adddata = () => {
    // console.log("add call")
    // var mydata = this.state;
    //   console.log ("Add call");
    //   console.log (this.state);
    //   console.log ("Add call");
    var myurl = `http://localhost:5000/user/${this.state.id}`;
    axios({
      method: "delete",
      responseType: "json",
      url: myurl,
    //   data: mydata,
    //   config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then((response) => {
      console.log(response);
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 align="center">Update Data using axios put method </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card mt-3">
                <div className="card-body">
                  <label htmlFor="id" className="my-2">
                    Enter id :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Default Input"
                    name="id"
                    id="id"
                    onChange={this.onInputChange}
                    value={this.state.id}
                  />
                 
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.Adddata}
                    >
                      Delete
                    </button>
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
