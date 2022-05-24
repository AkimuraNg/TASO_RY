import React from 'react'

import AboutE from './About/AboutE'
import Blog from './Blog/Blog'
import Insta from './Insta/Insta';
import NavbarE from './NavBar/NavbarE';
import FooterEng from './FooterEng';

const Home = () => {
    return (
        <div>
            <header>
                <NavbarE />
            </header>
            <main className="wrapper">
                {/*Introduction view*/}
                <section className="banner">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12">
                                <div className="welcome">
                                    <h1 style={{ textTransform: 'uppercase' }} >
                                        Welcome to TASO RY
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
                                About Us
                            </h1>
                        </div>
                        <AboutE />
                    </div>
                </section>

                {/*Blogs and Instagram view*/}
                <section className="blogInsta mb-5" >
                    <div className='col-12'>
                        <div className="titleView">
                            <h1 style={{ marginTop: "160px", textTransform: "uppercase" }} className="text-color">
                                Blogs & News
                            </h1>
                            <p className="content">Check our latest blogs and news <span>here</span></p>
                        </div>
                        <Blog />
                    </div>

                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "25px", textTransform: "uppercase" }} className="text-color">
                                Our Instagram
                            </h1>
                            <p className="content">Check our latest Instagram posts <span>here</span></p>
                        </div>
                        <Insta />
                    </div>
                </section>
                {/*Events calendar view*/}
                <section className="events">
                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                                Events
                            </h1>
                        </div>
                    </div>
                </section>
                {/*Footer*/}
                <FooterEng />
            </main>
        </div>
    )
}

export default Home