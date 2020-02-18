import React, { Component } from 'react'
import NavBar from './components/Navbar'
import Content from './components/Content'
import Images from './components/Images'

// React class component
class App extends Component {

  render() {
    return (

        <div className="App">

        <NavBar />
        <Content />
        <Images />

        </div>

    )
  }
}

// module.exports = App
export default App