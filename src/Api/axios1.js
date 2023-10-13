import React, { Component } from "react";
import Users from "./Users";
import axios from "axios";
export default class Axios1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onInputChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({
      // name:"sahil"
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  };
  componentDidMount() {
    // var myurl = "http://localhost:2000/student";
      var myurl = "http://localhost:5000/user";
    // var myurl = "http://localhost:7000/custmore";
    // var myurl = "https://jsonplaceholder.typicode.com/posts/";

    axios({
      method: "get",
      responseType: "json",
      url: myurl,
    })
      .then((Response) => this.setState({ data: Response.data }))
    
  }

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
            {/* <Student data={this.state.students[0]} />
            <Student data={this.state.students[1]} />
            <Student data={this.state.students[2]} />
            <Student data={this.state.students[3]} /> */}

            {this.state.data.map((singledata) => {
              return <Users data={singledata} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
