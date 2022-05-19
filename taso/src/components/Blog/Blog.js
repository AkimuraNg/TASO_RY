import React from 'react'
import "./Blog.css"
import Image from '../../images/card-image-top.png'

const Blog = () => {
    return (
        <div className="container">
            <div className="blogPost1">
                <div className="row">
                    <div id="carouselBlog" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <div className="card-wrapper" >
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 1</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 2</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 3</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card-wrapper" >
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 4</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 5</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={Image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h5 className="card-title">Card title 6</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBlog" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselBlog" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="blogPost2">
                <div className="row">
                    <div id="carouselBlog" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 1</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 2</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 3</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 4</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 5</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <div className="card">
                                    <img src={Image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{ textAlign: 'center' }}>
                                        <h5 className="card-title">Card title 6</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-indicators" style={{marginTop: 20}}>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselBlog" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog