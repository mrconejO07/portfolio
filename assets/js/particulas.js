//ARCHIVO PRINCIPAL PARA MODIFICAR LOS VALORES DE LAS PARTICULAS
/* -----------------------------------------------
/* How to use? : Check the GitHub README  --> https://github.com/VincentGarreau/particles.js/
/* ----------------------------------------------- */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 70, //Cambiado de 80 a 50 para reducir el numero de particulas
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        // value: "#1cae0c",
        value: "#20c20e",
        // value: "#E05757",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5, //Cambiado de 0.5 a 0.05
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 5, //Cambiado de 15 a 5
          size_min: 0.1,
          sync: false,
          // random: true,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#1cae0c",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1, //Cambiado de 6 a 1
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false, //Todo: cambiado de true a false para deshabilitar el movimiento al pasar el mouse
          mode: "repulse",
        },
        onclick: {
          enable: false, //Todo: cambiado de true a false para deshabilitar que se agreguen mas particulas cuando se hace click
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
