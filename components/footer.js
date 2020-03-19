import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Row,
  Col,
  Container
} from "shards-react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="bg-light">
          <Container>
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <br />
                <h5>Discalimer</h5>

                <p>
                  We are an independent group and are not affiliated with the
                  Caribbean Examination Council. The past papers availbale on
                  our website were sourced from multiple websites. To purchase
                  past papers and other materials directly from CXC, please
                  visit the official{" "}
                  <a target="_blank" href="https://www.cxc-store.com">
                    CXC Store
                  </a>
                  .
                </p>
              </Col>
              <Col sm={12} md={3} lg={3} xl={3}>
                <br />
                <h6>Partner Websites</h6>

                <ul
                  style={{
                    listStyleType: "none",
                    marginLeft: "-40px",
                    paddingTop: "10px"
                  }}
                >
                  <li style={{ paddingBottom: "15px" }}>
                    <a href="/">CXC Spanish Online</a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={3} lg={3} xl={3}>
                <br />
                <h6>Contact</h6>

                <ul
                  style={{
                    listStyleType: "none",
                    marginLeft: "-40px",
                    paddingTop: "10px"
                  }}
                >
                  <li style={{ paddingBottom: "7px" }}>
                    <i
                      style={{ paddingRight: "7px" }}
                      className="fas fa-envelope"
                    ></i>
                    <a href="mailto:holacxcspanish@gmail.com">
                      holacxcspanish@gmail.com
                    </a>
                  </li>
                  <li>
                    <i
                      style={{ paddingRight: "7px" }}
                      className="fas fa-envelope"
                    ></i>
                    <a href="mailto:raheemmcdonald@icloud.com">
                      raheemmcdonald@icloud.com
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-dark">
          <Container>
            <br />
            <h5>Discalimer</h5>
            <br />
            <br />
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
