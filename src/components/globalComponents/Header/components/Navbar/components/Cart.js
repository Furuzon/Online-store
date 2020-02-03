import React from 'react'

export default function Cart() {
    return (
        <div id="no-padding" className="col-6 col-md-4 cart-click wow fadeInRight d-flex justify-content-end" data-wow-duration="2s">
            <p className="cart">cart</p>
            <i className="fa fa-shopping-cart ml-2"></i>
            <div className="cart-list"></div>
        </div>
    )
}
