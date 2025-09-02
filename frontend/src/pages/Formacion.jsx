// src/pages/Formacion.jsx
import React from "react";
import { FaBook, FaGraduationCap, FaUniversity } from "react-icons/fa";

const Formacion = () => {
  const primaria = [
    {
      nombre: "Colegio Apostol San Pedro",
      descripcion: "1º a 6º grado",
      ubicacion: "Mala, Cañete, Lima, Perú",
      periodo: "2010 - 2015",
      icono: <FaBook size={20} />,
      color: "bg-blue-100 text-blue-600",
      logo: "/images/logo-primaria.png",
    },
  ];

  const secundaria = [
    {
      nombre: "Colegio Apostol San Pedro",
      descripcion: "1º a 4º grado",
      ubicacion: "Mala, Cañete, Lima, Perú",
      periodo: "2016 - 2019",
      icono: <FaGraduationCap size={20} />,
      color: "bg-green-100 text-green-600",
      logo: "/images/logo-secundaria.png",
    },
    {
      nombre: "Colegio Dionicio Manco Campos",
      descripcion: "5º grado",
      ubicacion: "Mala, Cañete, Lima, Perú",
      periodo: "2020",
      icono: <FaGraduationCap size={20} />,
      color: "bg-yellow-100 text-yellow-600",
      logo: "/images/logo-secundaria2.png",
    },
  ];

  const universidad = [
    {
      nombre: "Universidad Nacional de Cañete",
      descripcion: "Inicio de estudios en Ingeniería de Sistemas",
      ubicacion: "San Vicente de Cañete, Lima, Perú",
      periodo: "2022 - Presente",
      icono: <FaUniversity size={20} />,
      color: "bg-purple-100 text-purple-600",
      logo: "/images/logo-universidad.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 px-4 md:px-12 pt-10 pb-16 flex flex-col max-w-6xl mx-auto w-full">

        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center md:text-left relative">
          📚 Mi Educación y Formación
          <span className="block w-24 md:w-28 h-1 bg-[#25D366] rounded mt-2 mx-auto md:mx-0"></span>
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-6 md:left-10 top-0 w-1 bg-gray-300 h-full rounded"></div>

          {/* Secciones */}
          <Section title="Educación Primaria" items={primaria} />
          <Section title="Educación Secundaria" items={secundaria} />
          <Section title="Universidad" items={universidad} />
        </div>
      </div>
    </div>
  );
};

// Componente Sección
const Section = ({ title, items }) => (
  <div className="flex flex-col mb-12">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 pl-16 md:pl-28 mb-6">
      {title}
    </h2>
    <div className="flex flex-col gap-8">
      {items.map((etapa, index) => (
        <TimelineItem key={index} etapa={etapa} />
      ))}
    </div>
  </div>
);

// TimelineItem
const TimelineItem = ({ etapa }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative pl-20 md:pl-28">
    {/* Icono */}
    <div
      className={`absolute left-0 md:left-0 top-1 w-12 h-12 flex items-center justify-center rounded-full shadow-md ${etapa.color}`}
    >
      {etapa.icono}
    </div>

    {/* Tarjeta */}
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full md:flex md:justify-between items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex-1 flex flex-col gap-1 md:pr-4">
        <p className="text-gray-800 font-semibold text-lg">{etapa.nombre}</p>
        <p className="text-gray-600 text-sm md:text-base">{etapa.descripcion}</p>
        <p className="text-gray-500 text-sm md:text-base">{etapa.ubicacion}</p>
        <p className="text-gray-500 font-medium text-sm md:text-base">{etapa.periodo}</p>
      </div>

      {etapa.logo && (
        <img
          src={etapa.logo}
          alt={etapa.nombre}
          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl ml-0 md:ml-6 mt-4 md:mt-0"
        />
      )}
    </div>
  </div>
);

export default Formacion;
