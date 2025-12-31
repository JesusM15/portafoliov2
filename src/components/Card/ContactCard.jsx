import React from "react";

export default function ContactCard({ title, info, Icon }){

    return <a className="flex gap-4
        transition-all duration-100 border border-transparent
    text-slate-300 hover:text-purple-400 bg-slate-800/80 flex-1 p-4 rounded-md hover:border hover:border-purple-600 cursor-pointer ">
        <div className="p-4 flex text-xl items-center justify-center bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
            {Icon}
        </div>
        <div className="flex flex-col items-start">
            <h5 className=" text-base opacity-90">
                {title}
            </h5>
            <p className="font-bold text-white text-base">
                {info}
            </p>
        </div>
    </a>
}