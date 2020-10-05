import React from 'react';
import { Link } from 'react-router-dom';
import ronaldoError from './assets/ronaldo01.png';


function Error() {
    return (
        <div className='error'>
            <img src={ronaldoError} className='errorImg'/>
            <div>
                <h1>404 Error</h1>
                <Link to='/messi'>Yo</Link>
                <Link to='/'>
                    <button>Back to Login</button>
                </Link>
            </div>

        </div>
    )
}

export default Error
