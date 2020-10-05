import React from 'react';
import { Link } from 'react-router-dom';
import messi from './assets/Messi04.jpg';
function Messi() {
    return (
        <>
                <div className="tile">
                    <img className='playerPic' src={messi} />
                    <div className='playerName'>
                        <h1>Lionel Messi</h1>
                    </div>
                </div>
        </>
    )
}

export default Messi;