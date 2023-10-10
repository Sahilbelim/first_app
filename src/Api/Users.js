import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  render() {
    //   console.log(this.state.data.name )
    return (
      <>
        <div className="col-4">
          <div className="card mt-3">
            <div className="card-body">
              <h4>userId : {this.state.data.userId}</h4>
              <h4>id : {this.state.data.id}</h4>
              <h4>title : {this.state.data.title}</h4>
              <h4>Email : {this.state.data.email}</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
