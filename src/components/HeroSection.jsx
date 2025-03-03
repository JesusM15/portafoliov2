import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import './HeroSection.css';
import programmingImage from './../assets/jsimage.png';

export default function HeroSection({ ref }) {
  return (
    <section className="w-full flex h-screen flex-row p-16" id="home" ref={ref}>
        <article className="flex-1 flex justify-center items-start flex-col">
            <h1 className='text-7xl text-white font-extrabold tracking-tight pb-2'>
                Hola, soy <span className="text-purple-400 purple-glow">Jesús</span>
            </h1>
            <p className="text-purple-200 text-lg pt-1 pb-4 max-w-2xl text-balance">
                <span className="text-purple-400 purple-glow">Desarrollador Fullstack</span> con experiencia en <span className="text-purple-400 purple-glow">web</span>,
                 <span className="text-purple-400 purple-glow"> mobile</span> y <span className="text-purple-400 purple-glow">dispositivos wearables</span>. 
            </p>

            <div className='flex gap-5 mt-6'>
                <a href="/path-to-your-cv.pdf" download="CV_Jesus.pdf">
                    <button className="text-purple-400 py-2 px-4 rounded-lg hover:bg-purple-600/20 hover:text-purple-200 transition-all
                     ease-in-out duration-300 flex items-center gap-3 shadow-purple-600 shadow-sm  cursor-pointer">
                        <IoMdDownload className="text-2xl" />
                        Descargar CV
                    </button>
                </a>

                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>

                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>
            </div>
        </article>

        <article className="flex-1 flex justify-center items-center">
            <picture className=" opacity-80 max-w-3/4" style={{
                filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))'
            }}>
                <img src={programmingImage} className='' />
            </picture>
        </article>
    </section>
  );
}
