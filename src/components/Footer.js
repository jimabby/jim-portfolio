import { Col, Container } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="align-items-center">
          <MailchimpForm />
          <Col sm="6" className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/weidong-kong-jim/'><img src={navIcon1} alt=''/></a>
              <a href='https://www.facebook.com/weidong.kong/'><img src={navIcon2} alt=''/></a>
              <a href='https://www.instagram.com/wkongjim/'><img src={navIcon3} alt=''/></a>
            </div>
            <p>CopyRight 2024. All Rights Reserved.</p>
          </Col>
        </div>  
      </Container>
    </footer>
  )
}