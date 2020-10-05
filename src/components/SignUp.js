import React,{useState,useEffect} from 'react';
import SoccerPlayer from './assets/soccerPlayer.png';
import fire from './FirebaseConfig/Firebase';
import {Route,Link} from 'react-router-dom';
import Home from './Home';

function SignUp() {
    let [userDetails,setUserDetails] = useState(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        authListener();
    },[]);

    const authListener = () => {

        fire.auth().onAuthStateChanged((user) => {

            if(user) {
                setUserDetails(user);
            }
            else {
                setUserDetails(null);
            }
        }) 
    };
    
    const handleUserNameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
        {userDetails ? <Route path='/signup/home' exact component={Home}/> :
        <div className="signUpPage">
            <div className="soccer"><img className="soccerImg" src={SoccerPlayer} alt='footballer'/></div>
            <form className="signUpForm">
                <div className="metaDataSignUp">Create Account</div>
                <input 
                onChange={handleUserNameChange}
                placeholder="User Name"/><br/>
                <input 
                onChange={handlePasswordChange}
                placeholder="Password"/><br/>
                <button onClick={signup}>Sign Up</button>   
            </form>
        </div>
        }
        </>
    )
}

export default SignUp
