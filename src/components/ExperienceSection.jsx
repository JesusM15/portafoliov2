import React from "react";


/**
 * Datos de experiencia con información actualizada.
 * Reemplaza o ajusta los datos según necesites.
 */
const experienceData = [
  {
    title: "Fullstack Developer",
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
    title: "Frontend Developer",
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
    "Imparto tutorías y ayudantías en la materia de Programación Estructurada en C y Programación Orientada a Objetos en Java, así como calificando trabajos y prácticas, y apoyando a los alumnos en su proceso de aprendizaje."
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


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-4 text-white ">
      <div className="max-w-5xl mx-auto">
        {/* Título principal de la sección */}
        <h2 className="text-3xl font-bold mb-8">Experiencia</h2>


        {/* Contenedor principal de la línea de tiempo */}
        <div className="relative border-l border-gray-600 pl-8">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 ml-4 relative">
              {/* Punto circular en la línea */}
              <div className="absolute w-3 h-3 bg-purple-600/80 rounded-full -left-[20px] mt-1.5"></div>
              
              {/* Título del puesto */}
              <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
              
              {/* Empresa */}
              <span className="text-sm text-gray-400 block mb-1">{item.company}</span>
              
              {/* Fechas */}
              <span className="text-sm text-gray-400 block mb-1">{item.date}</span>
              
              {/* Descripción */}
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











