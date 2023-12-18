import { useDispatch, useSelector } from "react-redux"
import toggleDarkMode from "../actions/darkmode";

const ToggleModes = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.toggleDarkMode)

    const setDarkMode = () => { 
        dispatch(toggleDarkMode(!darkMode));
        localStorage.setItem("darkMode", (!darkMode).toString());
    }

    return (
        <div>
            <div onClick={() => { setDarkMode() }} className="cursor-pointer translate-x-6">
                {darkMode ?
                    <img src="MBC2.gif"  alt="light mode option of mbc walking forward and sticking out his hand gif" style={{marginTop: '12px'}} /> :
                    <img src="VOIDS.gif" alt="dark mode option of void minion floating up and down gif"/>}
            </div>        
        </div>
    )
}

export default ToggleModes;