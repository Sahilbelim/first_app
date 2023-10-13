import React, { Component } from 'react'
import Users from './Users';
export default class Lesson1 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts/")
          .then((Response) => Response.json())
          .then((json) => this.setState({ data: json }))
          .catch((error) => console.log(error));
        // console.log(this.state)
    }
    render() {
        // console.log(this.state);
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
                            return <Users data={singledata} />
            })}
          </div>
        </div>
      </>
    )
  }
}
