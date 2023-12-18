import React    from "react";
import { useSelector } from "react-redux";
import { GuildSliderItems } from "../../components/items/GuildSliderItems";

const Currentguild  = () => {
    const darkMode  = useSelector(state => state.toggleDarkMode);
    const guildInfo = `guild-info font-semibold ${!darkMode ? "light-text" : "dark-text"}`;
    const button    = `learnmore-btn            ${!darkMode ? "light-btn"  : "learnmore-btn"}`;

    const guildIdx = useSelector(state => state.guildIdx);
    
    return (
        <div className="showGuild-container">
            <h1 className="animated-header">
                { GuildSliderItems[guildIdx].name }
                <br></br>Configuration
            </h1>
            <p className={guildInfo}>
                Stuck on where to begin? Don't worry, step-bro..
            </p>
            <button className={button}>
                <a href="https://docs.google.com/document/d/1_5u0-3wmcWqVP1tS8leMnzqjETjyYiLCkjA1yInyZ1Y/edit?usp=sharing" rel="noopener noreferrer">View Doc</a>
            </button>

        </div>
    )
}

export default Currentguild;