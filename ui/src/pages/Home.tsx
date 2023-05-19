import React, { useState } from 'react';
// import './Home.css';

import About from "../components/About";


function Home() {
    return (
        <div className="bg-background">
            <div className="home-page-content">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-7">
                            <img className="img-fluid rounded mb-2" height="400" width="400" src="https://cdn.rawgit.com/hardmaru/cppn-gan-vae-tensorflow/master/examples/output_sinusoid.gif" alt=""/>
                        </div>
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">AI Powered Digit Master</h1>
                            <h4>
                                Learn to write beautiful numbers using Digit Master
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-around'>
                    <a className="no-underline" href="/play">
                        <h2 className="bg-sky-950 hover:bg-sky-600 m-5 p-2 rounded text-5xl text-white">Play</h2>
                    </a>
                </div>
                <div className='about-content'>
                    <About/>
                </div>
            </div>
        </div>

    );
}

export default Home;

