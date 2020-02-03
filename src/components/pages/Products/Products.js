import React from 'react'
import Footer from '../../globalComponents/Footer/Footer'
import Header from '../../globalComponents/Header/Header'
import Product from './components/Product'

export default function Products() {
    return (
        <div className="container">
            <Header/>
            <section>
                <div className="row new-collection">
                    <Product />
                </div> 
            </section>
            <Footer />
        </div>
    )
}
