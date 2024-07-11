import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, onclick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      {onclick ? (
          <a href={onclick} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        ) : (
          <>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
            </>
        )}
      </div>
    </Col>
  );
};