import React from "react"
import { FaPlus } from "react-icons/fa6";


export default function Metrics({
    number,
    plus = true,
    label,
}){

    return <div>
        <b className="flex items-center text-3xl font-bold">
            {number} <FaPlus className="text-xl" />
        </b>
        <p className="text-sm opacity-80 text-gray-100">
            {label}
        </p>
    </div>
}