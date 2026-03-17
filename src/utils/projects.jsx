// projects.js — archivo unificado ES+EN
// Las imágenes se importan UNA SOLA VEZ (antes estaban duplicadas en projects.jsx y projectsen.jsx)
// El texto viene de i18n (claves en translation.json)

import teslaLanding from "./../assets/teslalanding.png";
import rufMobile from './../assets/ruf_menu.jpg';
import erpMobile from './../assets/erp_menu.jpg';
import erpWeb from './../assets/erp_geologistic_web.jpg';
import ruf from './../assets/ruf_landing.png';
import soundleWeb from './../assets/soundleimage.png';
import rufWear from './../assets/ruf_wear.jpg';
import rufWatch from './../assets/ruf_watch.jpg';
import FlappyBird from './../assets/flappybird.png';
import bakersGame from './../assets/bakersgame.png';
import ejchat from './../assets/chat.png';
import Gruasgz from './../assets/gruasgz_foto.jpg';

import React from "react";
import { TbBrandAstro, TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact, FaSpotify, FaJava, FaSwift } from "react-icons/fa";
import { SiSocketdotio, SiExpo, SiGmail, SiSemanticui, SiRedux, SiAssemblyscript, SiRaylib, SiDjango, SiDocker } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { DiRedis, DiMysql } from "react-icons/di";

// Tags son los mismos en ambos idiomas (nombres de tecnologías no se traducen)
const TAGS = {
  react: { name: "ReactJS", color: "blue", icon: <FaReact /> },
  tailwind: { name: "TailwindCSS", color: "cyan", icon: <RiTailwindCssFill /> },
  node: { name: "NodeJS", color: "green", icon: <FaNodeJs /> },
  spotify: { name: "SpotifyAPI", color: "green", icon: <FaSpotify /> },
  semantic: { name: "SemanticUI", color: "cyan", icon: <SiSemanticui /> },
  js: { name: "Javascript", color: "amber", icon: <IoLogoJavascript /> },
  redux: { name: "Redux", color: "purple", icon: <SiRedux /> },
  reduxTb: { name: "Redux", color: "purple", icon: <TbBrandRedux /> },
  smtp: { name: "SMTP", color: "red", icon: <SiGmail /> },
  socket: { name: "Socket.io", color: "emerald", icon: <SiSocketdotio /> },
  reactNative: { name: "React Native", color: "blue", icon: <TbBrandReactNative /> },
  pushNotif: { name: "Push Notifications", color: "gray", icon: <MdNotificationsActive /> },
  expo: { name: "ExpoGO", color: "white", icon: <SiExpo /> },
  expoGray: { name: "Expo", color: "gray", icon: <SiExpo /> },
  mysql: { name: "MySQL", color: "orange", icon: <DiMysql /> },
  swift: { name: "Swift", color: "orange", icon: <FaSwift /> },
  apns: { name: "APNs", color: "red" },
  django: { name: "Django", color: "green", icon: <SiDjango /> },
  redis: { name: "Redis", color: "red", icon: <DiRedis /> },
  docker: { name: "Docker", color: "sky", icon: <SiDocker /> },
  astro: { name: "Astro", color: "orange", icon: <TbBrandAstro /> },
  java: { name: "Java", color: "orange", icon: <FaJava /> },
  assembly: { name: "Assembly (MASM)", color: "fuchsia", icon: <SiAssemblyscript /> },
  c: { name: "C", color: "cyan", icon: <h4>C</h4> },
  raylib: { name: "Raylib", color: "gray", icon: <SiRaylib /> },
};

// La estructura de proyectos — texto referenciado por clave i18n (p.ej. "p.6.description")
// El componente ProyectSection llama t(project.nameKey) y t(project.descriptionKey) etc.
export default {
  web: [
    {
      id: 6,
      nameKey: "p.6.name",
      link: "https://soundle-one.vercel.app/",
      github: "https://github.com/JesusM15/Soundle.git",
      image: soundleWeb,
      hero: false,
      featured: false,
      production: true,
      reverse: false,
      video: 'v=ECqYrCinL2s',
      descriptionKey: "p.6.description",
      tags: [TAGS.react, TAGS.tailwind, TAGS.node, TAGS.spotify],
    },
    {
      id: 4,
      nameKey: "p.4.name",
      link: "https://app.geologisticerp.com/",
      github: null,
      hero: true,
      featured: true,
      production: true,
      reverse: false,
      video: "v=CFPPgSKZ9DQ",
      image: erpWeb,
      descriptionKey: "p.4.description",
      tags: [TAGS.react, TAGS.semantic, TAGS.js, TAGS.node, TAGS.redux, TAGS.smtp],
    },
    {
      id: 5,
      nameKey: "p.5.name",
      link: "https://app.restec.mx/",
      github: null,
      hero: true,
      featured: true,
      production: true,
      reverse: true,
      image: ruf,
      video: "v=Dia5LyWaKGo",
      descriptionKey: "p.5.description",
      tags: [TAGS.react, TAGS.semantic, TAGS.node, TAGS.socket, TAGS.reduxTb],
    },
    {
      id: 12,
      nameKey: "p.12.name",
      link: null,
      github: "https://github.com/JesusM15/ejchat-api",
      image: ejchat,
      video: 'v=bE84aDT-ap8',
      descriptionKey: "p.12.description",
      tags: [TAGS.react, TAGS.tailwind, TAGS.django, TAGS.redis, TAGS.docker, TAGS.socket, TAGS.reduxTb],
    },
    {
      id: 1,
      nameKey: "p.1.name",
      link: 'https://64f2a7ff7209f032f9b91def--astonishing-choux-8a470f.netlify.app/',
      github: null,
      image: teslaLanding,
      video: null,
      descriptionKey: "p.1.description",
      tags: [TAGS.tailwind, TAGS.astro, TAGS.js],
    },
  ],
  mobile: [
    {
      id: 2,
      nameKey: "p.2.name",
      video: 'v=xLxq1_c_n6s',
      descriptionKey: "p.2.description",
      highlightsKey: "p.2.functionalities",
      image: rufMobile,
      tags: [TAGS.reactNative, TAGS.node, TAGS.socket, TAGS.pushNotif, TAGS.reduxTb, TAGS.expo],
    },
    {
      id: 3,
      nameKey: "p.3.name",
      video: null,
      descriptionKey: "p.3.description",
      highlightsKey: "p.3.functionalities",
      image: erpMobile,
      tags: [TAGS.reactNative, TAGS.node, TAGS.socket, TAGS.reduxTb, TAGS.expo, TAGS.smtp],
    },
    {
      id: 4,
      nameKey: "p.m4.name",
      video: null,
      descriptionKey: "p.m4.description",
      highlightsKey: "p.m4.functionalities",
      image: Gruasgz,
      tags: [TAGS.reactNative, TAGS.expoGray, TAGS.node, TAGS.mysql],
    },
  ],
  watch: [
    {
      id: 8,
      nameKey: "p.8.name",
      video: null,
      descriptionKey: "p.8.description",
      highlightsKey: "p.8.functionalities",
      image: rufWatch,
      tags: [TAGS.swift, TAGS.apns, TAGS.node],
    },
    {
      id: 13,
      nameKey: "p.13.name",
      video: null,
      descriptionKey: "p.13.description",
      highlightsKey: "p.13.functionalities",
      image: rufWear,
      tags: [TAGS.reactNative, TAGS.node, TAGS.socket, TAGS.reduxTb, TAGS.expo],
    },
  ],
  desktop: [
    {
      id: 11,
      nameKey: "p.11.name",
      link: null,
      github: null,
      image: bakersGame,
      video: null,
      descriptionKey: "p.11.description",
      tags: [TAGS.java],
    },
    {
      id: 10,
      nameKey: "p.10.name",
      link: null,
      github: "https://github.com/JesusM15/flappy-bird-assembly",
      image: FlappyBird,
      video: 'v=ud_3ZKjDL-4',
      descriptionKey: "p.10.description",
      tags: [TAGS.assembly, TAGS.c, TAGS.raylib],
    },
  ],
};
