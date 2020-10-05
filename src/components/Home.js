import React from 'react'
import fire from './FirebaseConfig/Firebase';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import Ronaldo from './Ronaldo';
import Messi from './Messi';
import Neymar from './Neymar';
import Zidane from './Zidane';
import Iniesta from './Iniesta'
import Beckham from './Beckham';
import Pirlo from './Pirlo';
import Zlatan from './Zlatan';
import Ramos from './Ramos';
import Ronaldinho from './Ronaldinho';
import PlayerProfile from './PlayerProfile';

function Home(props) {

    const logout = () => {
        fire.auth().signOut();
    };
    
    if(!props.userDetails) {
        return <Redirect to='/'/>
    }

    return (
        <>
        <div className='home'>
            <h1>Hall Of Fame</h1><br/>
            <Ronaldo/>
            <Messi/>
            <Neymar/>
            <Zidane/>
            <Iniesta/>
            <Beckham/>
            <Pirlo/>
            <Zlatan/>
            <Ramos/>
            <Ronaldinho/>
            <Link to='/'><button onClick={logout}>Sign Out</button></Link>
        </div>
        </>
    )
}

export default Home
