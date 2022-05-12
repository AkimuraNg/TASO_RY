import React from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div>
            <nav id = "navigation" className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3'>
                <div className="container">
                    <Link className="navbar-brand" to="banner">TASO</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="about">meistä</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="blogInsta">blogit</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >tapahtumat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >in english</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar