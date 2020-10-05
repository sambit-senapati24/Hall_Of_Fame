import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

function PlayerProfile(props) {
    // if(!props.userDetails) {
    //    console.log("Redirecting");
        // return <Redirect to='/'/>
    //}
    const [playerDetails, setPlayerDetails] = useState(null);
    console.log("Hello");

    useEffect(() => {
        fetch("https://api-football-v1.p.rapidapi.com/v2/players/search/messi", {
	            "method": "GET",
	            "headers": {
		        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		        "x-rapidapi-key": "21a33bf69fmsh0843f3125c268c7p1fe37djsn9836dd2ddb63"
	    }
        })
            .then(async response =>  {
                let data = await response.json()
                setPlayerDetails(data);
            })
            .catch(err => {
	            console.log(err);
            });
    }, [])
    return (
        <div>
            <h1>Known As :</h1>
            <span>{playerDetails ? 
            <h1>{playerDetails.api.results}</h1> 
            : 
            <h1>NULL</h1>
            }</span><br/>
            First Name : 
            <span></span><br/>
            Last Name :
            <span></span><br/>
            Date Of Birth :
            <span></span><br/>
            Age :
            <span></span><br/>
            Height :
            <span></span><br/>
            Weight :
            <span></span><br/>
            Country Of Birth :
            <span></span><br/>
            Nationality :
            <span></span><br/>
            Football Position: 
            <span></span><br/>
        </div>
    )
}

export default PlayerProfile;
