import React,{Component} from 'react'
import Card from './components/Card'
import Nav  from './components/Nav'
import Sec from './components/Sec'


class App extends Component{
    render(){
        return (
            <div className='generalContainer'>
                <Nav img1 ="/images/ironhack-logo.svg" img2="/images/menu-top.svg"/>
                <Sec/>
                <div className='allCards'>

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