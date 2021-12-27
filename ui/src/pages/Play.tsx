import './Play.css'
import React, {useState} from 'react';
import NumberCard from '../components/NumberCard';

const PlayPage = () => {   


    return (
        <div className="Play">
            <div className='text-center'>
                <div className='container-fluid-center'>
                    <div className = 'row mt-3 justify-content-around'>
                        <div className='col-md-3'>
                            <NumberCard number='0'/>
                            <NumberCard number='3'/>
                            <NumberCard number='6'/>
                        </div>
                        <div className='col-md-3'>
                            <NumberCard number='1'/>
                            <NumberCard number='4'/>
                            <NumberCard number='7'/>
                            <NumberCard number='9'/>
                        </div>
                        <div className='col-md-3' >
                            <NumberCard number='2'/>
                            <NumberCard number='5'/>
                            <NumberCard number='8'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default PlayPage;
//https://github.com/rleija703/react-examples/blob/master/useref-with-typescript/src/App.tsx
//https://linguinecode.com/post/how-to-use-react-useref-with-typescript