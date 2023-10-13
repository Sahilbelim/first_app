import React, { Component } from "react";
import Users from "./Users";
import axios from 'axios'

export default class Axios2 extends Component {
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
    var mydata = this.state;
    //   console.log ("Add call");
    //   console.log (this.state);
    //   console.log ("Add call");
    var myurl = "http://localhost:5000/user";
    axios({
      method: "post",
      responseType: "json",
      url: myurl,
      data: mydata,
      config: { headers: { "Content-Type": "multipart/form-data" } },
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
              <h1 align="center">All Student Data </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card mt-3">
                <div className="card-body">
                  <label htmlFor="name" className="my-2">
                    Enter name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Default Input"
                    name="name"
                    id="name"
                    onChange={this.onInputChange}
                    value={this.state.name}
                  />
                  <label htmlFor="mobile" className="my-2">
                    Enter name :
                  </label>
                  <input
                    type="number"
                    max={9999999999}
                    min={1000000000}
                    className="form-control"
                    placeholder="Default Input"
                    name="mobile"
                    id="mobile"
                    onChange={this.onInputChange}
                    value={this.state.mobile}
                  />
                  <label htmlFor="email" className="my-2">
                    Enter email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Default Input"
                    name="email"
                    id="email"
                    onChange={this.onInputChange}
                    value={this.state.email}
                  />

                  <label htmlFor="password" className="my-2">
                    Enter password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Default Input"
                    name="password"
                    id="password"
                    onChange={this.onInputChange}
                    value={this.state.password}
                  />
                  <label htmlFor="password" className="my-2">
                    Enter dob:
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    onChange={this.onInputChange}
                    value={this.state.dob}
                    className="form-control"
                    placeholder="Default Input"
                  />
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.Adddata}
                    >
                      submit{" "}
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
