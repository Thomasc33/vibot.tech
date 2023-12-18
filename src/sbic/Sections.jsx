import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Sections = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Sections Label</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Sections",
                        key: "Sections",
                        link: "/Sections",
                        detail: "Sections details",
                        content: "stuff for the Sections content",
                    },
                ]}
            />
        </div>
    );
}

export default Sections;