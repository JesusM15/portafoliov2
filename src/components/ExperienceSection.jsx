import React from "react";
import { useTranslation } from "react-i18next";
import './../App.css'

const experienceDataES = [
  {
    title: "Desarrollador Full Stack",
    company: "Geologistic",
    date: "2023 - Actualidad",
    description:
      "Desarrollé un sistema de notificaciones push para múltiples dispositivos utilizando Firebase con Expo, integrando apps móviles y para reloj (Watch) mediante un único API. Luego, implementé una app independiente en Swift para el reloj, con login, manejo en tiempo real mediante sockets y notificaciones push. Además, colaboré en dos proyectos (una app de asistencia para negocios y un ERP), desarrollando el API en Node.js con tareas asíncronas para enviar recordatorios, procesamiento de archivos Excel, manejo multimedia, integración con Redux y JWT, conexión SMTP, sistemas de reportes y calendarios."
  },
  {
    title: "Desarrollador Freelance",
    company: "Freelance",
    date: "2022 - Actualidad",
    description:
      "Realicé proyectos a medida utilizando HTML, CSS, TailwindCSS y Django. Entre mis logros destaca la implementación de un sistema de suscripciones con PayPal y la integración de la API de Google Maps para mejorar la experiencia del usuario."
  },
  {
    title: "Desarrollador Frontend",
    company: "CastSoft",
    date: "2023",
    description:
      "Trabajé en un entorno .NET utilizando Razor, CSS, JavaScript y Bootstrap, desarrollando interfaces de usuario interactivas y experiencias visuales. Implementé animaciones con JavaScript y CSS puro, y creé landing pages, dashboards y frontends para sistemas de gestión empresarial, incluyendo gráficos interactivos."
  },
  {
    title: "Tutor de Programación en C y Java",
    company: "Universidad Autónoma de Baja California",
    date: "Actualidad",
    description:
    "Imparto tutorías y ayudantías en la materia de Programación Estructurada en C, Programación Orientada a Objetos, Algoritmos y Estructuras de Datos en Java así como calificando trabajos y prácticas, y apoyando a los alumnos en su proceso de aprendizaje."
  },
  {
    title: "Proyectos Personales",
    company: "Autodidacta / Personal",
    date: "2019 - Actualidad",
    description:
      "He desarrollado aplicaciones con Django, ReactJS, React Native, Astro y más. Entre mis proyectos destacan la creación de APIs seguras con JWT (para autenticación por email o username), el uso de Docker y Redis para trabajar con websockets en Django y Node.js, y una demo de red social con publicaciones, likes y chat en tiempo real. También he implementado sistemas de gestión de bibliotecas, pagos con Stripe y PayPal, y actualmente estoy desarrollando un juego online multijugador basado en sockets, además de experimentar con visión artificial en Python, Arduino, y otras tecnologías."
  },
  {
    title: "Ingenieria en computación",
    company: "Universidad Autónoma de Baja California",
    date: "2022 - Actualidad",
    description:
      ""
  },
];

const experienceDataEN = [
  {
    title: "Full Stack Developer",
    company: "Geologistic",
    date: "2023 - Now",
    description:
      "I developed a push notification system for multiple devices using Firebase with Expo, integrating mobile and watch apps through a single API. Later, I implemented a standalone Swift app for the watch, with login, real-time handling using sockets, and push notifications. I also collaborated on two projects (a business attendance app and an ERP), developing the API in Node.js with asynchronous tasks for sending reminders, Excel file processing, media handling, integration with Redux and JWT, SMTP connection, reporting systems, and calendars."
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    date: "2022 - Now",
    description:
      "I completed custom projects using HTML, CSS, TailwindCSS, and Django. My achievements include implementing a subscription system with PayPal and integrating the Google Maps API to enhance user experience."
  },
  {
    title: "Frontend Developer",
    company: "CastSoft",
    date: "2023",
    description:
      "I worked in a .NET environment using Razor, CSS, JavaScript, and Bootstrap, creating interactive user interfaces and visual experiences. I implemented animations with pure JavaScript and CSS, and developed landing pages, dashboards, and frontends for business management systems, including interactive charts."
  },
  {
    title: "Programming Tutor in C and Java",
    company: "Universidad Autónoma de Baja California",
    date: "Now",
    description:
      "I provide tutoring and assistance in the subjects of Structured Programming in C, Object-Oriented Programming, and Data Structures and Algorithms in Java. I also grade assignments and practices, and support students in their learning process."
  },
  {
    title: "Personal Projects",
    company: "Self-taught / Personal",
    date: "2019 - Now",
    description:
      "I have developed applications using Django, ReactJS, React Native, Astro, and more. My projects include secure APIs with JWT (for authentication via email or username), the use of Docker and Redis to work with WebSockets in Django and Node.js, and a social network demo with posts, likes, and real-time chat. I've also implemented library management systems, Stripe and PayPal payment systems, and I'm currently developing a multiplayer online socket-based game. I'm also experimenting with computer vision in Python, Arduino, and other technologies."
  },
  {
    title: "Computer Engineering",
    company: "Universidad Autónoma de Baja California",
    date: "2022 - Now",
    description: ""
  }
];


export default function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const experienceData =  i18n.language == "es" ? experienceDataES : experienceDataEN;
  
  return (
    <section id="experience" className="py-12 px-4 text-white soft-background ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{t("experience")}</h2>

        <div className="relative border-l border-gray-600 pl-8">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 ml-4 relative">
              <div className="absolute w-2 h-2 bg-purple-600/80 rounded-full -left-[20px] mt-1.5"></div>
              
              <h3 className=" text-lg lg:text-xl font-semibold text-purple-300">{item.title}</h3>
              
              <span className="text-sm text-gray-400 block mb-1">{item.company}</span>
              
              <span className="text-sm text-gray-400 block mb-1">{item.date}</span>
              
              <p className="lg:text-md text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











