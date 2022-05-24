import React from 'react'
import Facebook from '../images/facebook.png';
import Instagram from '../images/Instagram.png'
import Logo from '../images/logo2.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <div className="contact">
                                <h1 >Yhteystiedot</h1>
                                <button className="btn btn-feedback text-white" type="button" data-bs-toggle="modal" data-bs-target="#ContactModal">Yhteystiedot</button>
                            </div>
                            <h4 style={{ marginTop: '50px' }}>Seuraa  Meistä</h4>
                            <a href="https://www.facebook.com/tampereensahkoopiskelijat/?fref=ts" target="_blank" rel="noreferrer">
                                <img src={Facebook} alt="Facebook" className="socialLogo" />
                            </a>
                            <a href="https://www.instagram.com/tasory_ig/?igshid=1r12zbt2fk06x" target="_blank" rel="noreferrer">
                                <img src={Instagram} alt="Instagram" style={{ cursor: 'pointer' }} />
                            </a>
                        </div>
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <img src={Logo} alt="Logo" className="logo mb-3" />
                            <p>Tampereen Ammattikorkeakoulu</p>
                        </div>
                        <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
                            <h1 >Tietoa Tasosta</h1>
                            <div className="row1" style={{ display: 'flex', justifyContent: 'center' }}>
                                <p className="data">Historiaa</p>
                                <p>Tietosuja</p>
                            </div>
                            <p>Evāsteasetukset</p>
                            <button className="btn btn-feedback text-white" type="button" data-bs-toggle="modal" data-bs-target="#FeedbackModal">Palaute</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footerRes">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-white" style={{ textAlign: 'center' }}>
                            <div className="contact">
                                <h1 >Yhteystiedot</h1>
                                <button className="btn btn-feedback text-white" type="button" data-bs-toggle="modal" data-bs-target="#ContactModal">Yhteystiedot</button>
                            </div>
                            <div className="info">
                                <h1 >Tietoa Tasosta</h1>
                                <div className="row1" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p className="data">Historiaa</p>
                                    <p>Tietosuja</p>
                                </div>
                                <p>Evāsteasetukset</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-white" style={{ textAlign: 'center' }}>
                            <img src={Logo} alt="Logo" className="logo mb-3" />
                            <p>Tampereen Ammattikorkeakoulu</p>
                        </div>
                        <div className="col-md-3 text-white" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                            <div className="follow">
                                <a href="https://www.facebook.com/tampereensahkoopiskelijat/?fref=ts" target="_blank" rel="noreferrer">
                                    <img src={Facebook} alt="Facebook" className="socialLogo" />
                                </a>
                                <a href="https://www.instagram.com/tasory_ig/?igshid=1r12zbt2fk06x" target="_blank" rel="noreferrer">
                                    <img src={Instagram} alt="Instagram" style={{ cursor: 'pointer' }} />
                                </a>
                            </div>
                            <button className="btn btn-feedback text-white" type="button" data-bs-toggle="modal" data-bs-target="#FeedbackModal">Palaute</button>
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
            <div className='modal fade' tabindex="-1" id="ContactModal" aria-labelledby='ContactModalLabel' aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ContactModalLabel">Yhteystiedot</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="bodyContent" style={{ display: 'flex' }}>
                                <img src={require('../images/mail.png')} alt="email" style={{ width: 25, height: 25, marginRight: 5, marginBottom: 20 }} />
                                <p>tampereensahkoopiskelijat@gmail.com</p>
                            </div>
                            <div className="bodyContent" style={{ display: 'flex' }}>
                                <img src={require('../images/Phone.png')} alt="email" style={{ width: 25, height: 25, marginRight: 5, marginBottom: 20 }} />
                                <p>+358 20 20202020</p>
                            </div>
                            <div className="bodyContent" style={{ display: 'flex' }}>
                                <img src={require('../images/address.png')} alt="email" style={{ width: 25, height: 25, marginRight: 5 }} />
                                <p>Kuntokatu 3, 33520 Tampere A0-18</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                style={{ background: 'white', color: 'rgba(118, 0, 85, 0.65)', border: 'none', fontSize: '16px', fontWeight: '500' }}>
                                Kiinni
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer