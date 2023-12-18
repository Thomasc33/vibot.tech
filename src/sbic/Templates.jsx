import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Templates = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Templates Label</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Templates",
                        key: "Templates",
                        link: "/Templates",
                        detail: "Templates details",
                        content: "stuff for the Templates content",
                    },
                ]}
            />
        </div>
    );
}

export default Templates;