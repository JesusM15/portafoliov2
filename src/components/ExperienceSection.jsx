import React from "react";
import { useTranslation } from "react-i18next";
import './../App.css'
import ExperienceCard from "./Card/ExperienceCard";

const experienceDataES = [
  {
    title: "Desarrollador Full Stack",
    company: "Geologistic",
    date: "2023 - Actualidad",
    description:
      "Desarrollé y mantuve plataformas empresariales tipo SaaS, integrando aplicaciones web, móviles y wearables bajo una arquitectura centralizada.",
    highlights: [
      "Desarrollo de API en Node.js con tareas asíncronas: envío de correos (SMTP), recordatorios automáticos, procesamiento de archivos Excel y manejo multimedia.",
      "Sistema de impersonación (superadmin) para soporte: acceso controlado a cuentas sin solicitar contraseñas.",
      "Control de sesiones por dispositivo (SaaS): una cuenta activa por dispositivo para evitar uso compartido no rentable, con modo soporte tipo “mirror” sin expulsar usuarios."
    ]
  },
{
  title: "Desarrollador Full Stack (RUF)",
  company: "Geologistic / RUF",
  date: "2023 - Actualidad",
  description:
    "Desarrollo de funcionalidades clave para RUF, una app de asistencia y operación diaria para negocios y eventos.",
  highlights: [
    "Sistema de notificaciones push multi-dispositivo (Expo + Firebase) para apps móviles y Apple Watch bajo un solo API.",
      "App standalone en Swift para Apple Watch con login, sockets en tiempo real y notificaciones push.",
    "Sistema de reservaciones para restaurantes y eventos con gestión de estados (confirmar, cancelar).",
    "Flujo de pickup estilo Walmart: pedidos listos para recoger sin interacción directa.",
    "Integración de códigos QR para atención, validación de pedidos y acciones rápidas.",
    "Recordatorios diarios y notificaciones automáticas para usuarios y negocios.",
    "Geolocalización y mapas para detectar negocios cercanos y mejorar la experiencia del usuario."
  ]
},
  {
    title: "Desarrollador Full Stack Por Proyecto",
    company: "Gruas GZ",
    date: "2025",
    description:
      "Fui contactado para desarrollar un sistema de control de inventario y gestión vehicular (CRM) implementado como aplicación móvil.",
    highlights: [
      "Desarrollo completo del proyecto: diseño, interfaz, backend y despliegue.",
      "Implementación de API en servidor Linux con acceso FTP.",
      "Configuración y administración de base de datos MySQL en entorno productivo."
    ]
  },
  {
    title: "Desarrollador Frontend",
    company: "CastSoft",
    date: "2023",
    description:
      "Trabajé en un entorno .NET utilizando Razor, CSS, JavaScript y Bootstrap.",
    highlights: [
      "Desarrollo de interfaces interactivas y experiencias visuales.",
      "Animaciones con JavaScript y CSS puro.",
      "Creación de landing pages, dashboards y frontends empresariales con gráficos interactivos."
    ]
  },
  {
    title: "Desarrollador Freelance",
    company: "Freelance",
    date: "2022 - Actualidad",
    description:
      "Desarrollé soluciones a medida para distintos clientes.",
    highlights: [
      "Proyectos con HTML, CSS, TailwindCSS y Django.",
      "Sistema de suscripciones con PayPal.",
      "Integración de Google Maps API para mejorar la experiencia del usuario."
    ]
  },
  {
    title: "Tutor de Programación en C y Java",
    company: "Universidad Autónoma de Baja California",
    date: "Actualidad",
    description:
      "Apoyo académico a estudiantes universitarios en materias base de programación.",
    highlights: [
      "Tutorías en Programación Estructurada en C.",
      "Programación Orientada a Objetos y Estructuras de Datos en Java.",
      "Calificación de prácticas y acompañamiento en el proceso de aprendizaje."
    ]
  },
  {
    title: "Proyectos Personales",
    company: "Autodidacta / Personal",
    date: "2019 - Actualidad",
    description:
      "Desarrollo constante de proyectos experimentales y productos personales.",
    highlights: [
      "Aplicaciones con Django, ReactJS, React Native y Astro.",
      "APIs seguras con JWT (email/username).",
      "Uso de Docker y Redis para WebSockets en Django y Node.js.",
      "Demo de red social con publicaciones, likes y chat en tiempo real.",
      "Pagos con Stripe y PayPal, y desarrollo de juego online multijugador con sockets.",
      "Experimentación con visión artificial en Python y proyectos con Arduino."
    ]
  },
  {
    title: "Ingeniería en Computación",
    company: "Universidad Autónoma de Baja California",
    date: "2022 - Actualidad",
    description: ""
  }
];


const experienceDataEN = [
  {
    title: "Full Stack Developer",
    company: "Geologistic",
    date: "2023 - Now",
    description:
      "Developed and maintained enterprise SaaS platforms integrating web, mobile, and wearable applications under a centralized architecture.",
    highlights: [
      "Node.js API with asynchronous jobs: email delivery (SMTP), automated reminders, Excel file processing, and media handling.",
      "Support impersonation system (superadmin) for controlled account access without requesting passwords.",
      "Device-bound session control (SaaS): one active account per device, including a support “mirror mode” without kicking end users."
    ]
  },
{
  title: "Full Stack Developer (RUF)",
  company: "Geologistic / RUF",
  date: "2024 - 2025",
  description:
    "Development of core features for RUF, an assistance and daily-operations app for businesses and events.",
  highlights: [
     "Multi-device push notification system (Expo + Firebase) for mobile apps and Apple Watch through a single API.",
      "Standalone Swift Apple Watch app with login, real-time sockets, and push notifications.",
    "Reservation system for restaurants and events with status management (confirm, cancel).",
    "Walmart-style pickup flow: orders ready for pickup without direct staff interaction.",
    "QR code integration for service access, order validation, and quick actions.",
    "Daily reminders and automated notification system for users and businesses.",
    "Geolocation and maps integration to detect nearby businesses and enhance user experience."
  ]
},
  {
    title: "Full Stack Developer on Project Basis",
    company: "Gruas GZ",
    date: "2025",
    description:
      "Hired to develop an inventory and vehicle management CRM implemented as a mobile application.",
    highlights: [
      "End-to-end development: UI design, backend, and deployment.",
      "API deployed on a Linux server with FTP access.",
      "MySQL database configuration and production setup."
    ]
  },
  {
    title: "Frontend Developer",
    company: "CastSoft",
    date: "2023",
    description:
      "Worked in a .NET environment using Razor, CSS, JavaScript, and Bootstrap.",
    highlights: [
      "Developed interactive user interfaces and visual experiences.",
      "Implemented animations with pure JavaScript and CSS.",
      "Built landing pages, dashboards, and enterprise frontends with interactive charts."
    ]
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    date: "2022 - Now",
    description:
      "Delivered custom solutions for multiple clients.",
    highlights: [
      "Projects using HTML, CSS, TailwindCSS, and Django.",
      "Subscription systems integrated with PayPal.",
      "Google Maps API integration to enhance user experience."
    ]
  },
  {
    title: "Programming Tutor in C and Java",
    company: "Universidad Autónoma de Baja California",
    date: "Now",
    description:
      "Academic support for university students in core programming subjects.",
    highlights: [
      "Tutoring in Structured Programming in C.",
      "Object-Oriented Programming and Data Structures in Java.",
      "Grading assignments and mentoring students through their learning process."
    ]
  },
  {
    title: "Personal Projects",
    company: "Self-taught / Personal",
    date: "2019 - Now",
    description:
      "Continuous development of experimental and personal products.",
    highlights: [
      "Applications built with Django, ReactJS, React Native, and Astro.",
      "Secure APIs with JWT (email/username authentication).",
      "Docker and Redis usage for WebSockets in Django and Node.js.",
      "Social network demo with posts, likes, and real-time chat.",
      "Stripe and PayPal payments, and a multiplayer online socket-based game.",
      "Experiments with computer vision in Python and Arduino projects."
    ]
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
    <section id="experience" className="py-14 px-4 text-white soft-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t("experience")}</h2>

        </div>

        <div className="relative">
          {/* Línea central (solo desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Punto en la línea central (desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
                    <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-b from-indigo-500 via-purple-600 to-purple-800 shadow-[0_0_0_6px_rgba(168,85,247,0.12)]" />
                  </div>

                  {/* Layout: 2 columnas desktop / 1 columna mobile */}
                  <div className="md:grid md:grid-cols-2 gap-6 md:gap-10 items-start hidden">
                    {/* Columna izquierda */}
                    <div className={isLeft ? "md:pr-10" : "md:pr-10 md:opacity-0 md:pointer-events-none"}>
                      {isLeft && <ExperienceCard item={item} align="right" />}
                    </div>

                    {/* Columna derecha */}
                    <div className={!isLeft ? "md:pl-10" : "md:pl-10 md:opacity-0 md:pointer-events-none"}>
                      {!isLeft && <ExperienceCard item={item} align="left" />}
                    </div>
                  </div>

                  {/* Versión mobile: card única con punto a la izquierda */}
                  <div className="md:hidden mt-4">
                    <div className="relative pl-0">
                      {/* <span className="absolute left-0 top-4 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_0_6px_rgba(168,85,247,0.12)]" /> */}
                      <ExperienceCard item={item} align="left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Línea lateral (solo mobile) */}
          <div className="md:hidden absolute left-0 top-0 h-full w-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}












