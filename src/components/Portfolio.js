
import ProjectCard from './ProjectCard';
import "../App.css";

/*info on all projects in portfolio*/
function Portfolio(props) {
return(
  <div className="portfolio">
    <ProjectCard
    name="Text Editor"
    image_src="public\Text Editor Screenshot.png"
    github="https://github.com/rwilliams05/Text-Editor"
    deployed="https://still-coast-88749.herokuapp.com/"
  />
  <ProjectCard
    name="Employee Management System"
    image_src="public\Employee Management System.png"
    github="https://github.com/rwilliams05/Employee-Tracker"
    deployed="https://watch.screencastify.com/v/vnczceJwjBRn6okxFtAy"
  />
  <ProjectCard
    name="Social Network API"
    image_src="public\Social Network API.png"
    github="https://github.com/rwilliams05/Social-Network-API"
    deployed="https://watch.screencastify.com/v/0FZgdEiPHrercdaTxKnY"
  />
  <ProjectCard
    name=""
    image_src=""
    github=""
    deployed=""
  />
  <ProjectCard
    name=""
    image_src=""
    github=""
    deployed=""
  />
  <ProjectCard
    name=""
    image_src=""
    github=""
    deployed=""
  />
  </div>
)
}
export default Portfolio;