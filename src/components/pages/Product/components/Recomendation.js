import React from 'react'

export default function Recomendation() {
    return (
        <section>
            <div className="row new-collection">
                <div className="col-md-12">
                    <h2>Recomanded only for you</h2>
                </div>
                <div className="col-md-4 item wow zoomIn" data-wow-duration="2s">
                    <div className="items">
                        <img alt="img" src="img/1.png"/>
                    </div>
                    <div className="item-bottom pt-3 wow rollIn">
                        <h6 className="mr-5">Nike Stefan Janoski</h6>
                        <p>$99.9</p>
                    </div>
                </div>
                <div className="col-md-4 item wow zoomIn" data-wow-duration="2s">
                    <div className="items">
                        <img alt="img" src="img/2.png"/>
                    </div>
                    <div className="item-bottom pt-3 wow jackInTheBox">
                        <h6 className="mr-5">Tennis ClassNameic Ultra</h6>
                        <p>$99.9</p>
                    </div>
                </div>
                <div className="col-md-4 item wow zoomIn" data-wow-duration="2s">
                    <div className="items">
                        <img alt="img" src="img/3.png"/>
                    </div>
                    <div className="item-bottom pt-3 wow rollIn">
                        <h6 className="mr-5">Nike Roshe Cortez</h6>
                        <p>$99</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
