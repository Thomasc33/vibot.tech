import Tabs from "../../layouts/Tabs";
import { useSelector } from "react-redux";

const TRLexample = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>TRL/Examples</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "voice",
                        key: "vc",
                        link: "/voicechat",
                        detail: ".",
                        content: "stuff backend-command",
                    },
                    {
                        id: 1,
                        title: "VCLESS",
                        key: "vcless",
                        link: "/voiceless",
                        detail: ".",
                        content: "stuff backend-command",
                    },

                ]}
            />
        </div>
    );
}

export default TRLexample;