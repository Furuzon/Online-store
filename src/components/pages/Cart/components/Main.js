import React from 'react'
import Product from './Product'
import Order from './Order'

export default function Main() {
    return (
        <section className="cart-section">
            <div className="row">
                <div className="col-md-8 cart-main-section">
                    <h1>Cart</h1>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="col-md-4 cart-sidebar pt-3">
                    <Order />
                </div>
            </div>
        </section>
    )
}
