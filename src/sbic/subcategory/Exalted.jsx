import Tabs from "../../layouts/Tabs";
import { useSelector } from "react-redux";

const Exalted = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Exalted</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "voice",
                        key: "vc",
                        link: "/voicechat",
                        detail: ".",
                        content: "",
                    },
                    {
                        id: "VCLESS",
                        title: "vcless",
                        key: "vcless",
                        link: "/vcless",
                        detail: ".",
                        content: "",
                    },
                ]}
            />
        </div>
    );
}

export default Exalted;