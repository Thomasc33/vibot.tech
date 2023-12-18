import { Outlet }       from "react-router-dom";
import { useSelector }  from "react-redux";
import ParticlesElement from "../Particles";

const LoadPage = () => {
  const darkMode = useSelector(state => state.toggleDarkMode);

  return (
    <div>
      <ParticlesElement
        darkMode={darkMode} />
      <Outlet />
    </div>
  );
}
export default LoadPage;