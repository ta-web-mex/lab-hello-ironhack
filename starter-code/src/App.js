import React from 'react'
import Header from './Header';
import Content from './Content';
import Char from './Char';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Char />
      <div className="overlay"></div>
    </div>
  )
}

export default App