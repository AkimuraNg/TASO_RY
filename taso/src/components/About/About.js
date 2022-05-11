import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-2" style={{ marginTop: '80px' }}>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                Tampereen sähköopiskelijat (TASO ry) on Tampereen ammattikorkeakoulun sähkö- ja automaatiotekniikan opiskelijoiden ainekerho.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                TASO ry on Tampereen ammattikorkeakoulun (TAMK) opiskelijakunnan (TAMKO) alayhdistys.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ marginTop: "20px", width: "645px", height: "100%" }}>
                <div className="card-body">
                    <p className="card-text">
                        Valtaosa kerhon jäsenistä takaisin sähkö- ja automaatiotekniikan opiskelijoista, mutta TASOn jäseneksi saa liittyä kuka vain TAMKin opiskelijoista, josta johtuen monet eri koulutusohjelmista ovat liittyneet TASOn vahvuuteen.                    </p>
                </div>
            </div>

        </div>
    )
}

export default About