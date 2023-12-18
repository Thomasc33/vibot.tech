import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Raiding = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Rading Label</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Raiding",
                        key: "raiding",
                        link: "/raiding",
                        detail: "Channel ID's/Names tied to afk templates.",
                        content: "raiding",
                    },
                    {
                        id: 1,
                        title: "Requirements",
                        key: "raiding-req",
                        link: "/raiding-req",
                        detail: "Minimum requirment gear needed for raids.",
                        content: "raiding 1",
                    },
                    {
                        id: 2,
                        title: "Numerical",
                        key: "raiding-numerical",
                        link: "/raiding-numerical",
                        detail: "Respective numberical settings.",
                        content: "raiding 2",
                    },
                    {
                        id: 3,
                        title: "Supporter",
                        key: "raiding-supporter",
                        link: "raiding-supporter",
                        detail: "Supporter Role tied to the AFK check.",
                        content: "raiding 3",
                    },
                ]}
            />
        </div>
    );
}

export default Raiding;
