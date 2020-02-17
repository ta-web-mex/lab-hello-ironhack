import React, { Component } from 'react'

import Nav from './components/Nav'
import Header from './components/Header'
import Elements from './components/Elements'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Header />
                <Elements />
            </div>
        )
    }
}

export default App