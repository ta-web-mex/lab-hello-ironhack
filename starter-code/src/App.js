import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Section from "./components/Section";
import Images from "./components/Images";
function App() {
  return (
    <div className="bodyApp">
    <Nav/>
    <Section/>
    <Images/>

    </div>
  );
}

export default App;