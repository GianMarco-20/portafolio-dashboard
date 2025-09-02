// src/pages/Habilidades.jsx
import React from "react";
import { Code, Database, Cpu, Server } from "lucide-react";

const Habilidades = () => {
  const habilidades = [
    {
      nombre: "Programación",
      descripcion: "JavaScript, Python, C++, React, Node.js",
      icono: <Code className="w-8 h-8 text-[#25D366]" />,
    },
    {
      nombre: "Bases de Datos",
      descripcion: "MySQL, PostgreSQL, MongoDB",
      icono: <Database className="w-8 h-8 text-[#25D366]" />,
    },
    {
      nombre: "Sistemas y Redes",
      descripcion: "Administración de redes, Cisco Packet Tracer, NAT, RIP, EIGRP",
      icono: <Server className="w-8 h-8 text-[#25D366]" />,
    },
    {
      nombre: "Hardware y Computación",
      descripcion: "Mantenimiento de PCs, análisis de rendimiento, microprocesadores",
      icono: <Cpu className="w-8 h-8 text-[#25D366]" />,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 px-4 md:px-12 pt-10 pb-16 flex flex-col max-w-6xl mx-auto w-full">
        
        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center md:text-left relative">
          🛠️ Mis Habilidades
          <span className="block w-24 md:w-28 h-1 bg-[#25D366] rounded mt-2 mx-auto md:mx-0"></span>
        </h1>

        {/* Contenedor de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {habilidades.map((hab, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="mb-2">{hab.icono}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {hab.nombre}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{hab.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
