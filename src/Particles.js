import { useCallback } from "react"
import React           from 'react'
import { useSelector } from "react-redux";
import Particles       from 'react-tsparticles'
import { loadSlim }    from "tsparticles-slim";

const ParticlesElement = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const darkMode = useSelector(state => state.toggleDarkMode);

  return (

    <Particles className="particles"
      init={particlesInit}
      width='100vw'
      height='100vh'
      options={{
        background: {
          color: {
            value: darkMode ? "#2C2F33" : "#C1C1C1"
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "attract"
            },
            onClick: {
              enabled: true,
              mode: 'attract'
            }
          },
          modes: {
            attract: {
              quantity: .1
            },
            grab: {
              distance: 150
            }
          }
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#8730d9"
          },
          links: {
            color: "#99AAB5",
            distance: 50,
            enable: true,
            opacity: .5,
            width: 1
          },
          move: {
            enable: true,
            speed: .3,
            direction: 'random',
            random: true
          },
        }
      }}
    />
  )
}
export default ParticlesElement;