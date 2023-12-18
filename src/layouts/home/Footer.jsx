import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    const darkMode    = useSelector(state => state.toggleDarkMode);
    const theme       = darkMode ? "" : "light-";

    const titleStyle  = `footer-title bg-to-text  ${!darkMode ? "light-footer-header"  : "vibot-style"}`;
    const itemStyle   = `footer-item   ${!darkMode ? "light-mode"           : "dark-item"}`;
    const underline   = `font-semibold ${!darkMode ? "underline-light"      : "link-underline"}`;

    return (
        <div className={`${theme}footer-style footer-theme-container`}>
            <div className="flex footer-container">
                <div className="footer-theme">
                    <h2 className={titleStyle}>Resources</h2>
                    <ul className="footer-ul font-medium">
                        <li className={itemStyle}><a href="https://github.com/ViBotTeam" rel="noopener noreferrer" className={underline}>Team</a></li>
                        <li className={itemStyle}><a href="https://github.com/ViBotTeam/vibot-config" rel="noopener noreferrer" className={underline}>Build</a></li>
                        <li className={itemStyle}><a href="https://github.com/ViBotTeam/ViBot-Stonks" rel="noopener noreferrer" className={underline}>Sources</a></li>
                        <li className={itemStyle}><a href="https://docs.google.com/forms/d/e/1FAIpQLSeRaIBsCqdtJxz2dU7pcFIAv35YA30e4MaT3CDS1YGRQpOzeQ/viewform" rel="noopener noreferrer" className={underline}>Apply</a></li>
                    </ul>
                </div>

                <div className="footer-theme">
                    <h2 className={titleStyle}>Activities</h2>
                    <ul className="footer-ul dark:text-gray-400 font-medium">
                        <li className={itemStyle}><a href="https://discord.com/invite/losthalls" rel="noopener noreferrer" className={underline}>Discord</a></li>
                        <li className={itemStyle}><a href="https://husky-rotmg.github.io/MapReadingPractice-Web/" rel="noopener noreferrer" className={underline}>Map Reading</a></li>
                    </ul>
                </div>

                <div className="footer-theme">
                    <h2 className={titleStyle}>Support</h2>
                    <ul className="footer-ul dark:text-gray-400 font-medium">
                        <li className={itemStyle}><a href="https://docs.google.com/document/d/1_5u0-3wmcWqVP1tS8leMnzqjETjyYiLCkjA1yInyZ1Y/edit?usp=sharing" rel="noopener noreferrer" className={underline}>Help</a></li>
                        <li className={itemStyle}><a href="https://discord.com/channels/343704644712923138/1119012861214216252" rel="noopener noreferrer" className={underline}>Report</a></li>
                        <li className={itemStyle}><a href="https://www.patreon.com/vibot" rel="noopener noreferrer" className={underline}>Patreon</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <hr className="footer-line" />
                <span className="flex justify-center mt-4 animated-header"
                    style={{ fontSize: '22px', padding:'20px' ,bottom:'0'}}>Copyrights of VITECH © 2023</span>
            </div>

        </div>
    )
}

export default Footer;

