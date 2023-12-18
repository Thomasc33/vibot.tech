import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VibotBrand = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const vibotStyle = `bg-to-text vibot-brand ${!darkMode ? "light-brand " : "dark-brand"}`;
    const spanStyle  = `vibot-brand ${!darkMode ? "accent-color" : "accent-color"}`;
    
    return (
        <>
            <div className="inline-flex">
                <h2><Link to="/">
                    <img
                        src="viboticon.png"
                        alt="Vibot team icon at the top left of the header"
                        className="rounded-full h-12 w-12 vibot-icon" /></Link>
                </h2>
                <p className="mt-8">
                    <p className={vibotStyle}> vibot</p>
                    <p className={spanStyle}>tech</p>
                </p>
               
            </div>
        </>
    );
}

export default VibotBrand;
