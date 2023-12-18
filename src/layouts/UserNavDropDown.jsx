import ToggleModes           from "../components/ToggleModes";
import { DropDownMenuItems } from "../components/items/DropDownMenuItems"
import React, { useEffect, useState }   from "react";
import { useSelector }       from "react-redux";
import { Link }              from "react-router-dom";

const UserNavDropDown = ({ setDarkMode }) => {
    const darkMode         = useSelector(state => state.toggleDarkMode);
    const [open, setOpen]  = useState(false);
    const usernameStyle    = `underline-light font-semibold ${!darkMode ? "light-text" : "link-underline dark-text"}`;
    const menuItemStyle    = `menu-item                     ${!darkMode ? "menu-light" : "dark-menu"}`;
    const menuContentStyle = `menu-content                  ${!darkMode ? "bg-menu-light" : "bg-menu-dark"}`;

    const [ username, setUsername ] = useState(null);

    useEffect(() => { 
        const discordAuth = JSON.parse(localStorage.getItem("discordAuth"));
        if (discordAuth && !username) {
            setUsername(discordAuth["username"]);
        }
    }, [username]);

    return (
        <div>
            <div className="flex">
                <ToggleModes
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                /> 
                <div className="drop-down-container ">
                    <button className="drop-down-btn" onClick={() => setOpen(!open)}>
                        <text className={usernameStyle}>{ username }</text>
                    </button>

                    <div className="menu-container">
                        {open ? (
                            <div className={menuContentStyle}>
                                {DropDownMenuItems.map(item => {
                                    return (<Link to={item.link}>
                                        <div className={menuItemStyle}>{item.name}</div></Link>)
                                })}
                            </div>
                        ) : null}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserNavDropDown;

