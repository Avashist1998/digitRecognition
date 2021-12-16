import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from '../components/navbar';

function HomePage() {
    return (
        <div className="App">
            {/* <nav className='nav-bar'></nav> */}
            <NavBar/>
            <header className="Number Practice">
            </header>
        </div>
    )
}

export default HomePage;