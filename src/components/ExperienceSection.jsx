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
    <section id="experience" className="py-14 px-4 text-white relative overflow-hidden">
      {/* Fondo con transición suave - empieza y termina con #0c0b0b */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0b] via-purple-950/15 to-[#0c0b0b] pointer-events-none" />
      
      {/* Estrellas sutiles en el fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t("experience")}</h2>
        </div>

        <div className="relative">
          {/* Línea temporal espacial (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-900/15 via-purple-900/10 to-transparent" />
          
          {/* Estrellitas de conexión espacial */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full">
            {[...Array(experienceData.length)].map((_, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2"
                style={{ top: `${(i / (experienceData.length - 1)) * 100}%` }}
              >
                {/* Estrellita con 4 puntas */}
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-purple-950 rounded-full shadow-[0_0_0_4px_rgba(88,28,135,0.15)]" />
                  {/* Punta superior */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-purple-900 -translate-y-0.5" />
                  {/* Punta inferior */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-purple-900 translate-y-0.5" />
                  {/* Punta izquierda */}
                  <div className="absolute top-1/2 left-0 w-1 h-0.5 bg-purple-900 -translate-y-0.5 -translate-x-0.5" />
                  {/* Punta derecha */}
                  <div className="absolute top-1/2 right-0 w-1 h-0.5 bg-purple-900 -translate-y-0.5 translate-x-0.5" />
                  {/* Brillo pulsante */}
                  <div className="absolute inset-0 bg-purple-900 animate-ping opacity-15" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative group">
                  {/* Conector espacial a la línea (desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-purple-900/15 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="md:grid md:grid-cols-2 gap-6 md:gap-10 items-start hidden">
                    {/* Columna izquierda */}
                    <div className={isLeft ? "md:pr-10" : "md:pr-10 md:opacity-0 md:pointer-events-none"}>
                      {isLeft && (
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900/8 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <ExperienceCard item={item} align="right" />
                        </div>
                      )}
                    </div>

                    {/* Columna derecha */}
                    <div className={!isLeft ? "md:pl-10" : "md:pl-10 md:opacity-0 md:pointer-events-none"}>
                      {!isLeft && (
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-l from-purple-900/8 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <ExperienceCard item={item} align="left" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Versión mobile con estrellita espacial lateral */}
                  <div className="md:hidden mt-4">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-900/15 via-purple-900/10 to-transparent" />
                      <div className="absolute left-0 top-6 -translate-x-1/2">
                        {/* Estrellita pequeña para mobile */}
                        <div className="relative w-3 h-3">
                          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-purple-950 rounded-full shadow-[0_0_0_3px_rgba(88,28,135,0.15)]" />
                          {/* 4 puntas pequeñas */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-purple-900 -translate-y-0.5" />
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-purple-900 translate-y-0.5" />
                          <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-purple-900 -translate-y-0.5 -translate-x-0.5" />
                          <div className="absolute top-1/2 right-0 w-0.5 h-0.5 bg-purple-900 -translate-y-0.5 translate-x-0.5" />
                          <div className="absolute inset-0 bg-purple-900 animate-ping opacity-15" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900/8 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <ExperienceCard item={item} align="left" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}









