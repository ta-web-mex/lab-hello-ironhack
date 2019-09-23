import React from 'react'

export default function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        <img src='/images/ironhack-logo.svg' alt='Ironhack logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'></div>
    </nav>
  )
}
