import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src='/images/icon1.png' alt='Tool'/>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src='/images/icon2.png' alt='Pen'/>
        <p>Build encapsulated components that manage their state.</p>    
      </div>
      <div>
        <img src='/images/icon3.png' alt='Grind'/>
        <p>A set of inmmutable values are passed to the components.</p>
      </div>
      <div>
        <img src='/images/icon4.png' alt='Code'/>      
        <p>Statically-type design to run on modern web browsers.</p>
      </div>
    </div>
  )
}

export default Footer