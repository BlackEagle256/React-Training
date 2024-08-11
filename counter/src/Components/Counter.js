import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Counter: 0
        }

        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
    }

    // add=()=>{
    //     this.setState.Counter= this.state.Counter++ 
    //     console.log(this.state.Counter)
    // }

    // minus=()=>{
    //     this.setState.minus= this.state.Counter-- 
    //     console.log(this.state.Counter)
    // }

    add() {
        this.setState(prevState => {
            return { Counter: prevState.Counter + 1 }
        })
    }

    minus() {
        this.setState(prevState => {
            return { Counter: prevState.Counter - 1 }
        })
    }

    render() {
        return (
            <section id='main'>
                <div className="container">
                    <h2 id='title'>Counter</h2>
                    <h3 id='counter'>{this.state.Counter}</h3>
                    <div className="btn-container">
                        <button id='add' onClick={this.add}>Add Count</button>
                        <button id='lower' onClick={this.minus}>Lower Count</button>
                    </div>
                </div>
            </section>
        )
    }
}
