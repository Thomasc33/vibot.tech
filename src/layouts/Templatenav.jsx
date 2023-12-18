import showSidebarContent      from "../actions/sidebar";
import VibotBrand              from "../components/VibotBrand";
import { TemplateItems }       from "../components/TemplateItems";
import { useDispatch }         from "react-redux";
import { useState }            from "react";

const Templatenav = () => {
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(0);

    const togglePage = (index) => {
        setToggleState(index);
        dispatch(showSidebarContent(index));
    };

    return (
        <div>
            <div className="sidebar-container">
            <VibotBrand />
                <div className="sidebar-background"> {TemplateItems.map(item => {
                    return (
                        <div className={toggleState === item.id ? "sidebar-item active-sidebar" : "sidebar-item"}
                            onClick={() => togglePage(item.id)}>{item.name}
                        </div>
                    )
                })}
                </div>
            </div>

        </div>

    )
}
export default Templatenav;

