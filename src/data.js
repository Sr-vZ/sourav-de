// src/data.js
const dsa = require('./img/Digital_Sign_app.png')
const mplayer = require('./img/MusicPlayer.PNG')

const projects = [
    {
        title: "React Music Player",
        subtitle: "MERN Stack",
        description: "A web based music player in React to deliver a rich UI/UX utilizing the Web Audio API of the browsers under the hood",
        image: mplayer,
        img:'Digital_Sign_app.png',
        link: "https://codepen.io/SrvZ/full/dyJzVpW"
    }, {
        title: "React Tracks",
        subtitle: "React and Python",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore reru" +
                "m laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: dsa,
        img:'Digital_Sign_app.png',
        link: "https://reedbarger.com"
    }, {
        title: "DevChat",
        subtitle: "React and Firebase",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore reru" +
                "m laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: dsa,
        img:'Digital_Sign_app.png',
        link: "https://jsbootcamp.com"
    }, {
        title: "Digital Signature Generator",
        subtitle: "React Hooks",
        description: "A Frontend App to generate Digital Signature from either drawing or by typing. The generated image can be copied or saved to user's device.",
        image: dsa,
        img:'Digital_Sign_app.png',
        link: "https://codepen.io/SrvZ/full/jOYwLeX"
    }
];

const skills = [
    {
        id: 1,
        title: "Python",
        subtitle: "Flask, Pandas, Network and Infrastructure Automation ",
        years: 4
    }, {
        id: 2,
        title: "React",
        subtitle: "Frontend UI and Dashboards",
        years: 1
    }, {
        id: 3,
        title: "NodeJS",
        subtitle: "Express, Mongoese, API development for Frontend or Middleware ",
        years: 3
    }, {
        id: 4,
        title: "Bootstrap",
        subtitle: "SImple Frontends for POCs and Dashboards ",
        years: 3
    }, {
        id: 5,
        title: "Backend/API Development",
        subtitle: "PostGres, MongoDB, FireBase",
        years: 3
    }
]

const testimonials = []

export {projects, skills, testimonials}