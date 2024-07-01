import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Woman with Glasses Illustration Logo Template.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email.png";
import navIcon3 from "../assets/img/fiverr.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/khushi-tulsiyan/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:khushitulsiyan495@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.fiverr.com/s/99G091d"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}