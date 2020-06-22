import React, { Component } from 'react'

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd' }
  }

  generatePassword() {
    // generate a password here
    console.log("generating password")
  }

  render() {
    return (
      <div>
        <div>{this.state.password}</div>
        <div>
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
        </div>
      </div>
    )
  }
}

export default Password