import React           from "react";
import { useSelector } from "react-redux";

const Vibotbio = () => {
    const darkMode    = useSelector(state => state.toggleDarkMode);

    const textStyle   = `text-default font-semibold ${!darkMode ? "light-text"    : "dark-text"}`;
    const headerStyle = `header-1                   ${!darkMode ? "light-footer-header" : "header-style-dark"}`;
    const vibotStyle  = `header-1                   ${!darkMode ? "light-footer-header"   : "vibot-style"}`;
    const vitechStyle = `vitech-bio font-semibold   ${!darkMode ? "light-text"    : "dark-text"}`;
    const button      = `learnmore-btn              ${!darkMode ? "light-btn"     : "learnmore-btn"}`;
    
    return (
        <>
            <div className="vibot-intro">
                <h1 className={headerStyle}> Vibot Engineering </h1>
                <p className={textStyle}>
                    The Vibio tech team is a talented group of engineers
                    who dedicate <br />time towards creating
                    immersive and engaging technology for our diverse communities.
                    <br /> Happy fucking gaming, grasstouchers.
                </p>
            </div>
            {/* ----------------------------------------------------------------------------- */}
            <div className="vibot-container">
                <img src="temp-example.png" className="vibot-img"></img>

                <div className="vitech-container">
                    <ul className="flex tool-container">
                        <li className="tool-item"><img src="mongodb.png" id="tool-icon"></img><p className="gray-gradient">mongoDB</p></li>
                        <li className="tool-item"><img src="js.png "     id="tool-icon"></img><p className="gray-gradient">JS</p></li>
                        <li className="tool-item"><img src="docker.png"  id="tool-icon"></img><p className="gray-gradient">docker.</p></li>
                    </ul>

                    <div>
                        <img src="viboticon.png" className="rounded-full h-14 mr-2 -mt-6 inline-flex" alt="Vibot tech team logo rounded for the footer" />
                        <span className={vibotStyle}
                            style={{fontSize: '38px' }}>VITECH</span>
                        <p className={vitechStyle}>
                            Vibot configuration's purpose is to make your flow of life, gaming, and happiness
                            feel native and easy. We aspire to optimize, and revent new ideas that suit our community. That's right, we listen.
                            So buckle up forehead kisses because we are committed to developing creative and interactive applications that
                            mantains unity over 60000+ members. Now that's sexy.
                        </p>
                        <button className={button}>
                            <a href="https://vibot.tech/" rel="noopener noreferrer">Website</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Vibotbio;