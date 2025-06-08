import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import './HeroSection.css';
import programmingImage from './../assets/jsimage.png';
import nebulosa from './../assets/nebulosa.png';
import astronaut from './../assets/astronaut.png';

export default function HeroSection({ ref }) {
  return (
    <section className="w-full flex h-screen lg:flex-row flex-col lg:p-16 p-8 relative" id="home" ref={ref}>
        <div
className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 blur-md pointer-events-none"
style={{
      backgroundImage: `url(${nebulosa})`,
    }}></div>
    <div className="absolute inset-0 pointer-events-none z-0"
     style={{
       background: 'linear-gradient(to bottom, rgba(1,1,1,0) 60%, #000 100%)',
     }}
/>
        <article className="lg:flex-initial flex-1 flex justify-center items-center lg:items-start flex-col">
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

                <a href="https://github.com/JesusM15" target="_blank" rel="noopener noreferrer">
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

        <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
                {[...Array(30)].map((_, i) => (
                    <div
                    key={i}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${3 + Math.random() * 5}s`,
                    }}
                    />
                ))}
                </div>

                <article className="flex-1 flex justify-center items-center relative">
                    <img
                        src={astronaut}
                        className="h-64 absolute floatRotateForward astronaut-glow glow"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    />
                </article>
    </section>
  );
}
