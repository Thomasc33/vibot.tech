import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";
const Backend = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Backend Label</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Backend",
                        key: "Backend",
                        link: "/Backend",
                        detail: "Available features that can be enabled/disabled.",
                        content: "stuff backend-command",
                    },
                ]}
            />
        </div>
    );
}

export default Backend;