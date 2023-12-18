import showSidebarContent      from "../actions/sidebar";
import VibotBrand              from "../components/VibotBrand";
import { useState }            from "react";
import { SidebarItems }        from "../components/items/SidebarItems";
import { useDispatch, useSelector }  from "react-redux";

const Sidebar = ({ location }) => {

    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.toggleDarkMode);
    const theme = darkMode ? "" : "light-";
    const [ toggleState, setToggleState ] = useState(0);
    const [ subCategoryIdx, setSubcategoryIdx ] = useState(0);

    const togglePage = (index, content, type = "sidebar") => 
    {
        if (type === "sidebar") 
        {
            setToggleState(index);
        } else if (type === "sub-category") {
            setSubcategoryIdx(index);
        }

        dispatch(showSidebarContent(content));
    };

    return (
        <div>
            <div className={`${theme}sidebar-container`}>
            <VibotBrand />
                <div className="sidebar-background"> {SidebarItems[location]["items"].map(item => {
                    return (
                        <div className="sideitem-container">
                            <div onClick={() => togglePage(item.id, item.content)} 
                                 className={toggleState === item.id ? `${theme}sidebar-item ${theme}active-sidebar ` : `${theme}sidebar-item`}>
                                    {item.name}
                            </div>

                            { toggleState === item.id && item.subCategory ? item.subCategory.map((subCategoryItem, subCategoryItemIdx) => {
                                return (
                                    <>
                                        <div onClick={() => togglePage(subCategoryItemIdx, subCategoryItem.content, "sub-category")} 
                                             className={subCategoryIdx === subCategoryItemIdx ? `sub-category ${theme}sub-category-item active-sub` : `sub-category ${theme}sub-category-item`}>
                                                {subCategoryIdx === subCategoryItemIdx ? "> " : null}{subCategoryItem.name}
                                        </div>
                                    </>
                                );
                                }) : null
                            }
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;

