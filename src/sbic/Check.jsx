import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Check = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Check Label</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Panel",
                        key: "check-panel",
                        link: "/check-panel",
                        detail: "Enable/Disable what vibot will check for when using the check command.",
                        content: "Empty",
                    },
                    {
                        id: 1,
                        title: "Manage",
                        key: "tab-role",
                        link: "/trole",
                        content: "The idea of those panels is specifically for the ;check command I believe. When running ;check to see if there's any inconsistency with the server, those two categories are used to identify if anyone with a role x doesn't have a role y or anyone with a role x should have their role y removed.addingRoleFromUserWithRole && RemoveRoleFromUserWithRole ",
                    },
                    {
                        id: 2,
                        title: "Role",
                        key: "check-role",
                        link: "/check-role",
                        detail: "Configuration roles used to set up the check command.",
                        content: "Empty",
                    },
                    {
                        id: 3,
                        title: "Exceptions",
                        key: "check-exeception",
                        link: "/check-exeception",
                        content: "Empty",
                    },
                    {
                        id: 3,
                        title: "user",
                        key: "check-exeception",
                        link: "/check-exeception",
                        detail: "Users that should not show up when using the check command.",
                        content: "Empty",
                    },
                    {
                        id: 3,
                        title: "roles",
                        key: "check-exeception",
                        link: "/check-exeception",
                        detail: "Roles that should not show up when using the check command.",
                        content: "Empty",
                    },
                ]}
            />
        </div>
    );
}

export default Check;

