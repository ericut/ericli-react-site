import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">EFL</h1>
              <p className="sub-title">Designer Full-Stack</p>
            </Col>
            <Col md="6">
              <Nav>
                {/* <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Redes Sociais</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/ericut"
                  title="Siga-me no GitHub"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  GitHub
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/eric-frank-li-2442663b/"
                  title="Me adicione no LinkedIn"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  LinkedIn
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.instagram.com/ericfrankli/"
                  title="Siga-me no Instagram"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Instagram
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
