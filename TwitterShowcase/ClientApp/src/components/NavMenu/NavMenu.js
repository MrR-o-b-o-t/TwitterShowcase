import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">
                TwitterShowcase
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/" onClick={toggleNavbar}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/search" onClick={toggleNavbar}>
                            Search
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/random" onClick={toggleNavbar}>
                            Random
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavMenu;
