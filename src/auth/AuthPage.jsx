import axios                   from "axios";
import { AuthErrorPage }       from "../auth/AuthErrorPage";
import { useEffect, useState } from "react";
import { useNavigate }         from "react-router-dom";


const queryString = require('querystring')
const botSettings = require('../settings.json')
const ISDEVENVIRONMENT = botSettings.DevEnvironment;
const CLIENT_ID = botSettings.clientID;
const CLIENT_SECRET = botSettings.clientSecret;
const redirectURL = ISDEVENVIRONMENT ? botSettings.testingRedirectURL : botSettings.redirectURL;

export const AuthPage = () => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkCode();
    })

    const checkCode = async () => {
        let code = window.location.search.substring(6, window.location.search.length)

        if (code !== "") {
            const result = await axios.post('https://discord.com/api/v8/oauth2/token', queryString.stringify({
                'client_id': CLIENT_ID,
                'client_secret': CLIENT_SECRET,
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': redirectURL,
                'scope': 'identify email connections'
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).catch(er => { console.warn(er) })

            if (!result) return
            if (result.status !== 200) return

            localStorage.setItem('discordAuth', JSON.stringify({
                "accessToken": result.data.access_token,
                "refreshToken": result.data.refresh_token,
                "expiresIn": result.data.expires_in * 1000 + Date.now(),
                "tokenType": result.data.token_type,
            }))

            setToken(result.data.access_token);
            setLoading(false);
        }
    }

    const navigate = useNavigate();

    //check code format
    if (!window.location.search.startsWith('?code=') || window.location.search.length !== 36) return <AuthErrorPage />

    if (loading) return <div/>
    if (!token) return <AuthErrorPage />

    navigate("/")
    navigate(0)
}