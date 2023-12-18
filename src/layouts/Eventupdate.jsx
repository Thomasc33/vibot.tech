import { useSelector } from "react-redux";

const Eventupdate = () => {
    const darkMode    = useSelector(state => state.toggleDarkMode);
    const headerStyle = `header-1 event ${!darkMode ? "light-footer-header"     : "header-style-dark"}`;
    const titleStyle  = `hosting-title  ${!darkMode ? "light-footer-header"           : "vibot-style"}`;
    const dungeonList = `font-semibold  ${!darkMode ? "dungeon-light-theme"    : "dungeon-dark-theme"}`;
    const arrowStyle  = `font-semibold  ${!darkMode ? "accent-color"          : "accent-color"}`;
    const button      = `learnmore-btn  ${!darkMode ? "light-btn"             : "btn-dark"}`;
    
    return (
        <div id="event">
            <div className={headerStyle}> <h1> ROTMG EVENTS </h1></div>
            <div className="event-container">
                
                <div className="current-dungeons">
                    <h1>
                        <p    className={titleStyle}>Hosted </p>
                        <span className={titleStyle}>Dungeons :</span>
                    </h1>

                    <ul className="dungeon-li">
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Fungal Cavern</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Realm Clearing</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Sulfurous Wetlands</a></li>
                        
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Ice Tomb</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Toxic Sew</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Steamworks</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Sprite</a></li>
                    
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Third Dimension</a></li>
                        <li id="arrow-icon" className={arrowStyle}>→<a href="#" rel="noopener noreferrer" className={dungeonList}> Santa</a></li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <img id="calander-img" src="calendar.png"></img>
                    <div className="event-btn">
                        <button className={button}>
                            <a href="https://discord.com/channels/343704644712923138/343940188386623488" rel="noopener noreferrer">ROTMG NEWS</a>
                        </button>
                        <button className={button}>
                            <a href="https://www.realmeye.com/wiki/battlepass" rel="noopener noreferrer">BATTLEPASS</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Eventupdate;