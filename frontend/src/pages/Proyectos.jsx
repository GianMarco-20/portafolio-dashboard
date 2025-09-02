// src/pages/Proyectos.jsx
import React from "react";

const proyectosIndividuales = [
  {
    nombre: "Portafolio Personal",
    descripcion:
      "Dashboard personal con sección de sobre mí, formación, proyectos y contacto.",
    tecnologias: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    imagen: "/images/proyecto1.jpg",
    enlace: "https://github.com/GianMarco-20/portafolio-dashboard",
  },
];

const proyectosGrupales = [
  {
    nombre: "Sistema Web para Taller Mecánico",
    descripcion:
      "Sistema para gestión de clientes, vehículos, servicios y repuestos en un taller mecánico.",
    tecnologias: ["React", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
    imagen: "/images/proyecto2.jpg",
    enlace: "https://github.com/angela142004/sistema-web-taller-mecanico",
  },
  {
    nombre: "Sistema de Ventas Online",
    descripcion:
      "E-commerce desarrollado en equipo con carrito y pasarela de pagos.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    imagen: "/images/proyecto3.jpg",
    enlace: "https://github.com/GianMarco-20/sistema-ventas",
  },
];

const Proyectos = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 px-4 md:px-12 pt-10 pb-16 flex flex-col max-w-6xl mx-auto w-full">
        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center md:text-left relative">
          💻 Mis Proyectos
          <span className="block w-24 md:w-28 h-1 bg-[#25D366] rounded mt-2 mx-auto md:mx-0"></span>
        </h1>

        {/* Secciones de proyectos */}
        <Section
          title="Proyectos Individuales"
          proyectos={proyectosIndividuales}
          extraClass="mb-12" // 🔹 Espacio extra debajo
        />
        <Section title="Proyectos Grupales" proyectos={proyectosGrupales} />
      </div>
    </div>
  );
};

const Section = ({ title, proyectos, extraClass }) => (
  <div className={`flex flex-col gap-4 md:gap-6 ${extraClass || ""}`}>
    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {proyectos.map((proyecto, index) => (
        <ProjectCard key={index} proyecto={proyecto} />
      ))}
    </div>
  </div>
);

const ProjectCard = ({ proyecto }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
    <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-gray-100">
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6 flex flex-col gap-2">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{proyecto.nombre}</h3>
      <p className="text-gray-600 text-sm">{proyecto.descripcion}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {proyecto.tecnologias.map((tec, i) => (
          <span
            key={i}
            className="bg-[#25D366]/20 text-[#25D366] text-xs px-2 py-1 rounded-full font-medium transition-colors duration-300 hover:bg-[#25D366]/30"
          >
            {tec}
          </span>
        ))}
      </div>
      <a
        href={proyecto.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-[#25D366] font-semibold hover:underline"
      >
        Ver en GitHub
      </a>
    </div>
  </div>
);

export default Proyectos;
