import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Guide = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Guides Label</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Image",
                        key: "guide-image",
                        link: "guide-image",
                        detail: "Load the image you want to load per respective section.",
                        content: "1 guide-image",
                    },
                    {
                        id: 1,
                        title: "Inform",
                        key: "guide-inform",
                        link: "guide-inform",
                        detail: "Loads a message for the same member to see when the section is triggered.",
                        content: "2 guide-inform",
                    },
                ]}
            />
        </div>
    );
}

export default Guide;
