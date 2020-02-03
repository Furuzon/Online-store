import React from 'react'

export default function Image() {
    return (
        <div className="row instagram-section-images">
            <div className="col-md-4 wow rollIn" data-wow-duration="3s">
                <div className="ins-img">
                    <img src="img/ins1.jpg" alt="ins1" />
                </div>
            </div>
            <div className="col-md-4 wow rollIn" data-wow-duration="3s">
                <div className="ins-img">
                    <img src="img/ins2.jpg" alt="ins2" />
                </div>
            </div>
            <div className="col-md-4 wow rollIn" data-wow-duration="3s">
                <div className="ins-img">
                    <img src="img/ins3.jpg" alt="ins3" />
                </div>
            </div>
        </div>
    )
}
