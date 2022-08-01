import React, { Fragment, useState, useLayoutEffect } from 'react'
import './NavBar.css'
import Logo from '../logo.svg'
import Menu from '../images/icon-menu.svg'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
  
const Navbar = () => {
  const [width] = useWindowSize();
  return (
    <Fragment>
    <div className='head'>
        <div className='header'>
            <div className='Header-container'> 
                {width > 1024  ?
                <div className='left-container'>
                    <img  src={Logo} alt="logo" />
                    <div className='menu'>
                        <h4>Features</h4>
                        <h4>Company</h4>
                        <h4>Careers</h4>
                        <h4>About</h4>
                    </div>
                </div>
                : 
                <div className='left-container'>
                    <img src={Logo} alt="logo" />
                </div>
                }
                <div className='right-container'>
                    {
                    width > 1024  ?
                    <div className='right-container'>
                        <button className="offer-button " >Login</button>
                        <button className="offer-button button--white" >Register</button>    
                    </div>
                    : 
                    <div className='right-container'>
                        <img src={Menu} alt="logo" />
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Navbar