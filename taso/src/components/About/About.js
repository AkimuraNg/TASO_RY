import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="container_fluid text-dark">
            <div className="row">
                <div className='about'>
                    <h1> About us</h1>
                    <div className="col-lg-6">
                        <div className="card-group">
                            <div class="card" style={{ width: '18rem', marginLeft: '60px' }}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" style={{ width: '18rem', marginLeft: '60px' }}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div class="card" style={{ width: '100%', marginLeft: '60px' , marginTop:'30px'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About