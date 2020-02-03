import React from 'react'

export default function Product() {
    return (
        <div className="col-md-4 item wow zoomIn" data-wow-duration="2s">
            <div className="items">
                <img src="img/1.png" alt="1.png" />
            </div>
            <div className="item-bottom pt-3 wow rollIn">
                <h6 className="mr-5">Nike Stefan Janoski</h6>
                <p>$99.9</p>
            </div>
        </div>
    )
}
