import React from 'react'

export default function Grid() {
  return (
    <section className='container py-5 text-center'>
      <div className='row'>
        <div className='col-12 col-md-3'>
          <img src='/images/icon1.png' alt='...' className='img-fluid mb-3' />
          <p>React make it painless to create interactive UIs</p>
        </div>
        <div className='col-12 col-md-3'>
          <img src='/images/icon2.png' alt='...' className='img-fluid mb-3' />
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className='col-12 col-md-3'>
          <img src='/images/icon3.png' alt='...' className='img-fluid mb-3' />
          <p>A set of inmutable values are passed to the components</p>
        </div>
        <div className='col-12 col-md-3'>
          <img src='/images/icon4.png' alt='...' className='img-fluid mb-3' />
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </section>
  )
}
