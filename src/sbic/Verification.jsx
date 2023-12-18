import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Verification = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Permission</h1>
            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Raider",
                        key: "verify-auto",
                        link: "/verify-auto",
                        detail: "Requirements needed for a user to be automatically verified as raider.",
                        content: "1 verify-auto",
                    },
                    {
                        id: 1,
                        title: "Veteran",
                        key: "verify-vet",
                        link: "/verify-vet",
                        detail: "Requirements needed for a raider to be automatically verified as veteran.",
                        content: "2 verify-vet",
                    },
                ]}
            />
        </div>
    );
}

export default Verification;
