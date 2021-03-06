import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);   
  
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Relogio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <NavLink ><Link to = "/"> <Button  outline color = 'danger'> Relogio </Button> </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink  ><Link to = "/Cronometro"><Button  outline color = 'danger'> Cronômetro </Button> </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink ><Link to = "/Temporizador"><Button  outline color = 'danger'> Temporizador </Button></Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;