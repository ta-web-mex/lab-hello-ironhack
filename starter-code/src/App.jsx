import React, { Component } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Grid from './components/Grid'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className='bg-dark text-white react-bg'>
        <Nav />
        <Hero />
        <Grid />
      </div>
    )
  }
}

export default App
