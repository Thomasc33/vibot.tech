import VibotBrand from "../../components/VibotBrand";
import Navmenu    from "./Navmenu";
import React      from "react";
import UserNavDropDown    from "../UserNavDropDown";

const Header = () => {
    return (
        <div className="flex header-container">
            <VibotBrand />
            <Navmenu />
            <UserNavDropDown/>
        </div>
    );
}
export default Header;
