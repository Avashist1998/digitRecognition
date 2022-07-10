import React from 'react';
import abhay_profile_image from "../images/abhay_profile.jpg"

function About() {
    return (
        <div className='container'>
            <div className='About'>
                <div className='text-center'>
                    <h2>About Us</h2>
                    <p> &nbsp; The goal of the project is the help kids improve and test their handwriting using AI. &nbsp; </p>
                    <h3>Developers</h3>
                    <div className="row justify-content-around">
                        {/* Dev One */}
                        <div className='col-md-2'>
                            <img
                                className="img-fluid rounded mb-2"
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBor5lkRyeGo%2Fhqdefault.jpg"
                                alt=""
                            />
                            <h4>Huy Luong</h4>
                            <p>
                                What was you roal on the team. What was your contribution to the application? Something fund
                            </p>
                        </div>
                            {/* Dev Two */}
                        <div className='col-md-2'>
                            <img
                                className="img-fluid rounded mb-2"
                                src={abhay_profile_image}
                                alt="abhay's profile image"
                            />
                            <h4>Abhay Vashist</h4> 
                            <p>
                                Abhay is a passionate about bringing AI tool to user throght modern CS techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About;