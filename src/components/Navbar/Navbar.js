import React from 'react'
import "./Navbar.css"
import LogoImage from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='imageContainer'>
                <img src={LogoImage} alt='logo' className='logoImage'/>
            </div>
            <div className='elementContainer'>
            <div className='navbarElements'>
                <Link to="/"> Home </Link> 
            </div>
            <div className='navbarElements'>
                About
            </div>
            <div className='navbarElements'>
               <Link to="/project">Projects</Link> 
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