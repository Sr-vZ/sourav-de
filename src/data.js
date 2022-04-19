// src/data.js

import {IoSchool, IoBriefcase} from "react-icons/io5";

const dsa = require('./img/Digital_Sign_app.png')
const mplayer = require('./img/MusicPlayer.PNG')

const projects = [
    {
        title: "React Music Player",
        subtitle: "MERN Stack",
        description: "A web based music player in React to deliver a rich UI/UX utilizing the Web Audi" +
                "o API of the browsers under the hood",
        image: mplayer,
        img: 'Digital_Sign_app.png',
        link: "https://codepen.io/SrvZ/full/dyJzVpW"
    }, {
        title: "React Tracks",
        subtitle: "React and Python",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore reru" +
                "m laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: dsa,
        img: 'Digital_Sign_app.png',
        link: "https://reedbarger.com"
    }, {
        title: "DevChat",
        subtitle: "React and Firebase",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore reru" +
                "m laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: dsa,
        img: 'Digital_Sign_app.png',
        link: "https://jsbootcamp.com"
    }, {
        title: "Digital Signature Generator",
        subtitle: "React Hooks",
        description: "A Frontend App to generate Digital Signature from either drawing or by typing. T" +
                "he generated image can be copied or saved to user's device.",
        image: dsa,
        img: 'Digital_Sign_app.png',
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

const timeline = [
    {
        id: 1,
        title: "Diploma in Electronics and TeleCommunications Engineering",
        description: '',
        organisation: 'WBSCTE',
        logo: 'https://webscte.co.in/assets/image/logo.png',
        year: 2011,
        icon: IoSchool
    }, {
        id: 2,
        title: "B.Tech in Electronics and Communications Engineering",
        description: '',
        organisation: 'WBUT',
        logo: 'https://www.careerindia.com/img/2015/06/17-1434541033-westbengaluniversityoftechnology.jpg',
        year: 2014,
        icon: IoSchool
    }, {
        id: 3,
        title: "Service Desk Associate",
        description: '',
        organisation: 'BT',
        year: 2014,
        logo: 'https://logo.clearbit.com/bt.com',
        icon: IoBriefcase
    },{
        id: 4,
        title: "Network Implementation Engineer",
        description: '',
        organisation: 'BT',
        year: 2017,
        logo: 'https://logo.clearbit.com/bt.com',
        icon: IoBriefcase
    },{
        id: 5,
        title: "Automation Build Specialist",
        description: '',
        organisation: 'BT',
        year: 2020,
        logo: 'https://logo.clearbit.com/bt.com',
        icon: IoBriefcase
    }


]

const testimonials = []

export {projects, skills, timeline, testimonials}