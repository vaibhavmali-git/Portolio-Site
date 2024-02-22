import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import { BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/vaibhav-mali-841779218" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/VaibhavMali001" target='_blank'><BsGithub /></a>
      <a href="https://twitter.com/vaibhavmali_01" target='_blank'><BsTwitter  /></a>
    </div>
  )
}

export default HeaderSocials
