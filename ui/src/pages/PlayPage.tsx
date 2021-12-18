import React, {useState} from 'react';
import NavBar from '../components/navbar';

var number:number = 1
var score:number  = 0.29



function PlayPage() {

    const [number, SetNumber] = useState(0);
    const [score, SetScore] = useState(0.99);


    async function test(){
        let data = {"image":"23"}
        fetch("http://127.0.0.1:8000/predict/?" + new URLSearchParams(data)).then(Response => {
            Response.json().then(Json => {
                console.log(Json.data);
                SetNumber(Json.data.classification)
                SetScore(Json.data.score)
            });
        })  
    }
    
    function undo(){
        console.log("clear the screen")
        SetNumber(0)
        SetScore(0.99)
    }

    return (

        <div className="App">
            {/* <nav className='nav-bar'></nav> */}
            <NavBar/>
            <header className="Number Practice">
            </header>
            <button onClick={test}>Submit</button>
            
            <button onClick={undo}>Clear</button>
            <p>Your number is : {number}</p>
            <p>The score given by model {score}</p>
        </div>
    )
}

export default PlayPage;