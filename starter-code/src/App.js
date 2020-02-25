import React, { Component } from 'react'

import Navbar from './components/Navbar'
import Centro from './components/Centro'
import Elements from './components/Elements'

import './App.css'

class App extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Centro/>
            <Elements/>
            </>
        )
    }
}

export default App;