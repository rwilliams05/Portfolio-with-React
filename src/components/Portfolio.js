
import ProjectCard from './ProjectCard';
import ProjectInfo from '../ProjectInfo';
import "../App.css";



function Portfolio() {
  return (
    <section className="projectswrap">
      <div className="project">
        <h2 className="top-title">My Projects</h2>
        <div> </div>
        <hr></hr>
      </div>

      
        {ProjectInfo.map((project) => {
          return <ProjectCard
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed} />;
        })};
      
    </section>

  );

}
export default Portfolio;