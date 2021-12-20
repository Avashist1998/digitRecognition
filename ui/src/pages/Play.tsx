import React, {useState} from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import navBar from "../components/navbar"
import './Play.css'

const PlayPage = () => {   
    const [canvasURI, setCanvasURI] = useState("")   
    const [number, SetNumber] = useState(0);
    const [score, SetScore] = useState(0.99);
        
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
        <div className="Play">
            <div className='container'>
            <DrawingCanvas setImageURI={setCanvasURI}/>
                <img className="signature-thumbnail" width="250px" 
                src ={canvasURI} 
                alt="Signature thumbnail"></img>
                <button className="submitButton" onClick={test}>Submit</button>
                <button className="submitButton" onClick={undo}>Clear</button>
                <p>Your number is : {number}</p>
                <p>The score given by model {score}</p>
            </div>
        </div>
    )
};

export default PlayPage;
//https://github.com/rleija703/react-examples/blob/master/useref-with-typescript/src/App.tsx
//https://linguinecode.com/post/how-to-use-react-useref-with-typescript