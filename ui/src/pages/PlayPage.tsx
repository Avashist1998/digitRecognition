import React from 'react';
import NavBar from '../components/navbar';

async function test(){
    fetch("http://127.0.0.1:8000").then(Response => {
        Response.json().then(Json => {
            console.log(Json.message)
        });
    })  
}

function undo(){
    console.log("clear the screen")

}

function PlayPage() {
    return (

        <div className="App">
            {/* <nav className='nav-bar'></nav> */}
            <NavBar/>
            <header className="Number Practice">
            </header>

            PlayPage
            <button onClick={test}>Submit</button>
            <button onClick={undo}>Clear</button>

        </div>
    )
}

export default PlayPage;