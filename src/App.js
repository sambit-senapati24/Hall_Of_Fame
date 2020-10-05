import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import PlayerProfile from './components/PlayerProfile'
import fire from './components/FirebaseConfig/Firebase';
import { Route, Redirect, Switch } from 'react-router-dom';
import Error from './components/Error';

function App() {

  let [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {

    fire.auth().onAuthStateChanged((user) => {

      if (user) {
        setUserDetails(user);

      }
      else {
        setUserDetails(null);
      }
    })
  };


  return (
    <>
      <Switch>
        {userDetails ? <><Redirect to='/home' /><Route path='/home' exact component={() => <Home userDetails={userDetails} />} /></> : <Route path='/' exact component={Login} />}
        {!userDetails && <Route path='/home' exact component={() => <Home userDetails={userDetails} />} />}
        <Route path='/home/:profile' exact component={() => {
        return <PlayerProfile userDetails={userDetails} />} }/>
        <Route exact component={Error} />
      </Switch>
    </>
  );
}

export default App;
