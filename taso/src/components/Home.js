import React from 'react'
import { Link } from 'react-router-dom'

import About from './About/About'
import Blog from './Blog/Blog'
import Insta from './Insta/Insta';
import Navbar from './NavBar/Navbar'
import Footer from './Footer';
import Blogs from './Blog_Page/Blogs'

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="wrapper">
                {/*Introduction view*/}
                <section className="banner">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12">
                                <div className="welcome">
                                    <h1 style={{ textTransform: 'uppercase' }} >
                                        Tervetuola
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*About view*/}
                <section className="about">
                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                                Meistä
                            </h1>
                        </div>
                        <About />
                    </div>
                </section>

                {/*Blogs and Instagram view*/}
                <section className="blog mb-5" >
                    <div className='col-12'>
                        <div className="titleView">
                            <h1 style={{ marginTop: "160px", textTransform: "uppercase" }} className="text-color">
                                Blogit & Uutiset
                            </h1>
                            <p className="content">Katso uusimmat blogit ja uutiset <span>
                                <Link to="/Blogs/1" element={<Blogs />} style={{ color: "rgba(118, 0, 85, 0.65)" }}>täältä</Link>
                            </span>
                            </p>
                        </div>
                        <Blog />
                    </div>
                </section>
                <section className="instagram">
                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "100px", textTransform: "uppercase" }} className="text-color">
                                Instagram
                            </h1>
                            <p className="content">Katso uusin Instagram-julkaisumme <span>
                                <a href="https://www.instagram.com/tasory_ig/?igshid=1r12zbt2fk06x" target="_blank" rel="noreferrer" style={{ color: "rgba(118, 0, 85, 0.65)" }}>täältä</a>
                            </span>
                            </p>
                        </div>
                        <Insta />
                    </div>
                </section>
                {/*Events calendar view*/}
                {/* <section className="events">
                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                                Tapahtumat
                            </h1>
                        </div>
                        
                    </div>
                </section> */}
                {/*Footer*/}
                <Footer />
            </main>

        </div>
    )
}

export default Home