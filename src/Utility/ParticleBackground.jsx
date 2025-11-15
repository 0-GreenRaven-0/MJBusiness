import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        interactivity: {
          detectsOn: "canvas",
        },
        background: {
          color: {
            value: "#E8E8E8",
          },
        },
        fpsLimit: 60,
        particles: {
          shape: {
            type: "image",
            image: [
              {
                src: "https://ik.imagekit.io/greenraven/MJ/icons8-book-100.png?updatedAt=1763145907224",
                width: 10,
                height: 10,
              },
              {
                src: "https://ik.imagekit.io/greenraven/MJ/icons8-money-100.png?updatedAt=1763145892236",
                width: 10,
                height: 10,
              }
            ]
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 35,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 10, max: 25 },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}