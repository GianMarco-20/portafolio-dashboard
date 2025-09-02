// src/pages/SobreMi.jsx
import React from "react";
import { FaReact, FaPython, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiTensorflow } from "react-icons/si";

const SobreMi = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 px-4 md:px-12 pt-8 pb-12 flex flex-col gap-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row w-full gap-8">

          {/* FOTO + NOMBRE */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 flex-shrink-0">
            <img
              src="/images/mi-foto.JPG"
              alt="Mi foto"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#25D366] shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 transition-transform duration-300 hover:translate-y-1">Gian Marco</h1>
              <p className="text-[#25D366] font-medium mt-1 text-lg">Ingeniero de Sistemas</p>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="flex-1 flex flex-col gap-6 w-full md:w-2/3">

            {/* DESCRIPCIÓN */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Sobre mí</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Soy estudiante de Ingeniería de Sistemas con experiencia en desarrollo web, análisis de datos y gestión de bases de datos. He participado en cursos y conferencias sobre Excel avanzado, marketing digital con inteligencia artificial, innovación tecnológica y desarrollo de software. Me apasiona crear soluciones tecnológicas que mejoren procesos y contribuyan positivamente a la comunidad, siempre aprendiendo y participando en proyectos que me desafíen profesionalmente.
              </p>
            </div>

            {/* DATOS PERSONALES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard label="Nombre completo" value="Gian Marco Castañeda Caycho" />
              <InfoCard label="Edad" value="21 años" />
              <InfoCard label="Ubicación" value="Mala, Cañete, Lima, Perú" />
              <InfoCard label="Email" value="75040140gm20@gmail.com" />
            </div>

            {/* HABILIDADES */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habilidades</h2>

              {/* Frontend */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <SkillBadge name="React" color="green" icon={<FaReact size={16} />} />
                <SkillBadge name="TailwindCSS" color="blue" icon={<SiTailwindcss size={16} />} />
                <SkillBadge name="HTML" color="orange" icon={<SiHtml5 size={16} />} />
                <SkillBadge name="CSS" color="purple" icon={<SiCss3 size={16} />} />
                <SkillBadge name="JavaScript" color="yellow" icon={<SiJavascript size={16} />} />
              </div>

              {/* Backend / ML */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">Backend / ML</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <SkillBadge name="Python" color="blue" icon={<FaPython size={16} />} />
                <SkillBadge name="Machine Learning" color="red" icon={<SiTensorflow size={16} />} />
                <SkillBadge name="Bases de datos" color="teal" icon={<FaDatabase size={16} />} />
              </div>

              {/* Herramientas */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">Herramientas</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" color="gray" icon={null} />
                <SkillBadge name="GitHub" color="black" icon={<FaGithub size={16} />} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col min-w-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-gray-900 font-medium truncate">{value}</span>
  </div>
);

const SkillBadge = ({ name, color, icon }) => {
  const colors = {
    green: "bg-green-100 text-green-600 hover:bg-green-200",
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    red: "bg-red-100 text-red-600 hover:bg-red-200",
    yellow: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
    orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
    purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    teal: "bg-teal-100 text-teal-600 hover:bg-teal-200",
    gray: "bg-gray-100 text-gray-600 hover:bg-gray-200",
    black: "bg-black text-white hover:bg-gray-800"
  };

  return (
    <span className={`flex items-center gap-1 px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap transform transition-transform duration-200 hover:scale-110 shadow-sm ${colors[color] || "bg-[#25D366]/10 text-[#25D366]"}`}>
      {icon && <span>{icon}</span>}
      {name}
    </span>
  );
};

export default SobreMi;
