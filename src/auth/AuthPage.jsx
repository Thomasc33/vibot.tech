import axios from "axios";
import { AuthErrorPage } from "../auth/AuthErrorPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import decryptData from "../api/Decrypt";
import Cookies from 'js-cookie';

const botSettings = require('../settings.json')
const ISDEVENVIRONMENT = botSettings.DevEnvironment;
const API = ISDEVENVIRONMENT ? botSettings.devViBotAPI : botSettings.vibotAPI;

export const AuthPage = () => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkCode();
    })

    const checkCode = async () => {
        let code = window.location.search.substring(6, window.location.search.length)

        if (code !== "") {
            const res = await axios.post(`${API}/auth`, { token: code }).catch(er => { console.warn(er) })

            if (!res) return
            if (res.status !== 200) return

            let res_data = decryptData(res.data)
            let expiresAt = new Date(res_data.expires_in)
            Cookies.set('auth', res.data, { expires: expiresAt })

            setLoading(true);
            setToken(res_data.access_token);
        }
    }

    const navigate = useNavigate();

    //check code format
    if (!window.location.search.startsWith('?code=') || window.location.search.length !== 36) return <AuthErrorPage />

    if (loading) return <div />
    if (!token) return <AuthErrorPage />

    navigate("/")
    navigate(0)
}