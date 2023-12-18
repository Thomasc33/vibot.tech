import { useSelector } from "react-redux";

const Logout = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Logout</h1>
        </div>
    );
}

export default Logout;
