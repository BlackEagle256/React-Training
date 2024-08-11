import React, { Component } from 'react'
import User from './User/User'

class App extends React.Component {

  state = {
    users: [
      { id: 1, name: "Mohammad", age: 20 },
      { id: 2, name: "Amin", age: 50 },
      { id: 3, name: "Amir", age: 30 },
      { id: 4, name: "Ali", age: 60 }
    ]
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <User {...user} />  // افزودن key به هر کامپوننت
        ))}

      </div>
    )
  }
}
export default App