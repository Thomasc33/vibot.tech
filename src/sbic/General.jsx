import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const General = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>OVERVIEW</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Roles",
                        key: "tab-role",
                        link: "/trole",
                        detail: "Assign roles according to the respective server the bot is on.",
                        content: "1 this is for the Role stuff",
                    },
                    {
                        id: 1,
                        title: "Channels",
                        key: "tab-channel",
                        link: "/tchannel",
                        content: "Assign Channels for the server the bot is on.",
                    },
                    {
                        id: 2,
                        title: "Voice",
                        key: "tab-voice",
                        link: "/tvoice",
                        content: "Assign Voice Chats for the server the bot is on.",
                    },
                    {
                        id: 2,
                        title: "Prefix",
                        key: "tab-voice",
                        link: "/tvoice",
                        content: "Used to set prefix for each new Voice Chat made.",
                    },
                ]}
            />
        </div>
    );
}

export default General;
