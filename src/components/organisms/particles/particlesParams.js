export default () => ({
    particles: {
        number: {
            value: 1,
            density: {
                enable: true,
                value_area: 64
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            random: true,
            type: "triangle",
                stroke: {
                width: 5,
                color: "#0008f2ff"
            },
            polygon: {
                nb_sides: 4
            },
        },
        opacity: {
            value: 1,
            random: true,
        },
        size: {
            value: 1.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            random: true,
            enable: false,
            distance: 300,
            color: "#ffffff",
            opacity: 1,
            width: 5
        },
        move: {
            enable: true,
            speed: 0.618,
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    retina_detect: true
})