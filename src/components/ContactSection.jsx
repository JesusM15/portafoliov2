import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import "./../App.css";
import Input from "./Input";
import { IoIosSend } from "react-icons/io";
import ContactCard from "./Card/ContactCard";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // <-- NUEVO
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ContactSection() {
  const { t } = useTranslation();

  // NUEVO: loading + toast
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); 
  // toast: { type: "success" | "error", message: string }

  const toastTimerRef = useRef(null);

  const showToast = (type, message) => {
    // limpia timer anterior si existe
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

    setToast({ type, message });

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 3000);
  };

  const closeToast = () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = null;
    setToast(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const form = event.target;
      const formData = new FormData(form);

      formData.append("access_key", "1d01e2b8-3dc7-4f63-928c-8a915c0ecc49");
      const company = formData.get("company");

      if (company) {
        formData.set("name", `${formData.get("name")} - ${company}`);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data?.success) {
        showToast("success", "¡Mensaje enviado! Te responderé pronto.");
        form.reset(); // opcional: limpia campos al éxito
      } else {
        showToast("error", "No se pudo enviar. Intenta de nuevo en unos segundos.");
      }
    } catch (err) {
      showToast("error", "Hubo un error de red. Revisa tu conexión e intenta otra vez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="soft-background py-24 px-4 text-center" id="contact_me">
      <h3 className="text-5xl font-bold pb-2">{t("contact_section.title")}</h3>
      <p className="text-xl opacity-90 text-gray-300 pb-6">
        {t("contact_section.subtitle")}
      </p>

      <section className="flex gap-12 px-4 pt-6 lg:flex-row flex-col">
        <form
          onSubmit={onSubmit}
          className="flex-1 flex flex-col gap-4 bg-slate-900/80 rounded-sm border border-slate-700 p-6 pt-8 w-full"
        >
          <Input
            label={"Nombre"}
            required
            name="name"
            placeholder={"Escribe tu nombre aquí"}
          />
          <Input
            label={"Email"}
            type={"email"}
            required
            name="email"
            placeholder={"example@gmail.com"}
          />
          <Input
            label={"Empresa/Organización"}
            placeholder={"Nombre de tu empresa (opcional)"}
            name="company"
          />

          <div className="flex flex-col gap-1 items-start text-slate-300 text-base ">
            <label>Mensaje *</label>
            <textarea
              className="p-2 px-4 focus:border-purple-600 focus:ring-purple-600 outline-0 flex-1 w-full border opacity-80 rounded-md min-h-24 bg-slate-800 border-slate-700 shadow-sm text-slate-300 resize-none"
              placeholder="Escribe tu mensaje aquí"
              name="message"
              required
            />
          </div>

          <button
            className={[
              "flex items-center justify-center gap-2 text-md cursor-pointer outline-0",
              "bg-gradient-to-r from-rose-500 via-purple-500 to-purple-600 px-2 py-2.5 rounded-md",
              "transition-all",
              loading
                ? "opacity-50 cursor-not-allowed grayscale"
                : "hover:brightness-110 active:scale-[0.99]",
            ].join(" ")}
            type="submit"
            disabled={loading}
          >
            <IoIosSend className="text-2xl" />
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <section className="flex-1 flex-col w-full flex px-6">
          <h3 className="text-xl font-bold pb-2">Información de contacto</h3>
          <section className="flex flex-col gap-4">
            <ContactCard
              title={"Email"}
              info={"guerrajesusm72@gmail.com"}
              Icon={<AiOutlineMail className="text-purple-400" />}
            />
            {/* <ContactCard
              title={"Teléfono"}
              info={"XXX XXX XXXX"}
              Icon={<FiPhone className="text-purple-400" />}
            /> */}
            <ContactCard
              title={"Ubicación"}
              info={"Mexicali, Baja California, México."}
              Icon={<LuMapPin className="text-purple-400" />}
            />
          </section>

          <section>
            <h6 className="text-xl font-bold pb-2 pt-4">Redes sociales</h6>
            <div className="flex gap-5 mt-6 items-center justify-center">
                <a href="https://github.com/JesusM15" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>

                <a href="https://www.linkedin.com/in/jesus-manuel-perez-guerra-235260229" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 
                    transition-all ease-in-out duration-300 cursor-pointer"
                    style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} />
                </a>
            </div>
          </section>
        </section>
      </section>

      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div
            className={[
              "flex items-start gap-3",
              "min-w-[280px] max-w-[360px]",
              "rounded-xl border",
              "bg-slate-900/70 backdrop-blur-md",
              "shadow-[0_18px_55px_rgba(0,0,0,0.55)]",
              "px-4 py-3",
              toast.type === "success"
                ? "border-emerald-500/30"
                : "border-rose-500/30",
            ].join(" ")}
          >
            <div
              className={[
                "mt-1 h-2.5 w-2.5 rounded-full shrink-0",
                toast.type === "success" ? "bg-emerald-400" : "bg-rose-400",
              ].join(" ")}
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">
                {toast.type === "success" ? "Listo" : "Ups"}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={closeToast}
              className="ml-auto text-gray-300 hover:text-white transition"
              aria-label="Cerrar notificación"
              title="Cerrar"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* barra de progreso de 3s (opcional, se ve pro) */}
          <div
            className={[
              "mt-2 h-1 rounded-full overflow-hidden",
              "bg-white/10",
            ].join(" ")}
          >
            <div
              className={[
                "h-full w-full",
                toast.type === "success" ? "bg-emerald-400/80" : "bg-rose-400/80",
                "animate-[shrink_3s_linear_forwards]",
              ].join(" ")}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes shrink {
          from { transform: translateX(0%); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
