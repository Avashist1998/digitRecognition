import React from 'react';
import './App.css';

function About() {
    return (
        <div className='container'>
            <div className='About'>
                <div className='text-center'>
                    <h2>About Us</h2>
                    <p> Describing the goal of the project. </p>
                    <h3>Developers</h3>
                    <div className="row">
                        {/* Dev One */}
                        <div className='col-md-2'>
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="http://placehold.it/400x400"
                                alt=""
                            />
                            <h4>Huy Loung</h4>
                            <p>
                                What was you roal on the team. What was your contribution to the application.
                            </p>
                        </div>
                            {/* Dev Two */}
                        <div className='col-md-2'>
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="http://placehold.it/400x400"
                                alt=""
                            />
                            <h4>Abhay Vashist</h4> 
                            <p>
                                What was you roal on the team. What was your contribution to the application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About;