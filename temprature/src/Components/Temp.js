import React, { Component } from 'react'

export default class Temp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            temp: 10,
            tempClass: "cold"
        }
        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
    }

    add() {
        if (this.state.temp > 30) {
            return false;
        }

        this.setState(prevState => {
            return { temp: prevState.temp + 1 }
        })

        if (this.state.temp < 15) {
            this.setState({ tempClass: "hot" })
        }
    }

    minus() {
        if (this.state.temp < 0) {
            return false;
        }
        this.setState(prevState => {
            return { temp: prevState.temp - 1 }
        })

        if (this.state.temp <= 15) {
            this.setState({ tempClass: "cold" })
        }
    }

    render() {
        return (
            <div className="app-Container">
                <div className="temprature-display-container">
                    <div className={`temprature-display ${this.state.tempClass}`}>
                        {this.state.temp}
                    </div>
                </div>

                <div className="button-container">
                    <button onClick={this.add}>+</button>
                    <button onClick={this.minus}>-</button>
                </div>
            </div>
        )
    }
}
