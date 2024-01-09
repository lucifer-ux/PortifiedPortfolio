import React from 'react'
import "./Navbar.css"
import LogoImage from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='imageContainer'>
                <img src={LogoImage} alt='logo' className='logoImage'/>
            </div>
            <div className='elementContainer'>
            <div className='navbarElements'>
                Home
            </div>
            <div className='navbarElements'>
                About
            </div>
            <div className='navbarElements'>
                Projects
            </div>
            <div className='navbarElements'>
                Contact
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar