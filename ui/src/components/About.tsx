import React from 'react';
import './About.css'

function About() {
    return (
        <div className='container'>
            <div className='About'>
                <div className='text-center'>
                    <h2>About Us</h2>
                    <div className="row justify-content-around">
                        <p>
                            The goal of the project is to used machine learning technology and help kids write better numbers.
                        </p>
                    </div>
                    {/* <h3>Tech Stack</h3>
                    <div className="row justify-content-around">
                        <div className='text-left'>
                            <ul className='nobull'>
                                <li>
                                    UI:
                                    <a href="https://reactjs.org">
                                        React</a>
                                </li>
                                <li>
                                    API:
                                    <a href="https://fastapi.tiangolo.com/">
                                        FastAPI</a>
                                </li>
                                <li>
                                    ML Model:
                                    <a href="https://scikit-learn.org/">
                                        Scikit-learn</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <h3>Developers</h3>
                    <div className="row justify-content-around">
                        {/* Dev One */}
                        <div className='col-md-2'>
                            <img className="img-fluid rounded mb-2" src="http://placehold.it/800x800" alt=""/>
                            <h4>Huy Luong</h4>
                            <p>
                                Implemented the drawing canvas integration, and page layout
                            </p>
                        </div>
                        {/* Dev Two */}
                        <div className='col-md-2'>
                            <img className="img-fluid rounded mb-2" src="http://placehold.it/800x800" alt=""/>
                            <h4>Abhay Vashist</h4>
                            <p>
                                Trained and implemented the prediction API. Also worked on the web application UI design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
