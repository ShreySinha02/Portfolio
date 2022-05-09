import React from 'react'
import './Introduction.css'
import {FaBeer} from 'react-icons/fa';
// import {ImLinkedin} from'react-icons/im'
import {AiFillGithub,AiOutlineInstagram,AiOutlineLinkedin} from'react-icons/ai'
import { Container } from 'react-bootstrap';
// import Link from 'react-scroll/modules/components/Link'
function Introduction() {
  return (

    
      <Container  className='introduction'>
      <text>Hii I am Shrey  </text>
      <FaBeer />
      <br/>
      <div className='link'>
      <a className='child1' href='https://www.linkedin.com/in/shrey07/'><AiOutlineLinkedin/></a>
      <a className='chile2' href='https://github.com/shreykinshu'><AiFillGithub/></a>
      <a className='chile3' href='https://www.instagram.com/sh.rey7/?hl=en'><AiOutlineInstagram/></a>
      </div>
      <div >
        <text>Just a Student who love to Develope and a Learner</text>
      </div>
      </Container>
    
    
    
    
    
  )
}

export default Introduction