import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>The Github Finder App</p>
          <a href="https://github.com/somebody-usual/github-finder">The Github Finder App</a>    
        </div>
      </div>
    </Col>
  )
}