import React from "react";
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
  Container
} from "shards-react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <header>
        <Navbar type="dark" theme="primary" expand="md">
          <NavbarBrand href="/">CXC Tutors</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#">
                  Disabled
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle style={{ color: "white" }} nav caret>
                  Subjects
                </DropdownToggle>
                <DropdownMenu>
                  <Container>
                    <h6
                      className="text-info"
                      style={{
                        marginBottom: "-5px"
                      }}
                    >
                      CSEC Subjects
                    </h6>
                    <hr />
                  </Container>

                  <DropdownItem>English A</DropdownItem>
                  <DropdownItem>English B</DropdownItem>
                  <DropdownItem>Mathematics</DropdownItem>
                  <DropdownItem>Spanish</DropdownItem>
                  <DropdownItem>Information Technology</DropdownItem>
                  <DropdownItem>Social Studies</DropdownItem>
                  <DropdownItem>Caribbean History</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>

                  <br />
                  <Container>
                    <h6
                      className="text-info"
                      style={{
                        marginBottom: "-5px"
                      }}
                    >
                      CAPE Subjects
                    </h6>
                    <hr />
                  </Container>
                  <DropdownItem>Communication Studies</DropdownItem>
                  <DropdownItem>Computer Science</DropdownItem>
                  <DropdownItem>Information Technology</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>

            <Nav navbar className="ml-auto">
              <NavLink active href="/"></NavLink>
              <NavLink active href="/past-papers">
                Past Papers
              </NavLink>
              <NavLink active href="/cape-papers">
                CAPE Papers
              </NavLink>
              <NavLink active href="/">
                Contact
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
