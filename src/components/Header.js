import React from 'react';
import img from '../images/eatma.png';
import Navbar from './navbar';
const Header = () => {
    return (
        <section style={{ backgroundColor: '#B1D4E0' }}>
            <header className="header">
                <img src={img} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 210, height: 220 }} />
                <h1>Eat.ma</h1>
                <h2>Recherche facile et efficace pour que votre restaurants soit prés de vous </h2>



            </header>
            <div>
                <Navbar></Navbar>
            </div>

            <br />
        </section>
    );
}

export default Header;