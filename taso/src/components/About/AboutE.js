import React from 'react'
import './About.css'
import Image from '../../images/card-image-top.png'
import members from '../members.json'

const AboutE = () => {
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
                <div className="col-md-12 membersView">
                    <div className="title" style={{ textAlign: 'center' }}>
                        <h1>Members</h1>
                    </div>
                    <div className="card-group-members">
                        {members.map(post => {
                            return (
                                <div className="cardMem" >
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>{post.name}</h3>
                                        </div>
                                        <div className='face face2'>
                                            <div className="memberContent">
                                                <p>{post.title}<br />
                                                    {post.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="col-md-12 membersView2">
                    <div id="carouselMembers" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Matti Hämelahti</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Chairman<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" >
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Juuse Hannula</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Vice Chairman<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Samuli Marttila</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Treasurer<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Lumi Vainio</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Secretary<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Juuso Torikka</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Educational Affairs<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Mika Haapanen</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Events Coordinator<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Enni Heinonen</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Cooperations Coordinator<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Markus Korpela</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Facilities and Members Coordinator<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="cardMem">
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                                            <h3>Sampo Mykkänen</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className="memberContent">
                                            <p>Social Media Coordinator<br />
                                                Email: xxxx@tuni.fi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AboutE