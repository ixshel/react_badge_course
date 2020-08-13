import React, { Component } from 'react';
import Logo from '../images/logo.svg'
import './styles/NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;