import React, {useState} from 'react';

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

        <div className="Play">
            <div className='container'>

                <button className="submitButton" onClick={test}>Submit</button>
                <button className="submitButton" onClick={undo}>Clear</button>
                <p>Your number is : {number}</p>
                <p>The score given by model {score}</p>

            </div>



        </div>
    )
}

export default PlayPage;