import React,{useState} from 'react';
import Soccer from './assets/soccerVertical.jpg';
import SoccerPlayer from './assets/soccerPlayer.png';
import fire from './FirebaseConfig/Firebase'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [register,setRegister] = useState(false);

    const handleUserNameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = (e) => {
        
        setRegister(!register);
    };

    let login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
            
        }).catch((error) => {
            console.log(error);
        });
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
        {
        register ?
        <form className="signUpPage">    
            <div className="soccer">
            <img className="soccerImg" src={SoccerPlayer} alt='footballer'/>
            </div>
            <div className="signUpForm">
                <div className="metaDataSignUp">Create Account</div>
                <div className="icon">
                    <img className="userIcon" 
                    src="https://expatjobs.io/wp-content/uploads/2018/09/user.png"
                    alt='user icon'/>
                </div><br/>
                <input type="text-box"
                    className="username"
                    name = 'email'
                    value={email}
                    onChange={handleUserNameChange}
                    placeholder="Username" /><br />
                <input type="text-box"
                    className="password"
                    name='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password" /><br />  
                <button type="submit" 
                className="logInButton"
                onClick={signup}>Sign Up</button> <br />
                <button onClick={handleRegister}>Back to Login</button>
            </div>
        </form>
        :
        <form className="logIn">    
            <div className="soccer">
            <img src={Soccer} className="soccerImg" alt='football'/>
            </div>
            <div className="userLogin">
                <div className="metaData">Sign in</div>
                <div className="icon">
                    <img className="userIcon" 
                    src="https://expatjobs.io/wp-content/uploads/2018/09/user.png"
                    alt='user icon'/>
                </div><br/>
                <input type="text-box"
                    className="username"
                    name = 'email'
                    value={email}
                    onChange={handleUserNameChange}
                    placeholder="Username" /><br />
                <input type="text-box"
                    className="password"
                    name='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password" /><br />  
                <button type="submit" 
                className="logInButton"
                onClick={login}>Log In</button> <br />
                <p>Don't have an account?Click below to  Register</p>
                <button 
                onClick={handleRegister}
                className='signUpButton'>
                    Register Now
                </button>
            </div>
        </form>
        }
        </>
    )
}

export default Login