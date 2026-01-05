import React from "react"
import { FaPlus } from "react-icons/fa6";


export default function Metrics({
    number,
    plus = true,
    label,
}){

    return <div>
        <b className="flex items-center text-xl md:text-3xl font-bold">
            {number} <FaPlus className="md:text-xl text-sm" />
        </b>
        <p className="text-xs md:text-sm opacity-80 text-gray-100">
            {label}
        </p>
    </div>
}