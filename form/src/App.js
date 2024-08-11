import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      textAreaValue: '',
      isLogin: false
    }

    this.textareahandle = this.textareahandle.bind(this);
  }

  userHandler(event) {
    console.log(event);
    this.setState({
      userName: event.nativeEvent.target.value
    })
  }

  textareahandle(event) {
    console.log(event)
    this.setState({
      textAreaValue: event.target.value
    });
  }

  isLoginHandler(event) {
    console.log(event)
    this.setState({
      isLogin:event.nativeEvent.target.checked
    })
  }

  render() {
    return (
      <div>

        <div>
          <h3>{this.state.userName}</h3>
          <input type="text" value={this.state.userName} onChange={(event) => this.userHandler(event)}
          />
        </div>

        <div>
          <label htmlFor="login">Login</label>
          <input type="checkbox" id="login" checked={this.state.isLogin} onChange={(event) => this.isLoginHandler(event)}
          />
        </div>

        <div>
          <textarea value={this.state.textAreaValue} onChange={(event) => this.textareahandle(event)}></textarea>
        </div>
      </div>
    )
  }
}
