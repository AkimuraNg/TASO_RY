import React from 'react'
import './About.css'
import members from './members.json'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="aboutContent">
                        <div className='cardAbout'>
                            <div className='card-content'>
                                <p>Tampereen Sähköopiskelijat (TASO ry) on Tampereen ammattikorkeakoulun sähkö- ja automaatiotekniikan opiskelijoiden ainekerho.
                                    Tampereen ammattikorkeakoulun (TAMK) ylioppilaskunnan alaliitto (TAMKO).
                                </p>
                            </div>
                        </div><div className='cardAbout'>
                            <div className='card-content'>
                                <p>
                                    Valtaosa kerhon jäsenistä takaisin sähkö- ja automaatiotekniikan opiskelijoista, mutta TASOn jäseneksi saa liittyä kuka vain TAMKin opiskelijoista, josta johtuen monet eri koulutusohjelmista ovat liittyneet TASOn vahvuuteen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 aboutImageCarousel">
                    <div id="carouselAboutImages" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="aboutImg">
                                    <img src='image/club/ins.jpg' className='about-image' alt="about images" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="aboutImg">
                                    <img src='image/club/ins1.jpg' className='about-image' alt="about images" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="aboutImg">
                                    <img src='image/club/ins4.jpg' className='about-image' alt="about images" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="aboutImg">
                                    <img src='image/club/ins6.jpg' className='about-image' alt="about images" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="aboutImg">
                                    <img src='image/club/ins9.jpg' className='about-image' alt="about images" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*Member View*/}
            <div className="row">
                <div className="col-md-12 membersView">
                    <div className="title" style={{ textAlign: 'center' }}>
                        <h1>Jäsenet</h1>
                    </div>
                    <div className="card-group-members">
                        {members.map(post => {
                            return (
                                <div className="cardMem" key={post.id}>
                                    <div className='face face1'>
                                        <div className="memberContent">
                                            <img src={post.avatar} className="img-fluid rounded-start" alt="..." />
                                            <h3>{post.name}</h3>
                                        </div>
                                        <div className='face face2'>
                                            <div className="memberContent">
                                                <p>{post.role}<br />
                                                    {post.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About