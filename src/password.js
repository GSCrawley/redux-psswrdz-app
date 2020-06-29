import { connect } from 'react-redux'
import { addPassword } from './actions'
import React, { Component } from 'react'
import "./password.css" 


class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd', 
    name:'My Password' 
    }
  }

  generatePassword() {
    const password     = Math.random().toString(36).replace(/[^a-z^A-Z^0-9]+/g, '').substr(0-9); 
    let hyphenPass = ""
    for(let i = 0; i < password.length; i++){
      if (i % 3 === 0 && i !== 0){
        hyphenPass += "-"
      }
      hyphenPass += password[i]
    }
    // this.setState({password: password})
    this.setState({password:hyphenPass, name:''})

  }

  render() {
    const { password, name } = this.state
    return (
        <div> 
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          onChange={(e) => {this.setState({ password: e.target.value })}}
          value={password}
        />
        <input
          onChange={(e) => {this.setState({ name: e.target.value })}}
          value={name}
        />
        
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
    
        
          <button onClick={(e) => {
            console.log(this.state.name, this.state.password)
            this.props.addPassword(this.state.name, this.state.password)
            }}>Save</button>
      </div>
    )

          }

          }
          



const mapStateToProps = (state) => {
  return {
      addPassword
      }
    }
    
const mapDispatchToProps = () => {
      return {
        addPassword
      }
    }
  

export default connect(mapStateToProps, mapDispatchToProps())(Password)

