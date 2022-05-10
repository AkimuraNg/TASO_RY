import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav id = "navigation" className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3'>
                <div className="container">
                    <a className="navbar-brand">TASO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" >home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >meistä</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >blogit</a>
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