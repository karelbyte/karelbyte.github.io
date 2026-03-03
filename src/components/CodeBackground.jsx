import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function CodeBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const codeSnippets = [
    'const', 'function', 'return', '=>', 'import', 'export',
    'class', 'async', 'await', 'if', 'else', 'for',
    '{ }', '[ ]', '( )', '<>', '/>', '===', '!==',
    'let', 'var', 'try', 'catch', 'new', 'this'
  ]

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          background: {
            color: {
              value: 'transparent'
            }
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ['#10b981', '#34d399', '#6ee7b7', '#059669']
            },
            shape: {
              type: 'char',
              character: {
                value: codeSnippets,
                font: 'Fira Code, monospace',
                style: '',
                weight: '400'
              }
            },
            opacity: {
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 16,
              random: { enable: true, minimumValue: 10 }
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'top',
              random: true,
              straight: false,
              outModes: {
                default: 'out',
                top: 'out',
                bottom: 'out'
              }
            }
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          detectRetina: true
        }}
      />
      
      {/* Overlay gradient para mejor legibilidad */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950/80 pointer-events-none" style={{zIndex: 1}}></div>
    </>
  )
}
