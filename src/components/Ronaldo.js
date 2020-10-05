import React from 'react'
import ronaldo from './assets/Ronaldo02.jpg';
function Ronaldo() {
    return (
        <div className="tile">
            <img className='playerPic' src={ronaldo} />
            <div className='playerName'>
                <h1>Cristiano Ronaldo</h1>
            </div>
        </div>
    )
}

export default Ronaldo;