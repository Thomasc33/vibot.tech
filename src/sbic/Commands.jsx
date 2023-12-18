import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Commands = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Permission</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Command",
                        key: "command-command",
                        link: "/command-command",
                        detail: "Available command options can be enabled/disabled.",
                        content: "stuff permission-command",
                    },
                    {
                        id: 1,
                        title: "Permission",
                        key: "command-permissions",
                        link: "/command-permissions",
                        detail: "Roles allowed to access the respective commands.",
                        content: "stuff permission-command",
                    },
                ]}
            />
        </div>
    );
}

export default Commands;
