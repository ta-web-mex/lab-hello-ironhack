import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";


class App extends React.Component{
    render(){
        return (
        <div>
        < Header />
        < Main />
        <section>
        <Section text="React makes it painless to creat interactive UIs." img="/images/icon1.png"/>
        <Section text="Build encapsulated component that manage their state" img="/images/icon2.png"/>
        <Section text="A set immutable values are passed to the components" img="/images/icon3.png" />
        <Section text="Stactically-typed designed to run on modern browsers." img="/images/icon4.png"/>
        </section>
        </div>
        )
    }
}

export default App 