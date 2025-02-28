import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import './HeroSection.css';
import programmingImage from './../assets/hombre_programando.png';

export default function HeroSection() {
  return (
    <section className="w-full flex h-screen flex-row p-16">
        <article className="flex-1 flex justify-center items-start flex-col">
            <h1 className='text-6xl text-purple-500 purple-glow'>
                Hola, soy Jesus
            </h1>
            <p className="text-purple-300 pt-1 pb-4 text-xl opacity-90">
                Desarrollador Fullstack / Mobile / Wearable devices
            </p>

            <div className='flex gap-5 mt-6'>
                <a href="/path-to-your-cv.pdf" download="CV_Jesus.pdf">
                    <button className="text-purple-400 py-2 px-4 rounded-lg hover:bg-purple-600/20 hover:text-white transition-all
                     ease-in-out duration-300 flex items-center gap-3 shadow-purple-600 shadow-sm cursor-pointer">
                        <IoMdDownload className="text-2xl" />
                        Descargar CV
                    </button>
                </a>

                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-purple-400 hover:text-purple-500 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>

                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-purple-400 hover:text-purple-500 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>
            </div>
        </article>

        <article className="flex-1 flex justify-center items-center">
            <picture className="   max-w-3/4 rounded-full bg-gray-950 opacity-70" style={{
            }}>
                <img src={programmingImage} className='p-8' />
            </picture>
        </article>
    </section>
  );
}
