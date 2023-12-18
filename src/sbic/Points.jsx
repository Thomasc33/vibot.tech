import Tabs from "../layouts/Tabs";
import { useSelector } from "react-redux";

const Points = () => {
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    return (
        <div className={`${theme}sbic-theme`}>
            <h1 className={`${theme}sidebar-header`}>Points Label</h1>

            <Tabs 
                tabItems={[
                    {
                        id: 0,
                        title: "Value",
                        key: "points-value",
                        link: "/points-value",
                        detail: "Modify how many points a user gets and needs to spends on a perk.",
                        content: "points-value stuff ",
                    },
                    {
                        id: 1,
                        title: "Quota",
                        key: "points-quota",
                        link: "/points-quota",
                        detail: "Modify the points that staff member get for activity.",
                        content: "2 points-quota",
                    },
                ]}
            />
        </div>
    );
}

export default Points;
