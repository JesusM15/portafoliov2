import React from "react"
import { useTranslation } from "react-i18next";

import './../App.css'
import Input from "./Input";
import { IoIosSend } from "react-icons/io";
import ContactCard from "./Card/ContactCard";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

export default function ContactSection(){
    const { t } = useTranslation();
    const [ result, setResult ] = useState();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const company = formData.get('company');

        if(company){
            formData.set('name', `${formData.get('name')} - ${company}`);
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success  ? "Success" : "Error");
    }
    
    return <section className=" soft-background py-24 px-4  text-center" id="contact_me">
        <h3 className="text-5xl font-bold pb-2">
            {t('contact_section.title')}
        </h3>
        <p className="text-xl opacity-90 text-gray-300 pb-6">
            {t("contact_section.subtitle")}
        </p>

        <section className="flex gap-4 px-4 pt-6">
            <form 
            onSubmit={onSubmit}
            className="flex-1 flex flex-col gap-4 bg-slate-900/80 rounded-sm border border-slate-700 p-6 pt-8 w-full">
                <Input 
                    label={'Nombre'}   
                    required
                    name="name"
                    placeholder={'Escribe tu nombre aquí'}
                />
                <Input 
                    label={'Email'} 
                    type={'email'}  
                    required
                    name="email"
                    placeholder={'example@gmail.com'}
                />
                <Input 
                    label={'Empresa/Organización'} 
                    placeholder={'Nombre de tu empresa (opcional)'}
                    name="company"
                />

                <div className="flex flex-col gap-1 items-start text-slate-300 text-base ">
                    <label>Mensaje *</label>
                    <textarea  className="p-2 px-4 
            focus:border-purple-600 focus:ring-purple-600 outline-0 flex-1 w-full
            border opacity-80 rounded-md min-h-24  bg-slate-800 border-slate-700 shadow-sm text-slate-300 resize-none"
                    placeholder="Escribe tu mensaje aquí"
                     name="message"
            >

                    </textarea>
                </div>

                <button className="
                flex items-center justify-center gap-2 text-md cursor-pointer outline-0
                bg-gradient-to-r from-rose-500 via-purple-500 to-purple-600 px-2 py-2.5 rounded-md " type="submit">
                    <IoIosSend className="text-2xl" />
                    Enviar mensaje
                </button>
            </form>
            <section className="flex-1 flex-col w-full flex px-6">
                <h3 className="text-xl font-bold pb-2">
                    Información de contacto
                </h3>
                <section className="flex flex-col gap-4">
                    <ContactCard 
                        title={'Email'}
                        info={'guerrajesusm72@gmail.com'}
                        Icon={<AiOutlineMail className="text-purple-400" />}
                    />
                    <ContactCard 
                        title={'Teléfono'}
                        info={'XXX XXX XXXX'}
                        Icon={<FiPhone className="text-purple-400" />}
                    />
                    <ContactCard 
                        title={'Ubicación'}
                        info={'Mexicali, Baja California, México.'}
                        Icon={<LuMapPin  className="text-purple-400" />}
                    />
                </section>
                <section>
                    <h6 className="text-xl font-bold pb-2 pt-4">
                        Redes sociales
                    </h6>
                    <div>
                        
                    </div>
                </section>
            </section>
        </section>
    </section>
}