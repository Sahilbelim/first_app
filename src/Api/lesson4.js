import React, { Component } from "react";
import Users from "./Users";

export default class Lesson1 extends Component {
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
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => Response.json())
      .then((json) => this.setState({ data: json }))
      .catch((error) => console.log(error));
    // console.log(this.state)
  }

  Deletedata = () => {
    // console.log("add call")
    var url = `https://jsonplaceholder.typicode.com/posts/${this.state.id}`;
    fetch(url, {
      method: "DELETE",
      
    })
      .then((Response) => Response.json())
        .then((json) => {
                console.log(json)
                console.log(this.state.data)
        })
      .catch((error) => console.log(error));
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
                      onClick={this.Deletedata}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
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
