import React, { Component } from 'react'

export default class User extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name} || {this.props.age} years old</h1>
                {console.log(this.props)}
            </div>
        )
    }
}
