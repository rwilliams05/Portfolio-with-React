
import ProjectCard from './ProjectCard';
import ProjectInfo from '../ProjectInfo';
//import "../App.css";


//function Wrapper(props) {
 //// return <div className="wrapper">{props.children}</div>;
//}

function Portfolio() {
//ProjectInfo=JSON.parse(ProjectInfo);
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">My Projects</h2>
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