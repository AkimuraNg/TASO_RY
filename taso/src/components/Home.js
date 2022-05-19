import React from 'react'

import About from './About/About'
import Blog from './Blog/Blog'
import Insta from './Insta/Insta';
import Navbar from './NavBar/Navbar'
import Footer from './Footer';

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
                                    {/* <h1 style={{ textTransform: 'uppercase' }} >
                    Something to say welcome here!
                  </h1> */}
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
                <section className="blogInsta mb-5" >
                    <div className='col-12'>
                        <div className="titleView">
                            <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                                Blogit & Uutiset
                            </h1>
                            <p className="content">Katso uusimmat blogit ja uutiset <span>täältä</span></p>
                        </div>
                        <Blog />
                    </div>

                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "25px", textTransform: "uppercase" }} className="text-color">
                                Instagram
                            </h1>
                            <p className="content">Katso uusin Instagram-julkaisumme <span>täältä</span></p>
                        </div>
                        <Insta />
                    </div>
                </section>
                {/*Events calendar view*/}
                <section className="events">
                    <div className="col-12">
                        <div className="titleView">
                            <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                                Tapahtumat
                            </h1>
                        </div>
                    </div>
                </section>
            </main>

            {/*Footer*/}
            <Footer/>
        </div>
    )
}

export default Home