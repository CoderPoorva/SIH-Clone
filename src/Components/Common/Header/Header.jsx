import React from 'react'
import { LoginButton, Logo,  Navbar, NavigationBar } from './HeaderStyle'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {color1, color2} from '../../../GlobalConfig/GlobalConfig'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar>
    <Logo><img src="/Images/Sih_logo.png" alt="SIH Logo" /></Logo>
    <LoginButton> <span>SIH Grand Final Login</span> <AccountCircleIcon style={{fontSize :"1.5rem", color:color1}} /></LoginButton>
  </Navbar>
  <NavigationBar>
   <NavLink to="/" style={{color:color2, textDecoration:"none", marginRight:"20px"}}>
      Home
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      About SIH
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      GuideLines
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      Problem Statements
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      Know Your SPOC
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      Project Implementation
   </NavLink>
   <NavLink style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      FAQS
   </NavLink>
   <NavLink to="/Contact" style={{color:color2, textDecoration:"none",marginRight:"20px"}}>
      Contact Us
   </NavLink>
  </NavigationBar>
 
  </>
  )
}

export default Header