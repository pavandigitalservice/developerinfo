function getParticleOptions(isDarkMode) {
    const linkColor = isDarkMode ? "#475569" : "#cbd5e1"; // Dark gray for dark mode, light gray for light mode
    const particleColor = isDarkMode ? "#38bdf8" : "#2563eb"; // Highlight blue for dark, primary blue for light

    return {
        fpsLimit: 60,
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Pushes particles away on hover
                },
                onClick: {
                    enable: true,
                    mode: "push", // Adds new particles on click
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            color: {
                value: particleColor,
            },
            links: {
                color: linkColor,
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out", // Particles will go out of the canvas
                },
                random: true,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80, // More particles
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: ["circle", "triangle"], // Techy shapes
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        detectRetina: true,
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure tsParticles is loaded before trying to use it
    if (typeof tsParticles !== 'undefined') {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const options = getParticleOptions(isDarkMode);
        tsParticles.load("tsparticles", options);

        // Observe body class changes to update particle colors for theme toggle
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const newIsDarkMode = document.body.classList.contains('dark-mode');
                    const newOptions = getParticleOptions(newIsDarkMode);
                    tsParticles.load("tsparticles", newOptions); // Reload particles with new options
                }
            });
        });

        observer.observe(document.body, { attributes: true });
    }
});