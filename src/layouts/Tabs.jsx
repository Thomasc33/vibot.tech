import   TabItem    from "../components/TabItem";
import { useState } from "react";
import { useSelector } from "react-redux";
const Tabs = ({ tabItems }) => {
    const darkMode    = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";

    const [toggleState, setToggleState] = useState(0);
    
    const tabItem = tabItems[toggleState]
    const toggleTab = (index) => { setToggleState(index) };


    return (
        <div className={`${theme}tab-main flex flex-col`}>

            <div className={`${theme}tab-theme tab-container`}>
                <div className="inline-flex tab-background"> {tabItems.map(item => {
                    return (
                        <div className={toggleState === item.id ? `${theme}active-tab tab-item` : "tab-item"}
                            onClick={() => toggleTab(item.id)}>{item.title}
                        </div>
                    )
                })}
                </div>
            </div>

            <div className="content-container">
                <TabItem
                    detail={tabItem.detail}
                    content={tabItem.content} />
            </div>
        </div>
    )
}
export default Tabs;