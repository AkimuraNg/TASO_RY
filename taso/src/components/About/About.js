import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4 item">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                Tampereen sähköopiskelijat (TASO ry) on Tampereen ammattikorkeakoulun sähkö- ja automaatiotekniikan opiskelijoiden ainekerho.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4 col-md-4 item">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                TASO ry on Tampereen ammattikorkeakoulun (TAMK) opiskelijakunnan (TAMKO) alayhdistys.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12">
                    <div className="card2">
                        <div className="card-body">
                            <p className="card-text">
                                Valtaosa kerhon jäsenistä takaisin sähkö- ja automaatiotekniikan opiskelijoista, mutta TASOn jäseneksi saa liittyä kuka vain TAMKin opiskelijoista, josta johtuen monet eri koulutusohjelmista ovat liittyneet TASOn vahvuuteen.                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Member View*/}
            <div className="row">
                <div className="col-md-12" style={{ marginTop: '120px' }}>
                    <div className="title" style={{ textAlign: 'center' }}>
                        <h1>Jäsenet</h1>
                    </div>
                    <div className="card-group" style={{ marginTop: '50px' }}>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Matti Hämelahti</h5>
                                <p class="card-textMem">
                                    Puheenjohtaja<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Juuse Hannula</h5>
                                <p class="card-textMem">
                                    Varapuheenjohtaja<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Samuli Marttila</h5>
                                <p class="card-textMem">
                                    Rahastonhoitaja<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-group" style={{ marginTop: '50px' }}>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lumi Vainio</h5>
                                <p class="card-textMem">
                                    Sihteeri<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Juuso Torikka</h5>
                                <p class="card-textMem">
                                    Koulutuspoliittinen Vastaava<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mika Haapanen</h5>
                                <p class="card-textMem">
                                    Tapahtumavastaava<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-group" style={{ marginTop: '50px' }}>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Enni Heinonen </h5>
                                <p class="card-textMem">
                                    Yhteistyövastaava<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Markus Korpela</h5>
                                <p class="card-textMem">
                                    Tila- ja Jäsenvastaava<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                        <div class="cardMem">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sampo Mykkänen</h5>
                                <p class="card-textMem">
                                    Somevastaava<br />
                                    Email: xxxx@tuni.fi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About