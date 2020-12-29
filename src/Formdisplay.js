import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Greetings from './Greetings';

const Formdisplay = () => {

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loggedin, setLoggedIn] = useState(false);
    const history = useHistory();

    const formsubmit = () => {
        alert("continue to home page");
        history.push('/homepage');
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {

        if (response.name !== undefined) {
            setLoggedIn(true);
            setEmail(response.email)
            setName(response.name)
            console.log(response);
            history.push('/homepage')
        }
        else {
            console.log("error occured");
        }

    }

    const componentClicked = () => {
        console.log("clicked");
    }
    return (
        <>
            <h1>Login</h1>
            <FacebookLogin
                appId="426500945156530"
                autoLoad={true}
                className="icon"
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />

            <GoogleLogin
                //                    clientId="753939964692-39l5tduevuqoolvm156jomu9opg4iv35.apps.googleusercontent.com"
                clientId="97097536568-hvjtpp7orbn7eb9n6lafsek59r14scsv.apps.googleusercontent.com"
                buttonText="Login"
                className="icon"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <form onSubmit={formsubmit} method="post">
                <div className="loginform">
                    <input type="email" name='email' id='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" name='password' id='password' placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit" id="login" >Login</button>
                </div>
            </form>
        </>
    )
}

export default Formdisplay;