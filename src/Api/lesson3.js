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

  Updatedata = () => {
    // console.log("add call")
    var url = `https://jsonplaceholder.typicode.com/posts/${this.state.id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((Response) => Response.json())
      .then((json) => this.setState({ data: [...this.state.data, json] }))
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
                    Enter  id :
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
                  <label htmlFor="title" className="my-2">
                    Enter Title :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Default Input"
                    name="title"
                    id="title"
                    onChange={this.onInputChange}
                    value={this.state.title}
                  />
                  <label htmlFor="body" className="my-2">
                    Enter Body :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Default Input"
                    name="body"
                    id="body"
                    onChange={this.onInputChange}
                    value={this.state.body}
                  />

                  <label htmlFor="userid" className="my-2">
                    Enter User id :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Default Input"
                    name="userid"
                    id="userid"
                    onChange={this.onInputChange}
                    value={this.state.userid}
                  />
                  <div className="d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={this.Updatedata}
                    >
                      Update
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
