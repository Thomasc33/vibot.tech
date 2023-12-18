import React              from "react";
import Sidebar            from "../layouts/Sidebar";
import SidebarItemContent from "../components/SidebarItemContent";

const Templates = () => {
  return (
    <div className="wrapper">
      <div className="settings-container">
        <Sidebar location="templates" />
        <SidebarItemContent location="templates" />
      </div>
    </div>
  );
}
export default Templates;