import React, {Component} from 'react'
import '../public/App.css'

const navBar ={
  logo: 'images/ironhack-logo.svg',
  menu: 'images/menu-top.svg'
}

const landingInfo = (
    <div>
        <h1>Say Hello to ReactJS</h1>
        <h2>You will learn a Frontend framework from scratch,</h2>
        <h2>to become a Ninja Developer</h2>
    </div>
)

const footImg={
    react: 'images/react-logo.svg',
    icon1: 'images/icon1.png',
    icon2: 'images/icon2.png',
    icon3: 'images/icon3.png',
    icon4: 'images/icon4.png'
}

class App extends Component {
    render(){
        return(
           <div className="body">
               <nav>
               <img className="navImg1" src={navBar.logo}></img> 
               <img className="navImg2" src={navBar.menu}></img>
               </nav>

               <section>
                    {landingInfo}
                    <button type="button" class="btn btn-light btn-lg">Awesome!</button>
               </section>
               
               <footer>
                   <div>
                       <img src={footImg.icon1}></img>
                       <p>React makes it painless to create interactive UIs</p>
                   </div>
                   <div>
                     <img src={footImg.icon2}></img>
                     <p>Build encapsulated component that manage their state.</p>
                   </div>
                   <div>
                     <img src={footImg.icon3}></img>
                     <p>A set of immutable values are passed to the components.</p>
                   </div>
                   <div>
                     <img src={footImg.icon4}></img>
                     <p>Statically-typed designed to run on modern browsers.</p>
                   </div>
               </footer>
           
           </div> 
        )
    }
}

export default App