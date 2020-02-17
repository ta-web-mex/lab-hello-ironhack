import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Section from './components/Section'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Main />
                <Section />
            </div>
        )
    }
}


export default App;