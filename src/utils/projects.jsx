import teslaLanding from "./../assets/teslalanding.png";
import rufMobile from './../assets/ruf_menu.jpg';
import erpMobile from './../assets/erp_menu.jpg';
import erpWeb from './../assets/erp_geologistic_web.jpg';
import ruf from './../assets/ruf_landing.png';
import soundleWeb from './../assets/soundleimage.png'
import rufWear from './../assets/ruf_wear.jpg';

import React from "react";
import { TbBrandAstro, TbBrandReactNative, TbBrandRedux   } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact, FaSpotify } from "react-icons/fa";
import { SiSocketdotio, SiExpo, SiGmail,SiSemanticui, SiRedux   } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";


export default {
    web: [
        {
        id: 1,
        name: 'Tesla Landing',
        link: 'https://64f2a7ff7209f032f9b91def--astonishing-choux-8a470f.netlify.app/',
        github: 'https://github.com/JesusM15/tesla-landing', // GitHub link
        image: teslaLanding,
        description: 'Clon de la landing page de Tesla',
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
        {
            id: 4,
            name: "Geologistic ERP",
            link: "https://app.geologisticerp.com/",
            github: null,
            image: erpWeb,
            description: "Sistema ERP (Planificación de Recursos Empresariales) con sistema multiroles, registros, dashboards con gráficas, sistemas de exportación a excel, envío de correos, etc.",
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
                    name: "SMPT",
                    color: 'red',
                    icon: <SiGmail />
                }
            ]
        },
        {
            id: 5,
            name: "RUF - Asistencia",
            link: "https://app.restec.mx/",
            github: null,
            image: ruf,
            description: "Plataforma web para gestión de negocios en la App de Asistencia RUF.",
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
            id: 6,
            name: "Soundle",
            link: "https://soundle-one.vercel.app/",
            github: "https://github.com/JesusM15/Soundle.git",
            image: soundleWeb,
            description: "Juego estilo Wordle musical. Se escucha un fragmento de alguna canción y el usuario debe adivinar cuál es. Cuenta con animaciones, sugerencias y feedback visual.",
            tags: [
                {
                    name: "ReactJS",
                    color: "blue",
                    icon: <FaReact />,
                },
                {
                    name: "Tailwindcss",
                    color: "cyan",
                    icon: <RiTailwindCssFill/>,
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
        }
    ],
    mobile: [
        {
            id: 2,
            name: "Ruf - App de Asistencia",
            description: "App para asistencia en restaurantes, plazas, gimnasios y eventos.",
            functionalities: [
                'Geolocalización',
                'Tareas asíncronas',
                'Escaneo de QR para atención',
                'Sistema multiempresarial',
                'Gestión de pagos',
                'Modo recoger'
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
            description: "App de sistema ERP (Planificación de Recursos Empresariales) para transporte",
            functionalities: [
                'Escaneo de QR',
                'Sistema multiempresarial',
                'Sistema de permisos',
                'Roles(admin, cliente, proveedores, etc)',
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
                    name: "SMPT",
                    color: 'red',
                    icon: <SiGmail />
                }
            ]
        }
    ],
    watch: [
        {
            id: 8,
            name: "Ruf - App para Asistencia al Cliente (Android)",
            description: "App para meseros, cocineros o host de algún evento o restaurante, permite notificar a los empleados las solicitudes de los clientes por medio de alertas(notificaciones) y se puede visualizar estas notificaciones asi como leer notificaciones.",
            functionalities: [
                'Calcúlo del tiempo de demora en leer notificación para analísis.',
                'Sistema multiempresarial',
                'Notificaciones push',
                'Login con clave generada única de un solo uso (OTP)',
            ],
            image: rufWear,
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
            ]
        }
        
    ],
    desktop: [

    ]
};