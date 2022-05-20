import React from 'react'
import './About.css'
import Image from '../../images/card-image-top.png'
import members from './members.json'

const AboutE = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="aboutContent">
                        <p>Tampereen Sähköopiskelijat (TASO ry) is a subject club for students of electrical and automation engineering at Tampere University of Applied Sciences.
                             Sub-association of the Tampere University of Applied Sciences (TAMK) student body (TAMKO).
                        </p>
                        <p>
                            The majority of the club's members are back from electrical and automation engineering students, but only TAMK students can join TASO, which is why many of the different degree programs have joined TASO's strength.
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
            </div>
        </div>
    )
}

export default AboutE