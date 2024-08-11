
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      name:"MH"
    }
  }

  clickHandler(num1,num2,event){
    console.log(num1+num2)
    console.log(event.target.innerHTML)
  }


  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.clickHandler.bind(this,2,3)}>Click on Me!</button> first way */}
        {/* <button onClick={()=>this.clickHandler(3,7)}>Click on Me!</button>  */}
        <button onClick={(event)=>this.clickHandler(3,7,event)}>Click on Me!</button> 

      </div>
    )
  }
}
