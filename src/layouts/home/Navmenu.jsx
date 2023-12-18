import React           from "react";
import { Link }        from 'react-router-dom';
import { NavItems }    from "../../components/items/NavItems";
import { useSelector } from "react-redux";

const Navmenu = () => {
    const darkMode       = useSelector(state => state.toggleDarkMode);
    const containerStyle = `underline-light font-semibold ${!darkMode ? "light-text" :   "link-underline dark-text"}`;
    const eventStyle     = `underline-light font-semibold ${!darkMode ? "accent-color" : "link-underline accent-color"}`;

    return (
        <div>
            <ul className="lists-container">
                {NavItems.map(navItem => {
                    return <li className={containerStyle}><Link to={navItem.link}>{navItem.name}</Link></li>
                })}
                
                <li className={eventStyle}><a name="eventupdate" href="#event" rel="noopener noreferrer">Event</a></li>
            </ul>
        </div>
    );
}

export default Navmenu;