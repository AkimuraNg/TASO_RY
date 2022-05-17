import React from 'react'
import Logo from '../images/logo2.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/Instagram.png'

import About from './About/About'
import Blog from './Blog/Blog'
import Insta from './Insta/Insta';
import Navbar from './NavBar/Navbar'

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
                            <h1 style={{ marginTop: "50px", textTransform: "uppercase" }} className="text-color">
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
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <h1 >YHTEYSTIEDOT</h1>
                            <p>Yhteyttā</p>
                            <h4 style={{ marginTop: '50px' }}>Seuraa  Meistä</h4>
                            <img src={Facebook} alt="Facebook" className="socialLogo" />
                            <img src={Instagram} alt="Instagram" />
                        </div>
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <img src={Logo} alt="Logo" className="logo mb-3" />
                            <p>Tampereen Ammattikorkeakoulu</p>
                        </div>
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <h1 >TIETOA TASOSTA</h1>
                            <div className="row1" style={{ display: 'flex' }}>
                                <p className="data">Historiaa</p>
                                <p>Tietosuja</p>
                            </div>
                            <p>Evāsteasetukset</p>
                            <button className="btn feedback text-white" style={{ marginTop: "40px" }} type="button" data-bs-toggle="modal" data-bs-target="#FeedbackModal">Palaute</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="modal fade" id="FeedbackModal" tabindex="-1" aria-labelledby="FeedbackModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="FeedbackModalLabel">Palautetta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Nimi <span style={{ color: 'red', textDecoration: 'none' }}>*</span></label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Sāhkōpōsti <span style={{ color: 'red', textDecoration: 'none' }}>*</span></label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Yhteydenoton Aihe <span style={{ color: 'red', textDecoration: 'none' }}>*</span></label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Viesti <span style={{ color: 'red', textDecoration: 'none' }}>*</span></label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                style={{ background: 'white', color: 'rgba(118, 0, 85, 0.65)', border: 'none', fontSize: '16px', fontWeight: '500' }}>
                                Peruuttaa
                            </button>
                            <button type="button" className="btn btn-primary"
                                style={{ background: "rgba(118, 0, 85, 0.65)", border: 'none', width: '150px' }}>
                                LĀHETĀ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home