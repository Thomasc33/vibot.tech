import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Permission = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Permission</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Role",
                        key: "permission-role",
                        link: "/permission-role",
                        detail: "Configure the minimum role required to see warnings, suspensions and mutes when running the punishment command.",
                        content: "Role stuff",
                    },
                    {
                        id: 1,
                        title: "List",
                        key: "permission-list",
                        link: "/permission-list",
                        detail: "Lists of strings",
                        content: "stuff permission-list",
                    },
                ]}
            />
        </div>
    );
}

export default Permission;
