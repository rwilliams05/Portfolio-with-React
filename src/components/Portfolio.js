
import ProjectCard from './ProjectCard';
import ProjectInfo from '../ProjectInfo';
import "../App.css";



function Portfolio() {
  return (
    <div>
    <div class="projectheader">
        <h2>My Projects</h2>
              </div>
    <section className="projectswrap">
      

      
        {ProjectInfo.map((project) => {
          return <ProjectCard
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed} />;
        })};
      
    </section>
    </div>

  );

}
export default Portfolio;