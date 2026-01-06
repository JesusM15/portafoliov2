import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import "./../App.css";
import Input from "./Input";
import { IoIosSend } from "react-icons/io";
import ContactCard from "./Card/ContactCard";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const toastTimerRef = useRef(null);

  const showToast = (type, message) => {
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
        showToast("success", `${t('contact_section.success')}.`);
        form.reset();
      } else {
        showToast("error", `${t('contact_section.error_tryag')}.`);
      }
    } catch (err) {
      showToast("error", "Hubo un error de red. Revisa tu conexión e intenta otra vez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="soft-background py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-center" id="contact_me">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2">
        {t("contact_section.title")}
      </h3>
      <p className="text-base sm:text-lg md:text-xl opacity-90 text-gray-300 pb-6 max-w-2xl mx-auto">
        {t("contact_section.subtitle")}
      </p>

      <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto pt-4 sm:pt-6">
        {/* Formulario */}
        <form
          onSubmit={onSubmit}
          className="flex-1 flex flex-col gap-4 bg-slate-900/80 rounded-lg border border-slate-700 p-4 sm:p-6 md:p-8 w-full shadow-xl"
        >
          <Input
            label={t('contact_section.name')}
            required
            name="name"
            placeholder={t('contact_section.name_placeholder')}
          />
          <Input
            label={"Email"}
            type={"email"}
            required
            name="email"
            placeholder={"example@gmail.com"}
          />
          <Input
            label={t('contact_section.company')}
            placeholder={t('contact_section.company_placeholder')}
            name="company"
          />

          <div className="flex flex-col gap-1 items-start text-slate-300 text-sm sm:text-base">
            <label>{t("contact_section.message")} *</label>
            <textarea
              className="p-3 px-4 focus:border-purple-600 focus:ring-purple-600 outline-0 flex-1 w-full border opacity-80 rounded-md min-h-28 sm:min-h-32 bg-slate-800 border-slate-700 shadow-sm text-slate-300 resize-none transition-all"
              placeholder={t('contact_section.message_placeholder')}
              name="message"
              required
            />
          </div>

          <button
            className={[
              "flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer outline-0",
              "bg-gradient-to-r from-rose-500 via-purple-500 to-purple-600 px-4 py-2.5 sm:py-3 rounded-md",
              "transition-all font-medium",
              loading
                ? "opacity-50 cursor-not-allowed grayscale"
                : "hover:brightness-110 active:scale-[0.99]",
            ].join(" ")}
            type="submit"
            disabled={loading}
          >
            <IoIosSend className="text-xl sm:text-2xl" />
            {loading ? `${t('contact_section.sending')}...` : t('contact_section.send_message')}
          </button>
        </form>

        <section className="flex-1 flex flex-col w-full">
          <h3 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4 text-left">
            {t('contact_section.information')}
          </h3>
          
          <section className="flex flex-col gap-3 sm:gap-4">
            <ContactCard
              title={"Email"}
              info={"guerrajesusm72@gmail.com"}
              Icon={<AiOutlineMail className="text-purple-400" />}
            />
            <ContactCard
              title={t('location')}
              info={"Mexicali, Baja California, México."}
              Icon={<LuMapPin className="text-purple-400" />}
            />
          </section>

          <section className="mt-6 sm:mt-8">
            <h6 className="text-lg sm:text-xl font-bold pb-3 sm:pb-4 text-left">
              {t('contact_section.social_networks')}
            </h6>
            <div className="flex gap-5 sm:gap-6 items-center justify-start">
              <a 
                href="https://github.com/JesusM15" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub 
                  className="text-3xl sm:text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                  style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} 
                />
              </a>

              <a 
                href="https://www.linkedin.com/in/jesus-manuel-perez-guerra-235260229" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin 
                  className="text-3xl sm:text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                  style={{ filter: 'drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))' }} 
                />
              </a>
            </div>
          </section>
        </section>
      </section>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-[9999]">
          <div
            className={[
              "flex items-start gap-3",
              "w-full sm:min-w-[280px] sm:max-w-[360px]",
              "rounded-xl border",
              "bg-slate-900/95 backdrop-blur-md",
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
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-white">
                {toast.type === "success" ? t('contact_section.ready') : "Ups"}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={closeToast}
              className="ml-auto text-gray-300 hover:text-white transition shrink-0"
              aria-label="Cerrar notificación"
              title="Cerrar"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* Barra de progreso */}
          <div className="mt-2 h-1 rounded-full overflow-hidden bg-white/10">
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