import React from 'react'
import Footer from '../../globalComponents/Footer/Footer'
import Header from '../../globalComponents/Header/Header'
import Main from './components/Main'
import Recomendation from './components/Recomendation'

export default function Product() {
    return (
        <div className="container">
            <Header/>
            <Main />
            <Recomendation />
            <Footer />
        </div>
    )
}
