import React from 'react'
import Menu from './components/Menu'
import Logo from './components/Logo'
import Cart from './components/Cart'

export default function Navbar() {
    return (
        <div className="row d-flex">
            <Menu />
            <Logo />
            <Cart />
        </div>
    )
}
