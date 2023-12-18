import React from "react";
const TabItem = (props) => {
    const { detail, content } = props;
    
    return (
        <div>
            <div>
                <h2 className="content-header">{ detail } </h2>
                <div className="content">{ content } </div>
            </div>
        </div>
    )
}
export default TabItem;