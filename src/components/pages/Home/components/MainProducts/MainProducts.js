import React from 'react'
import Paragraph from './components/Paragraph'
import Product from './components/Product'

export default function MainProducts() {
    return (
        <section>
            <div className="row new-collection">
                <Paragraph />
                <Product />
            </div>
        </section>
    )
}
