import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (): Promise<void> => {
  }

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#161513"
            }
          },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: false,
                mode: "push"
              },
              resize: {
                enable: true
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                quantity: 4
              }
            }
          },
          particles: {
            color: {
              value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "bounce"
              },
              path: {
                enable: true,
                options: {
                  sides: 6,
                  turnSteps: 30,
                  angle: 30
                },
                generator: "polygonPathGenerator"
              }
            },
            number: {
              density: {
                enable: true
              },
              value: 100
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            }
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true
        }}
      />
    )
  }

  return <></>
}

export default ParticlesBackground