import React from 'react';

import { TbBrandAstro } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import teslaLanding from "./../../assets/teslalanding.png";

let proyects = [
  {
    name: 'Tesla landing',
    link: 'https://64f2a7ff7209f032f9b91def--astonishing-choux-8a470f.netlify.app/',
    image: teslaLanding,
    description: 'loremp loremp lorem loremp lorem loremp'
  }
];

const proyect = proyects[0];

export default function Card() {
  return (
    <article
      className="h-auto pb-6 w-md rounded-2xl"
      style={{
        backgroundColor: '#101010'
      }}
    >
      <div className='relative'>
        <div className='bg-purple-900/90 absolute bottom-0 px-2 pt-1 flex gap-1 justify-center items-center text-sm'>
            <FaUser />
            <p className='p-0'>
                Personal
            </p>
        </div>
        <img
          src={proyect.image}
          className="h-56 w-full object-cover rounded-t-xl"
          alt={`${proyect.name} hecho por JesusM15`}
        />
      </div>

      <div className="p-3 text-white">
        <h6 className="font-semibold text-lg">
          <b>{proyect.name}</b>
        </h6>
        <p className="opacity-70 pt-0.5">
          {proyect.description}
        </p>

        <ul className="flex gap-2 mt-2">
          {/* Ejemplo de tag con hover y opacidad */}
          <li
            className="
              flex items-center gap-1
              px-2 py-1
              rounded
              border border-purple-600
              text-purple-600
              bg-purple-600/20  /* Fondo morado muy claro */
              transition-colors duration-300
              hover:bg-purple-600/40   /* Al hover se pone más oscuro */
              hover:text-white
            "
          >
            <TbBrandAstro className="opacity-100" color="orange"/>
            Astro
          </li>

          {/* Puedes replicar más tags si lo deseas */}
          <li
            className="
              flex items-center gap-1
              px-2 py-1
              rounded
              border border-purple-600
              text-purple-600
              bg-purple-600/20
              transition-colors duration-300
              hover:bg-purple-600/40
              hover:text-white
            "
          >
            <RiTailwindCssFill color="cyan"/>
            TailwindCSS
          </li>
        </ul>
      </div>
    </article>
  );
}
