import React from "react"

export default function Input({ onChange, label, placeholder=label, type = 'text', required=false, name, value }){
    return <div className="flex flex-col gap-1 items-start text-slate-300 text-base ">
        <label>{label}{required && ' *'}</label>
        <input 
            className="p-2 px-4 
            focus:border-purple-600 focus:ring-purple-600 outline-0 flex-1 w-full
            border opacity-80 rounded-md  bg-slate-800 border-slate-700 shadow-sm text-slate-300"
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
}