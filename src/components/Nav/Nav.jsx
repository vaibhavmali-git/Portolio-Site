import React from 'react'
import './nav.css'
import { AiFillHome } from "react-icons/ai";
import { RiUserReceived2Fill } from "react-icons/ri";
import { RiBook2Fill } from "react-icons/ri";
import { BsFilePptFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

function Nav() {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><RiUserReceived2Fill /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><RiBook2Fill /></a> 
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><BsFilePptFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiSolidMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
