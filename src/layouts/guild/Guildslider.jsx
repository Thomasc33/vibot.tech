import { GuildSliderItems }          from "../../components/items/GuildSliderItems";
import { useDispatch, useSelector }  from "react-redux";
import { useState }                  from "react";
import changeGuild from "../../actions/changeGuild";

const Guildslider = () => {
    const dispatch = useDispatch();
    const [guildImageIdx, setGuildImageIdx] = useState(0);
    const guildImage       = GuildSliderItems[guildImageIdx];

    const darkMode = useSelector(state => state.toggleDarkMode);
    const arrowTheme = ` w-20 h-20 ${!darkMode ? "arrow-dark" : "arrow-theme"}`;
    const heartTheme = ` w-6 h-6 heart-icon ${!darkMode ? "heart-dark" : "heart-icon"}`;
    const sliderText = ` mt-4 font-semibold ${!darkMode ? "text-gray-700" : "heart-icon"}`;


    const setImage = (index) => {
        const sliderLength = GuildSliderItems.length;
        if (index === -1)                            {index = sliderLength - 1;}
        if (index === sliderLength)                  {index = 0;}
        if (index >= 0 && index <= sliderLength - 1) {setGuildImageIdx(index);}
    }

    const setGuild = () => {
        dispatch(changeGuild(guildImageIdx));
    }

    return (
        
        <div className="flex">
            <div className="guildslider-container">
                <div className="slider-items">
                    <div className="flex flex-col">
                        <button onClick={() => setImage(guildImageIdx - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" 
                                className={arrowTheme}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="icon-item guild-slider-text">
                        <img onClick={() => { setGuild() }}
                            src={guildImage.icon} 
                            alt={guildImage.name}>
                        </img>
                        <div className={sliderText}>
                            Discord: {guildImage.name}
                        </div>
                    </div>

                    <div>
                        <button onClick={() => setImage(guildImageIdx + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" 
                                className={arrowTheme}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="heart-visual">
                    { GuildSliderItems.map((_, iconIdx) => {
                        return (
                            <div className={iconIdx === guildImageIdx ? "heart-active" : null}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                    className={heartTheme}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Guildslider;