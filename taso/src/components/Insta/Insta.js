import React from 'react'
import './Insta.css'
import data from './instagram.json'

const Insta = ({ slides }) => {

    return (
        <div className="container">
            <div className="postView1">
                <div className="row">
                    <div className="col-12">
                        <div className='card-group'>
                            {data.map(insta => {
                                return (
                                    <div className="cardIns" key={insta.id}>
                                        <div className="imgIns">
                                            <img src={insta.image} alt='Instagram post' className="postImg" style={{ width: 250, height: 250 }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="postView2">
                <div className="row">
                    <div className="col-12">
                        <div className='card-group-2'>
                            {data.map(insta => {
                                return (
                                    <div className="cardIns" key={insta.id}>
                                        <div className="imgIns">
                                            <img src={insta.image} alt='Instagram post' style={{ width: 150, height: 150 }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Insta