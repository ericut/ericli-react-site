import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Eric Frank Li</h1>
            <h3 className="d-none d-sm-block">
              Designer Full Stack e Game Designer
            </h3>
            <a href="https://www.linkedin.com/in/eric-frank-li-2442663b/" target="_blank">Acesse meu <i className="fab fa-instagram" /> LinkedIn</a>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
