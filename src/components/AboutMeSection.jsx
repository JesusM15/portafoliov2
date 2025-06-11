import React from "react";
import ilustration from './../assets/3dilus.png';
import './../App.css'

export default function AboutMeSection() {
  return (
    <section id="about_me" className="py-12 px-4  text-white h-screen flex justify-items-center soft-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src={ilustration}
            alt="Foto de Jesus M"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Acerca de mí</h2>
          <p className="lg:text-base text-sm text-gray-300 mb-4">
            Soy Jesús Manuel Pérez Guerra. Comencé a programar a los 15 años y desde entonces decidí hacer de la programación mi camino profesional. Actualmente me desempeño como Desarrollador Fullstack, creando soluciones web, móviles y para dispositivos wearables. Además, imparto tutorías en mi universidad en materias como Programación Estructurada, POO, Algoritmos y Estructuras de Datos, en C y principalmente en Java para las últimas 2 materias.
          </p>
          <p className="lg:text-base text-sm text-gray-300 mb-4">
            Fuera de la programación disfruto de la música, los videojuegos y estoy aprendiendo a tocar el piano actualmente.
          </p>
          <p className="lg:text-base text-sm text-gray-300">
            Mi objetivo como desarrollador es seguir creciendo profesionalmente, reforzando mis habilidades y aprendiendo nuevas cuando sea necesario. Disfruto de poder resolver problemas y retos mediante la programación.
          </p>
        </div>
      </div>
    </section>
  );
}


