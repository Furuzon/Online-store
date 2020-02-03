import React from 'react'

export default function Product() {
    return (
        <div className="row">
            <div className="col-md-12">
                <hr/>
            </div>
            <div className="col-md-3 cart-img wow zoomIn" data-wow-duration="2s">
                <img src="img/4.png" alt="img" />
            </div>
            <div className="col-md-3 pt-2">
                <h3>Nike like</h3>
                <ul className="list-unstyled d-flex cart-product-option">
                    <li>Black</li>
                    <li>Medium</li>
                </ul>
            </div>
            <div className="col-md-2 pt-3">
                <h5 className="c-grey">$140.00</h5>
            </div>
            <div className="col-6 col-md-2 pt-2">
                <div className="qty d-flex">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                </div>
            </div>
            <div className="col-6 col-md-2 pt-2">
                <i className="fa fa-trash pt-1 c-grey"></i>
            </div>
        </div>
    )
}
