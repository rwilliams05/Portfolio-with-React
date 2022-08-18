import React from 'react';

name=""
    image_src=""
    github=""
    deployed=""
function ProjectCard(props) {
  return (
    <section class="card">
        <header><a href="{"target="_blank" rel="noopener noreferrer">{name}</a></header>
        <div class="container">
          <p><a href="https://603collective.github.io/group-project-1/"target="_blank" rel="noopener noreferrer">
              <img src="Portfolio\NatGo Screenshot.png" alt="Screenshot of National Park Trip Planner App" /></a></p>
        </div>
      </section>
  );
}

export default ProjectCard;
