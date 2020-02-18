import React, {Component} from 'react'
import Titulo from './components/Titulo'
import Contenido from './components/Contenido'
import Secciones from './components/Seccciones'
import Navbar from './components/Navbar'

class App extends Component{
    render(){
        return(
            <div className='contenedor'>
                <Navbar />
                <Titulo />
                <Contenido />
                <div className="seccion"
                    style={{
                        display: 'flex',
                        flexDirection: "row",
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        marginTop: '80px'
                    }}
                >
                    <Secciones texto = 'React makes it painless to create interactive UIs' image='/images/icon1.png'/>
                    <Secciones texto = 'Build encapsulated component that manage their state.'  image='/images/icon2.png' />
                    <Secciones texto = 'A set of immutable values are passed to the components.' image='/images/icon3.png'/>
                    <Secciones texto = 'Statically-typed designed to run on modern browsers.'  image='/images/icon4.png' />
                </div>
            </div>
        )
    }
}

export default App 