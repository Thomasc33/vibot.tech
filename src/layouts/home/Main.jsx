import Currentguild     from "../guild/Currentguild";
import Eventupdate      from "../Eventupdate";
import Guildslider      from "../guild/Guildslider";
import Vibotbio         from "../Vibotbio";

const Main = () => {

    return (
        <div className="wrapper">
            <div className="main-container">
                <Currentguild />
                <Guildslider />
            </div>
            <Vibotbio />
            <Eventupdate />
        </div>
    )
}

export default Main;