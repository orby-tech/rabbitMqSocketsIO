import React, { Component } from 'react'
import openSocket from 'socket.io-client'
// import SocketIOClient from 'socket.io-client'

// const socket = SocketIOClient('http://localhost:8000/')

const socket = openSocket('http://localhost:8080/')
const name = 'Jeff'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      messages: []
    }
  }

  componentDidMount = () => {
    socket.emit('message', name)
    socket.on('message', data => {
      console.log(data)
      this.setState({
        text: '',
        messages: [...this.state.messages, data.text]
      })
    })
  }


  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submited')
    this.setState(state => ({ ...state, text: '' }))
    socket.emit('message', this.state.text)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
        </form>
        <div>
          {this.state.messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default App