import React, { useState } from "react";
import DrawingCanvas from "./DrawingCanvas";

const SubPlayPage = ({number_truth = "0"}) => {   
    const [canvasURI, setCanvasURI] = useState("")  
    const [number_result, SetNumber] = useState(0);
    const [score_result, SetScore] = useState(0.99);

    const test = () => {
        let data = {"image":"23"}
        fetch("http://127.0.0.1:8000/predict/?" + new URLSearchParams(data)).then(Response => {
            Response.json().then(Json => {
                console.log(Json.data);
                SetNumber(Json.data.classification)
                SetScore(Json.data.score)
            });
        })  
    }
    
    const undo = () => {
        console.log("clear the screen")
        SetNumber(0)
        SetScore(0.99)
    }


    return (
        <div className="container"> 
            <div className="text-center">
            <h2> Try to make a {number_truth}</h2>
            </div>
            <DrawingCanvas setImageURI={setCanvasURI}/>
                <img className="signature-thumbnail" width="250px" 
                src ={canvasURI} 
                alt="Signature thumbnail"></img>
                <button className="submitButton" onClick={test}>Submit</button>
                <button className="submitButton" onClick={undo}>Clear</button>
                <p>Your number is : {number_result}</p>
                <p>The score given by model {score_result}</p>
        </div>

    )
};

export default SubPlayPage;