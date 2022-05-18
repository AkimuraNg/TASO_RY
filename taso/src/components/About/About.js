import React from 'react'
import './About.css'
import Image from '../../images/card-image-top.png'
import members from './members.json'

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
                <div className="col-md-12 membersView">
                    <div className="title" style={{ textAlign: 'center' }}>
                        <h1>Jäsenet</h1>
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
                {/* <div className="col-md-12 membersView2">
                    {members.map(posts => {
                        return (
                            <div id="carouselMembers" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="cardMem" >
                                            <div className='face face1'>
                                                <div className="memberContent">
                                                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                                                    <h3>{posts.name}</h3>
                                                </div>
                                                <div className='face face2'>
                                                    <div className="memberContent">
                                                        <p>{posts.title}<br />
                                                            {posts.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default About