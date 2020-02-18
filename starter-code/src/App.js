import React,{Component} from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import Header from './components/Header'

class App extends Component{
    render(){
        return(
            <div className="App">
                <Nav/>
                <Header/>
                <article>
                    <Card
                        image="/images/icon1.png"
                        description="React makes it painless to create interactive UIs."
                    />
                    <Card
                        image="/images/icon2.png"
                        description="Build encapsulated component that manage their state."
                    />
                    <Card
                        image="/images/icon3.png"
                        description="A set of immutable values are passed to the components."
                    />
                    <Card
                        image="/images/icon4.png"
                        description="Statically-typed designed to run on modern browser."
                    />
                </article>
            </div>
        )
    }
}

export default App