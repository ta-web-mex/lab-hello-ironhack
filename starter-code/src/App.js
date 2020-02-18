import React,{Component} from 'react'
import Card from './components/Card'

class App extends Component{
    render(){
        return (
            <div className='App'>
                <nav> 
                    <img src={'/images/ironhack-logo.svg'} className="App-logo" alt="logo" />
                    <img src={'/images/menu-top.svg'} className="App-logo" alt="logo" /> 
                </nav>
                <h1>Say hello to ReactJS</h1>  
                <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer</h3>
                <a>Awesome!</a>
                <div id="cards">
                    <Card 
                        description="React makes it painless to create interactive UIs"
                        image="/images/icon1.png"
                    />
                    <Card 
                        description="Build encapsulated component that manage their state."
                        image="/images/icon2.png"
                    />
                    <Card 
                        description="A set of immutable values are passed to cpmponents"
                        image="/images/icon3.png"
                    />
                    <Card 
                        description="Statically-typed designed to run on modern browsers."
                        image="/images/icon4.png"
                    />
                </div>
            </div>
        )
    }
}

export default App