import React from 'react'
import './About.css'
import Image from '../../images/card-image-top.png'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="aboutContent">
                        <p>Tampereen sähköopiskelijat (TASO ry) on Tampereen ammattikorkeakoulun sähkö- ja automaatiotekniikan opiskelijoiden ainekerho.
                            <br />TASO ry on Tampereen ammattikorkeakoulun (TAMK) opiskelijakunnan (TAMKO) alayhdistys.
                        </p>
                        <p>
                            Valtaosa kerhon jäsenistä takaisin sähkö- ja automaatiotekniikan opiskelijoista, mutta TASOn jäseneksi saa liittyä kuka vain TAMKin opiskelijoista, josta johtuen monet eri koulutusohjelmista ovat liittyneet TASOn vahvuuteen.
                        </p>
                    </div>
                </div>
            </div>
            {/*Member View*/}
            <div className="row">
                <div className="col-md-12" style={{ marginTop: '120px' }}>
                    <div className="title" style={{ textAlign: 'center' }}>
                        <h1>Jäsenet</h1>
                    </div>
                    <div className="card-group-members">
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Matti Hämelahti</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Puheenjohtaja<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Juuse Hannula</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Varapuheenjohtaja<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Samuli Marttila</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Rahastonhoitaja<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group-members">
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Lumi Vainio</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Sihteeri<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Juuso Torikka</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Koulutuspoliittinen Vastaava<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Mika Haapanen</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Tapahtumavastaava<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group-members">
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Enni Heinonen</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Yhteistyövastaava<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Markus Korpela</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Tila-ja Jäsenvastaava<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardMem">
                            <div className='face face1'>
                                <div className="memberContent">
                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                    <h3>Sampo Mykkänen</h3>
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className="memberContent">
                                    <p>Somevastaava<br />
                                        Email: xxxx@tuni.fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About