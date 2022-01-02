import React from 'react';
import './navbar.css'


const NumberCard = ({number = '0'}) =>{
    return (
        <div id="numberCard" className="card mx-auto">
            <a href={"play/" + number}> 
            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h4 className="card-title"> {number} </h4>
                    {/* <a href={"play/" + number} className="btn-primary">Play</a> */}
                </div>
            </a>
        </div>
        
    )
};




export default NumberCard;