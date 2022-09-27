import React from 'react'
import logo from "../../../images/logo.svg"
import { links } from './navbardata'
import {RiFacebookCircleLine} from "react-icons/ri"
import {RiInstagramLine} from "react-icons/ri"
import {BsSuitHeart} from "react-icons/bs"
import {BsCart} from "react-icons/bs"
import './navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul className='links'>
            {links.map((link)=>{
                const {id,text,url}=link
              return  (
                <li key={id}>
                 <a href={url}>{text}</a>
                </li>
              )
            })}
        </ul>
      </div>
      <div className="social-icons">
       <RiFacebookCircleLine className='icon'/>
       <RiInstagramLine className='icon'/>
      </div>
       <div className="search">
      <input type="search" className='search-btn'  placeholder='search'/>
      </div>
      <div className="wish-bar">
        <BsSuitHeart className='wishbar-icon'/>
        <BsCart className='wishbar-icon'/>
      </div>
    </nav>
  )
}

export default Navbar