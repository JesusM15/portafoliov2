import teslaLanding from "./../assets/teslalanding.png";
import rufMobile from './../assets/ruf_menu.jpg';
import erpMobile from './../assets/erp_menu.jpg';
import erpWeb from './../assets/erp_geologistic_web.jpg';
import ruf from './../assets/ruf_landing.png';
import soundleWeb from './../assets/soundleimage.png'
import rufWear from './../assets/ruf_wear.jpg';
import rufWatch from './../assets/ruf_watch.jpg';
import FlappyBird from './../assets/flappybird.png';
import bakersGame from './../assets/bakersgame.png';
import ejchat from './../assets/chat.png';
import Gruasgz from './../assets/gruasgz_foto.jpg';

import React from "react";
import { TbBrandAstro, TbBrandReactNative, TbBrandRedux   } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact, FaSpotify, FaJava, FaSwift   } from "react-icons/fa";
import { SiSocketdotio, SiExpo, SiGmail,SiSemanticui, SiRedux,SiAssemblyscript, SiRaylib, SiDjango,SiDocker    } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { DiRedis, DiMysql } from "react-icons/di";

export default {
    web: [
        {
            id: 6,
            name: "Soundle",
            link: "https://soundle-one.vercel.app/",
            github: "https://github.com/JesusM15/Soundle.git",
            image: soundleWeb,
            hero: false,
            featured: false,  
            production: true,   
            reverse: false,
            video: 'v=ECqYrCinL2s',
            description: "Wordle-style music game. A snippet of a song is played, and the user must guess what it is. Includes animations, hints, and visual feedback.",
            tags: [
                {
                    name: "ReactJS",
                    color: "blue",
                    icon: <FaReact />,
                },
                {
                    name: "Tailwindcss",
                    color: "cyan",
                    icon: <RiTailwindCssFill />,
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs />
                },
                {
                    name: "SpotifyAPI",
                    color: "green",
                    icon: <FaSpotify />
                }
            ]
        },
        {
            id: 4,
            name: "Geologistic ERP",
            link: "https://app.geologisticerp.com/",
            github: null,
            hero: true,
            featured: true,  
            production: true,   
            reverse: false,
            video: "v=CFPPgSKZ9DQ",
            image: erpWeb,
            description: "ERP system (Enterprise Resource Planning) with multi-role support, records, dashboards with charts, Excel export, email sending, etc.",
            tags: [
                {
                    name: "ReactJS",
                    color: "blue",
                    icon: <FaReact />,
                },
                {
                    name: "SemanticUI",
                    color: "cyan",
                    icon: <SiSemanticui />,
                },
                {
                    name: "Javascript",
                    color: "amber",
                    icon: <IoLogoJavascript />
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs/>
                },
                {
                    name: "Redux",
                    color: 'purple',
                    icon: <SiRedux />
                },
                {
                    name: "SMTP",
                    color: 'red',
                    icon: <SiGmail />
                }
            ]
        },
        {
            id: 5,
            name: "RUF - Assistance",
            link: "https://app.restec.mx/",
            github: null,
            image: ruf,
                     hero: true,
            featured: true,  
            production: true,   
            reverse: true,
            video: "v=Dia5LyWaKGo",
            description: "Web platform for business management within the RUF Assistance App.",
            tags: [
                {
                    name: "ReactJS",
                    color: "blue",
                    icon: <FaReact />,
                },
                {
                    name: "SemanticUI",
                    color: "cyan",
                    icon: <SiSemanticui />,
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs />
                },
                {
                    name: "Socket.io",
                    color: "emerald",
                    icon: <SiSocketdotio />
                },
                {
                    name: "Redux",
                    color: 'purple',
                    icon: <TbBrandRedux  />
                },
            ]
        },
        {
            id: 12,
            name: "EJChat",
            link: null,
            github: "https://github.com/JesusM15/ejchat-api",
            image: ejchat,
            video: 'v=bE84aDT-ap8',
            description: "EJChat is a real-time chat and posting application that allows users to send and receive messages instantly. It uses WebSockets for real-time communication, ensuring a smooth and fast experience.",
            tags: [
                {
                name: "ReactJS",
                color: "blue",
                icon: <FaReact />,
                },
                {
                name: "",
                color: "cyan",
                icon: <RiTailwindCssFill />,
                },
                {
                name: "Django",
                color: "green",
                icon: <SiDjango />
                },
                {
                name: "Redis",
                color: "red",
                icon: <DiRedis />
                },
                {
                name: "Docker",
                color: "sky",
                icon: <SiDocker />
                },
                {
                name: "Socket.io",
                color: "emerald",
                icon: <SiSocketdotio />
                },
                {
                name: "Redux",
                color: "purple",
                icon: <TbBrandRedux />
                },
            ]
            },
        {
            id: 1,
            name: 'Tesla Landing',
            link: 'https://64f2a7ff7209f032f9b91def--astonishing-choux-8a470f.netlify.app/',
            github: null,
            image: teslaLanding,
            video: null,
            description: 'Tesla landing page clone.',
            tags: [
                {
                    name: "TailwindCSS",
                    color: "cyan",
                    icon: <RiTailwindCssFill />,
                },
                {
                    name: "Astro",
                    color: "orange",
                    icon: <TbBrandAstro />,
                },
                {
                    name: "Javascript",
                    color: "amber",
                    icon: <IoLogoJavascript />
                }
            ]
        },
    ],
    mobile: [
        {
            id: 2,
            name: "Ruf - Assistance App",
            video: 'v=xLxq1_c_n6s',
            description: "App for assistance in restaurants, malls, gyms, and events.",
            functionalities: [
                'Geolocation',
                'Asynchronous tasks',
                'QR scanning for service',
                'Multi-company system',
                'Payment management',
                'Pickup mode'
            ],
            image: rufMobile,
            tags: [
                {
                    name: "React Native",
                    color: "blue",
                    icon: <TbBrandReactNative />
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs />
                },
                {
                    name: "Socket.io",
                    color: "emerald",
                    icon: <SiSocketdotio />
                },
                {
                    name: "Push Notifications",
                    color: 'gray',
                    icon: <MdNotificationsActive />
                },
                {
                    name: "Redux",
                    color: 'purple',
                    icon: <TbBrandRedux  />
                },
                {
                    name: "ExpoGO",
                    color: 'white',
                    icon: <SiExpo />
                },
            ]
        },
        {
            id: 3,
            name: "Geologistic ERP",
            video: null,
            description: "Mobile ERP system for transportation companies.",
            functionalities: [
                'QR scanning',
                'Multi-company system',
                'Permission system',
                'Roles (admin, client, suppliers, etc.)',
            ],
            image: erpMobile,
            tags: [
                {
                    name: "React Native",
                    color: "blue",
                    icon: <TbBrandReactNative />
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs />
                },
                {
                    name: "Socket.io",
                    color: "emerald",
                    icon: <SiSocketdotio />
                },
                {
                    name: "Redux",
                    color: 'purple',
                    icon: <TbBrandRedux  />
                },
                {
                    name: "ExpoGO",
                    color: 'white',
                    icon: <SiExpo />
                },
                {
                    name: "SMTP",
                    color: 'red',
                    icon: <SiGmail />
                }
            ]
        },
        {
            id: 4,
            name: "Gruas GZ - Inventory Management App",
            video: null,
            description: "Mobile CRM for vehicle inventory control in a towing company. Backend built with Node/Express + MySQL, deployed on a Linux server using PM2.",
            image: Gruasgz,
            functionalities: [
                "JWT-based login",
                "Multi-criteria search",
                "Deployment with PM2 and logs",
                "OTA updates",
            ],
            tags: [
                {
                    name: "React Native",
                    color: "blue",
                    icon: <TbBrandReactNative />
                },
                {
                    name: "Expo",
                    color: "gray",
                    icon: <SiExpo />
                },
                {
                    name: "NodeJS",
                    color: "green",
                    icon: <FaNodeJs />
                },
                {
                    name: "MySQL",
                    color: "orange",
                    icon: <DiMysql />
                }
            ]
        }

    ],
    watch: [
        {
            id: 8,
            name: "Ruf - Customer Assistance App (iOS)",
            video: null,
            description:
            "App designed for waiters, cooks, or event/restaurant hosts. It allows staff to be notified of customer requests via alerts (push notifications), and they can view and read those notifications.",
            functionalities: [
            "Calculates the delay time in reading a notification for analysis.",
            "Multi-business system.",
            "Push notifications.",
            "Login with a unique one-time generated key (OTP).",
            ],
            image: rufWatch,
            tags: [
            {
                name: "Swift",
                color: "orange",
                icon: <FaSwift />,
            },
            {
                name: "APNs",
                color: "red",
            },
            {
                name: "NodeJS",
                color: "green",
                icon: <FaNodeJs />,
            },
            ],
        },
        {
            id: 13,
            name: "Ruf - Customer Assistance App (Android)",
            video: null,
            description:
            "App designed for waiters, cooks, or event/restaurant hosts. It allows staff to be notified of customer requests via alerts (push notifications), and they can view and read those notifications.",
            functionalities: [
            "Calculates the delay time in reading a notification for analysis.",
            "Multi-business system.",
            "Push notifications.",
            "Login with a unique one-time generated key (OTP).",
            ],
            image: rufWear,
            tags: [
            {
                name: "React Native",
                color: "blue",
                icon: <TbBrandReactNative />,
            },
            {
                name: "NodeJS",
                color: "green",
                icon: <FaNodeJs />,
            },
            {
                name: "Socket.io",
                color: "emerald",
                icon: <SiSocketdotio />,
            },
            {
                name: "Redux",
                color: "purple",
                icon: <TbBrandRedux />,
            },
            {
                name: "ExpoGO",
                color: "white",
                icon: <SiExpo />,
            },
            ],
        },
        ],
    desktop: [
        {
            id: 11,
            name: "Baker's Game",
            link: null,
            github: null,
            image: bakersGame,
            video: null,
            description: "Baker's Game card game, similar to Free Cell.",
            tags: [
                {
                    name: "Java",
                    color: "orange",
                    icon: <FaJava  />,
                },
            ]
        },
        {
            id: 10,
            name: "Flappy Bird",
            link: null,
            github: "https://github.com/JesusM15/flappy-bird-assembly",
            image: FlappyBird,
            video: 'v=ud_3ZKjDL-4',
            description: "Flappy Bird game created using Assembly language, with a minimalist design using Raylib and C.",
            tags: [
                {
                    name: "Assembly (MASM)",
                    color: "fuchsia",
                    icon: <SiAssemblyscript />,
                },
                {
                    name: "C",
                    color: "cyan",
                    icon: <h4>C</h4>
                },
                {
                    name: "Raylib",
                    color: "gray",
                    icon: <SiRaylib />
                },
            ]
        },
    ]
};
