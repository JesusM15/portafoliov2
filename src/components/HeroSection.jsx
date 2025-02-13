import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="w-full flex h-screen max-w-full flex-row p-16">
        <article className="flex-1 flex justify-center items-start flex-col">
            <h1 className='text-6xl text-purple-500 purple-glow'>
                Hola, soy Jesus
            </h1>
            <p className="text-purple-300 pt-1 pb-4 text-xl opacity-90">
                Desarrollador Fullstack / Mobile / Wearable devices
            </p>

            <div className='flex gap-8 mt-6'>
                {/* Botón para descargar el CV */}
                <a href="/path-to-your-cv.pdf" download="CV_Jesus.pdf">
                    <button className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition-all ease-in-out duration-300 flex items-center gap-3">
                        <AiOutlineDownload className="text-2xl" />
                        Descargar CV
                    </button>
                </a>

                {/* Enlace a GitHub */}
                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-purple-500 hover:text-purple-700 transition-all ease-in-out duration-300" />
                </a>

                {/* Enlace a LinkedIn */}
                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-purple-500 hover:text-purple-700 transition-all ease-in-out duration-300" />
                </a>
            </div>
        </article>

        {/* Aquí puedes agregar otro contenido en el segundo artículo */}
        <article className="flex-1 bg-blue-500">
            {/* Otro contenido o imagen aquí */}
        </article>
    </section>
  );
}
