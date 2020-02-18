import React, {Fragment} from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Content from './components/Content'
import Section from './components/Section'

const App = ()=>{
    return (
        <Fragment>
            <Nav />
            <Header />
            <Content />
            <section>
                <Section text="React makes it painless to creat interactive UIs." imageURL="/images/icon1.png" />
                <Section text="Build encapsulated component that manage their state" imageURL="/images/icon2.png" />
                <Section text="A set immutable values are passed to the components" imageURL="/images/icon3.png" />
                <Section text="Stactically-typed designed to run on modern browsers." imageURL="/images/icon4.png" />
            </section>
        </Fragment>
    )
}

export default App