import React from 'react';
import Me from "../images/Me.jpg";


export default function About() {
  return (
    <div>
    <div id="aboutme">
      <h2>About Me</h2>
      <img src={Me} alt="author"/>
        
          
         
         <h2 id="abouttitle"> Flexible team player and problem solver</h2>
          
       
        <p> A wealth of experience in nonprofits, human services, and education has given me wide persectives and skills in identifying priorities, real-life problem solving, and working with a wide range of stake holders and populations.</p>
        <div>
        <h2> <a href="https://drive.google.com/file/d/1nP1OgsmY7Lmp5thLSsv-R9iEqhSCQtl2/view?usp=sharing" target="_blank" rel="noreferrer"> My Resume</a> </h2>
        
        </div>
    </div>
    </div>
  );
}


