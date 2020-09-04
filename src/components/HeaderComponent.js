import React,{ useState } from "react"
import {Navbar, NavbarBrand,NavItem, Nav ,NavbarToggler, Collapse} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import '../styles/header.css';

const Header = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="nav-bar border-bottom header">
            <h1 className="title">ComicBook</h1>
            <Navbar light expand="md">
                <NavbarBrand> Latest Issues</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className="ml-auto" isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="inactive nav-link" to='/grid' activeClassName="active" exact={true}>
                                <span className="fa fa-th icons"> Grid  </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="inactive nav-link" to='/list' activeClassName="active">
                                <span className="fa fa-list icons"> List  </span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header