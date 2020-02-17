import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Cards from './components/Cards'

class App extends Component {
    render(){
        return(
            <div>
            <Navbar/>   
            <Content/>
            <Cards/>
            </div>
        )
    }
}

export default App