import React from "react";
import ilustration from './../assets/3dilus.png';
import './../App.css'
import { useTranslation } from "react-i18next";
export default function AboutMeSection() {
  const { t } = useTranslation();
  return (
    <section id="about_me" className="py-12 px-4  text-white h-screen flex justify-items-center soft-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src={ilustration}
            alt="Foto de Jesus M"
            className="rounded-full w-64 h-64 object-cover mx-auto"
            loading="lazy"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t("about_me")}</h2>
          <p className="lg:text-base text-sm text-gray-300 mb-4">
            {t("about_me_section.p1")}
          </p>
          <p className="lg:text-base text-sm text-gray-300 mb-4">
            {t("about_me_section.p2")}
          </p>
          <p className="lg:text-base text-sm text-gray-300">
            {t("about_me_section.p3")}
          </p>
        </div>
      </div>
    </section>
  );
}


