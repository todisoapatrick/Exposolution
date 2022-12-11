import React from 'react'
import './Loader.scss'
import logo from '../../assets/images/logo.png'

function Loader() {
  return (
    <div className='Loader d-flex flex-column align-items-center justify-content-center'>
        <div className="lds-logo">
          <div>
            <img src={ logo } alt="logo" />
          </div>
        </div>

        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader