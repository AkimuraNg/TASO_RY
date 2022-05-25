import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
import { Link as Navigate } from 'react-router-dom';
import Logo from "../../images/logo3.png"

const Navbar = () => {
    return (
        <div>
            <nav id="navigation" className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link className="navbar-brand" to="banner">
                        <img src={Logo} alt="Logo" style={{ height: '50px' }} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Navigate className="nav-link text-white" to="/">kotisivu</Navigate>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="about">meistä</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white " to="blogInsta">blogit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="events">tapahtumat</Link>
                            </li>
                            <li className="nav-item">
                                <Navigate to="/Eng" className="nav-link text-white">english</Navigate>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar