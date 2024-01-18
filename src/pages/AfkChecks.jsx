import React, { useEffect, useState }              from "react";
import Sidebar            from "../layouts/Sidebar";
import SidebarItemContent from "../components/SidebarItemContent";

import {get}                from "../utils.js";

import { useSelector } from "react-redux";

const AfkChecks = () => {
    
    const [afkChecks, setAfkChecks] = useState([])
    const guildID = useSelector(state => state.guildIdx);

    useEffect(() => {

        get("/afkchecks").then((response) => {

            var dataArray = [];
            for (var key in response) {
                dataArray.push(response[key]); 
            }
            setAfkChecks(dataArray);
        })

    }, [guildID])


  return (
    <div className="wrapper">
      <div className="settings-container flex-col">
        
        {afkChecks.map((afkCheck) => {

            return (
                <div className="settings-item" key = "">
                    <div className="">
                        {afkCheck.afkTemplateName}
                    </div>
                    <div className="">
                        {afkCheck.raidId}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
}
export default AfkChecks;