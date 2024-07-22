"use client"

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const Partices = () => {
    const [init, setInit] = useState(false);

    const { setTheme, theme } = useTheme()


    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: any) => {
        console.log(container);
    };


    return (
        init && <Particles
            id="tsparticles"
            className="z-[-10]"
            options={{
                background: {

                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: {
                            enable: true
                        }
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme === 'dark' ? "#ffffff" : "#000000",
                    },
                    links: {
                        color: theme === 'dark' ? "#ffffff" : "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,

                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />


    );

}

export default Partices;