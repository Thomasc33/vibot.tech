import React              from "react";
import Sidebar            from "../layouts/Sidebar";
import SidebarItemContent from "../components/SidebarItemContent";

const Settings = () => {
  return (
    <div className="wrapper">
      <div className="settings-container">
        <Sidebar location="settings" />
        <SidebarItemContent location="settings" />
      </div>
    </div>
  );
}
export default Settings;