import React from 'react'
import Nav from './nav'
import Mainmsg from './Main-msg'
import Card from './card'


function App() {
    return(
        <div className="container">
            <Nav navSvg={'../public/images/ironhack-logo.svg'}/>
            <Mainmsg />
            <div className="cards">
            <Card image={'/images/icon1.png'} cardText={'Awsome apps'}/>
            <Card image={'/images/icon2.png'} cardText={'Offline Apps'}/>
            <Card image={'/images/icon3.png'} cardText={'Easier to user'}/>
            <Card image={'/images/icon4.png'} cardText={'Super fun!'}/>
            </div>
        </div>
    )
}

export default App