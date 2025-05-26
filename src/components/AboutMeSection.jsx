import React from "react";
import ilustration from './../assets/3dilus.png';
import './../App.css'

export default function AboutMeSection() {
  return (
    <section id="about_me" className="py-12 px-4  text-white h-screen flex justify-items-center soft-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen personal */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src={ilustration}
            alt="Foto de Jesus M"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        {/* Texto descriptivo */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-gray-300 mb-4">
            Soy un desarrollador fullstack apasionado por la tecnología y la innovación. Me encanta crear aplicaciones escalables y resolver problemas complejos a través del código. Con experiencia en React, Node.js, Django y otras tecnologías, he trabajado tanto en proyectos profesionales como en desarrollos personales que van desde sistemas de notificaciones push hasta aplicaciones en tiempo real y juegos online.
          </p>
          <p className="text-gray-300 mb-4">
            Siempre busco nuevos retos que me permitan aprender y crecer, manteniéndome al día con las últimas tendencias del desarrollo web y móvil. Disfruto colaborando con equipos multidisciplinarios para crear soluciones que marquen la diferencia.
          </p>
          <p className="text-gray-300">
            Mi objetivo es seguir desarrollando proyectos que combinen diseño, funcionalidad y rendimiento, contribuyendo al avance de la tecnología a través de la innovación.
          </p>
        </div>
      </div>
    </section>
  );
}


