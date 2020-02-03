import React from 'react'
import Header from '../../globalComponents/Header/Header'
import MainProducts from './components/MainProducts/MainProducts'
import Subscribe from './components/Subscribe/Subscribe'
import Instagram from './components/Instagram/Instagram'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Footer from '../../globalComponents/Footer/Footer'
 

export default function Home() {
    return (
        <div className="container">
            <Header/>
            <MainProducts />
            <Subscribe />
            <Instagram />
            <Banner />
            <About />
            <Footer />
        </div>
    )
}
