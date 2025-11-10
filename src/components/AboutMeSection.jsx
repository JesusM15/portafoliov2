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
          <h2 className="text-3xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-gray-300 mb-4">
            Soy un Desarrollador Fullstack apasionado por la tecnologia, especialmente por el desarrollo de software, comence a programar a mis 15 años lo que me hizo desarrollar una pasion por este mundo y la resolucion de problemas
          </p>
          <p className="text-gray-300">
            Mi objetivo como desarrollador es innovar o mejorar aspectos ya existentes.
          </p>
        </div>
      </div>
    </section>
  );
}


