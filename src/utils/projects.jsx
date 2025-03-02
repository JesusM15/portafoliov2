import teslaLanding from "./../assets/teslalanding.png";
import rufMobile from './../assets/ruf_menu.jpg';
import erpMobile from './../assets/erp_menu.jpg';
import erpWeb from './../assets/erp_geologistic_web.jpg';

import React from "react";
import { TbBrandAstro, TbBrandReactNative, TbBrandRedux   } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
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
            description: "Sistema ERP (Planificación de Recursos Empresariales) con sistema multiroles",
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
            image: erpWeb,
            description: "Plataforma web para gestión de negocios en la App de Asistencia RUF",
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

    ]
};