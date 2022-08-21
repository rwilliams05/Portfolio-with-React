import React from 'react';
import "../App.css";


function ProjectCard(props) {
  return (
    <section class="card">
      <header class="card-header">{props.name}</header>
      <div class="container">
        <img src={props.image} alt="{alttext}" />
        <div>
       <p><a href={props.github} target="_blank" rel="noopener noreferrer">GitHub Link:</a></p>
       </div>
        <p><a href= {props.deployed} target="_blank" rel="noopener noreferrer">Deployed At:</a></p>



      </div>
    </section>
  );
}

export default ProjectCard;
