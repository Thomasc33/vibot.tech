import React from 'react';
import '../css/login.css'
import ParticlesElement from '../Particles';

const botSettings = require('../settings.json')
const ISDEVENVIRONMENT = botSettings.DevEnvironment;
const CLIENT_ID = botSettings.clientID;
const redirectURL = ISDEVENVIRONMENT ? botSettings.testingRedirectURL : botSettings.redirectURL
const redirectURI = encodeURIComponent(redirectURL)
const loginLink = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectURI}&scope=identify`



const LoginPage = () => {
    return (
        <div className='App'>
            <ParticlesElement />
            <div id="container">
                <div id="inviteContainer">
                    <div className="logoContainer">
                        <img className="logo" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" alt='logo' />
                        <img className="text" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg/800px-Discord_Color_Text_Logo_%282015-2021%29.svg.png" alt='discord txt' />
                    </div>
                    <div className="acceptContainer">
                        <form>
                            <h1>WELCOME BACK!</h1>
                            <div className="formContainer">
                                <div className="formDiv">
                                    <a className="acceptBtn" href={loginLink}>Login with Discord</a>
                                    <span className="register">Need an account?
                                        <a href="https://www.discord.com/register" rel="noopener noreferrer">Register</a>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;