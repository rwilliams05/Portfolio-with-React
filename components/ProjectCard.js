import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
//the handleIncrement and handleDecrement functions depeding on the button clicked
function ProjectCard(props) {
  return (
    <section class="card">
        <header><a href="{https://github.com/rwilliams05/Nat-Go-Trip-Planner"target="_blank" rel="noopener noreferrer">NatGo: Trip Planner</a></header>
        <div class="container">
          <p><a href="https://603collective.github.io/group-project-1/"target="_blank" rel="noopener noreferrer">
              <img src="Portfolio\NatGo Screenshot.png" alt="Screenshot of National Park Trip Planner App" /></a></p>
        </div>
      </section>
  );
}

export default ProjectCard;
