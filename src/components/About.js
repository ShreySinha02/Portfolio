import React from 'react';
// import { Container } from 'react-bootstrap';
import './About.css';
import {DiJava,DiPython,DiJavascript1,DiMysql,DiLinux,DiGithubBadge,
    DiReact,} from'react-icons/di'
import {SiKotlin,SiFlutter,}from 'react-icons/si';
import {FiFigma}from 'react-icons/fi'

function About() {
  return (
        <div className='about'>
            <h4>Skills</h4>
            <div className='skill'>
                    <ul className='lang'>
                    <li><DiJava/>Java</li>
                        <li><DiPython/>Pyhton</li>
                        <li><DiJavascript1/>JavaScript</li>
                        <li><DiMysql/>MySQL</li>
                        <li><SiKotlin/>Kotlin</li>
                    </ul>
            </div>
            <h4>Technology/Framework</h4>
            <div className='skill'>
                    <ul className='lang'>
                        <li><DiLinux/>Linux</li>
                        <li><DiGithubBadge/>Github</li>
                        <li><DiReact/>React JS</li>
                        <li><SiFlutter/>Flutter</li>
                        <li><FiFigma/>Figma</li>
                    </ul>
            </div>
            <a href='https://drive.google.com/file/d/1xSGoXoGhnqxYXOz-ype8u-eBtVg2EfeF/view?usp=sharing '>Link to Resume</a>
        </div>
   
  )
}

export default About