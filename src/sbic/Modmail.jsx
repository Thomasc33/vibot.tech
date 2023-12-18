import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Modmail = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Modmail Label</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Modmail",
                        key: "tab-role",
                        link: "/trole",
                        detail: "Features can be enabled/disabled for modmail.",
                        content: "1 this is for the Role stuff",
                    },
                ]}
            />
        </div>
    );
}

export default Modmail;

