import React, { Component } from 'react'

export default class Student extends Component {

    constructor(props)
    {
        super(props);
        this.state=
        {
          
            data:props.data

        }
    }
    render() {
    //   console.log(this.state.data.name )
    return (
        <>
            <div className="col-4">
                <div className="card mt-3">
                    <div className="card-body">
                        <h4>name : {this.state.data.name }</h4>
                        <h4>age  : {this.state.data.age }</h4>
                        <h4>Number : {this.state.data.number }</h4>
                        <h4>Email : {this.state.data.email }</h4>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
