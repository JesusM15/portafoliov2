import React from "react";
import { useTranslation } from "react-i18next";
import './../App.css'
import ExperienceCard from "./Card/ExperienceCard";

const experienceDataES = [
  {
    title: "Full Stack Developer & IoT",
    company: "Geologistic",
    date: "Octubre 2023 - Actualidad",
    description:
      "Desarrollo de plataformas empresariales SaaS (Web, Móvil, Wearable). Diseñé e implementé arquitecturas críticas de seguridad y herramientas de diagnóstico que protegen el modelo de negocio.",
    highlights: [
      "Protección de ingresos: Diseñé un sistema de control de sesiones concurrentes (1 web + 1 móvil por cuenta), previniendo el uso compartido de cuentas y asegurando el modelo de monetización del ERP.",
      "Herramientas de diagnóstico: Implementé un sistema de 'Impersonación' segura para soporte y QA: replica errores en cuentas reales sin comprometer credenciales.",
      "Entorno de staging: Diseñé y desplegué un ambiente de QA completo con clonación de bases de datos y APIs propietarias para replicar bugs de producción.",
      "Tiempo real: Implementé WebSockets para datos en tiempo real y sistemas de notificaciones push personalizadas (Expo + Firebase).",
      "Encabecé el rediseño UI/UX de las plataformas principales mejorando retención de usuarios con dashboards dinámicos.",
      "Integré servicios AWS para gestión masiva de documentos y APIs de terceros para pipelines de datos.",
    ]
  },
  {
    title: "Desarrollador Full Stack (RUF)",
    company: "Geologistic / RUF",
    date: "2023 - Actualidad",
    description:
      "Desarrollo del marketplace y plataforma de gestión RUF (Web, Móvil y Wearable), un sistema de pedidos y asistencia para restaurantes, malls, gimnasios y eventos.",
    highlights: [
      "App standalone en Swift para Apple Watch con login OTP, sockets en tiempo real y notificaciones push (APNs).",
      "Flujo de pickup estilo Walmart: pedidos listos para recoger sin interacción directa del personal.",
      "Integración de códigos QR para atención, validación de pedidos y acciones rápidas.",
      "Sistema de notificaciones push multi-dispositivo (Expo + Firebase) bajo un solo API.",
      "Geolocalización y mapas para detectar negocios cercanos.",
      "Paneles analíticos para toma de decisiones empresariales en tiempo real."
    ]
  },
  {
    title: "Desarrollador Full Stack Por Proyecto",
    company: "Gruas GZ",
    date: "2025",
    description:
      "Desarrollo completo de un CRM móvil para control de inventarios vehiculares: diseño, backend y despliegue en servidor Linux.",
    highlights: [
      "Backend Node/Express + MySQL desplegado en servidor Linux con PM2.",
      "Autenticación JWT, búsqueda multicriterio y actualizaciones OTA.",
      "Configuración y administración de base de datos MySQL en entorno productivo."
    ]
  },
  {
    title: "Desarrollador Frontend (Becario)",
    company: "CastSoft",
    date: "Julio 2023 - Octubre 2023",
    description:
      "Desarrollo de interfaces empresariales bajo metodologías ágiles (Scrum) en entorno .NET.",
    highlights: [
      "Interfaces con Razor, CSS, JavaScript y Bootstrap.",
      "Landing pages, dashboards y frontends con gráficos interactivos."
    ]
  },
  {
    title: "Tutor de Programación",
    company: "Freelance: Universidad Autónoma de Baja California",
    date: "2022 - Actualidad",
    description:
      "Asesoría especializada a estudiantes de ingeniería en estructuras de datos, algoritmos y POO.",
    highlights: [
      "Tutorías en Programación Estructurada en C.",
      "Programación Orientada a Objetos y Estructuras de Datos en Java.",
      "Calificación de prácticas y mentoría en el proceso de aprendizaje."
    ]
  },
  {
    title: "Proyectos Personales / Open Source",
    company: "Autodidacta",
    date: "2020 - Actualidad",
    description:
      "Proyectos experimentales que abarcan fullstack, hardware/IoT y librerías open-source.",
    highlights: [
      "Robot de navegación autónoma: algoritmos PID desde cero, telemetría LoRa +200m y monitoreo 3D con Three.js.",
      "Librerías open-source: django-pulse y pulse-rn, motores de sincronización offline-first con LWW.",
      "PWA académica con arquitectura offline-first (IndexedDB + LWW), orquestada con Docker.",
      "Red social EJChat con WebSockets, carga progresiva y Redis para escalabilidad.",
      "Experimentación con ESP32, Arduino, I2C, MQTT y comunicación Serial."
    ]
  },
  {
    title: "Ingeniería en Computación",
    company: "Universidad Autónoma de Baja California",
    date: "2022 - Graduación prevista: Nov 2026",
    description: ""
  }
];


const experienceDataEN = [
  {
    title: "Full Stack Developer & IoT",
    company: "Geologistic",
    date: "October 2023 - Present",
    description:
      "Development of SaaS enterprise platforms (Web, Mobile, Wearable). Designed and implemented critical security architectures and diagnostic tools that protect the business model.",
    highlights: [
      "Revenue Protection: Designed a concurrent session control system (1 web + 1 mobile per account), preventing account sharing and securing the ERP monetization model.",
      "Diagnostic Tools: Implemented a secure 'Impersonation' system for support & QA: replicates real account errors without compromising credentials.",
      "Staging Environment: Designed and deployed a complete QA environment with database cloning and proprietary APIs to replicate production bugs in isolation.",
      "Real-time: Implemented WebSockets for live data and custom push notification systems (Expo + Firebase).",
      "Led UI/UX redesign of main platforms, improving user retention with dynamic dashboards.",
      "Integrated AWS services for bulk document management and third-party APIs for data pipelines.",
    ]
  },
  {
    title: "Full Stack Developer (RUF)",
    company: "Geologistic / RUF",
    date: "2023 - Present",
    description:
      "Development of the RUF marketplace and management platform (Web, Mobile & Wearable), an order and assistance system for restaurants, malls, gyms, and events.",
    highlights: [
      "Standalone Swift Apple Watch app with OTP login, real-time sockets, and APNs push notifications.",
      "Walmart-style pickup flow: orders ready for pickup without direct staff interaction.",
      "QR code integration for service access, order validation, and quick actions.",
      "Multi-device push notification system (Expo + Firebase) via a single API.",
      "Geolocation and maps to detect nearby businesses.",
      "Real-time analytics dashboards for business decision-making."
    ]
  },
  {
    title: "Full Stack Developer on Project Basis",
    company: "Gruas GZ",
    date: "2025",
    description:
      "End-to-end development of a mobile CRM for vehicle inventory control: UI design, backend, and Linux server deployment.",
    highlights: [
      "Node/Express + MySQL backend deployed on Linux server with PM2.",
      "JWT authentication, multi-criteria search, and OTA updates.",
      "MySQL database configuration and production environment setup."
    ]
  },
  {
    title: "Frontend Developer (Intern)",
    company: "CastSoft",
    date: "July 2023 - October 2023",
    description:
      "Development of enterprise UIs using Agile/Scrum in a .NET environment.",
    highlights: [
      "Interfaces built with Razor, CSS, JavaScript, and Bootstrap.",
      "Landing pages, dashboards, and enterprise frontends with interactive charts."
    ]
  },
  {
    title: "Programming Tutor",
    company: "Freelance: Universidad Autónoma de Baja California",
    date: "2022 - Present",
    description:
      "Specialized tutoring for engineering students in data structures, algorithms, and OOP.",
    highlights: [
      "Tutoring in Structured Programming in C.",
      "Object-Oriented Programming and Data Structures in Java.",
      "Grading assignments and mentoring students through their learning process."
    ]
  },
  {
    title: "Personal Projects / Open Source",
    company: "Self-taught",
    date: "2020 - Present",
    description:
      "Experimental projects spanning fullstack, hardware/IoT, and open-source libraries.",
    highlights: [
      "Autonomous navigation robot: PID algorithms from scratch, LoRa telemetry +200m, 3D monitoring with Three.js.",
      "Open-source: django-pulse and pulse-rn, offline-first sync engines with LWW conflict resolution.",
      "Academic PWA with offline-first architecture (IndexedDB + LWW), orchestrated with Docker.",
      "EJChat social network with WebSockets, progressive loading, and Redis for scalability.",
      "Experimentation with ESP32, Arduino, I2C, MQTT, and Serial communication."
    ]
  },
  {
    title: "Computer Engineering",
    company: "Universidad Autónoma de Baja California",
    date: "2022 - Expected graduation: Nov 2026",
    description: ""
  }
];



export default function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const experienceData = i18n.language == "es" ? experienceDataES : experienceDataEN;

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

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}









