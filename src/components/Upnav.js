import React from 'react'
import {BsArrowUpCircleFill}from 'react-icons/bs'
import './Upnav.css'
import { Link } from "react-scroll";
function Upnav() {
  return (
    <div className='upnav'>
       
          <Link className="uparrow"
            
            to="home"
            spy={true}
            smooth={true}
            offset={-500}
            duration={2000}
          >
            <BsArrowUpCircleFill/>
          </Link>
          </div>
  )
}

export default Upnav;