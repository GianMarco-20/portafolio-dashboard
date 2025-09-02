// src/pages/Habilidades.jsx
import React from "react";
import { Code, Database, Cpu, Server, BarChart, Globe, FileText } from "lucide-react";

const Habilidades = () => {
  const habilidades = [
    {
      nombre: "Programación",
      descripcion: "JavaScript, Python, C++, React, Node.js. Buenas prácticas y tendencias en desarrollo de software.",
      icono: <Code className="w-10 h-10 text-[#25D366]" />,
      color: "bg-green-50",
      nivel: "Avanzado",
    },
    {
      nombre: "Bases de Datos",
      descripcion: "MySQL, PostgreSQL, MongoDB. Gestión de datos y análisis avanzado (Excel, Tablas y Gráficos Dinámicos).",
      icono: <Database className="w-10 h-10 text-[#25D366]" />,
      color: "bg-blue-50",
      nivel: "Intermedio",
    },
    {
      nombre: "Sistemas y Redes",
      descripcion: "Administración de redes, Cisco Packet Tracer, NAT, RIP, EIGRP. Fundamentos de seguridad y configuración de routers.",
      icono: <Server className="w-10 h-10 text-[#25D366]" />,
      color: "bg-purple-50",
      nivel: "Intermedio",
    },
    {
      nombre: "Hardware y Computación",
      descripcion: "Mantenimiento de PCs, análisis de rendimiento, microprocesadores. Aplicación práctica en laboratorios y proyectos.",
      icono: <Cpu className="w-10 h-10 text-[#25D366]" />,
      color: "bg-yellow-50",
      nivel: "Básico",
    },
    {
      nombre: "Excel Intermedio",
      descripcion: "Funciones de Excel, gestión de datos, tablas y gráficos dinámicos, validación y protección de datos.",
      icono: <BarChart className="w-10 h-10 text-[#25D366]" />,
      color: "bg-green-100",
      nivel: "Intermedio",
    },
    {
      nombre: "Marketing Digital con IA",
      descripcion: "Análisis de datos y optimización de campañas usando Inteligencia Artificial.",
      icono: <Globe className="w-10 h-10 text-[#25D366]" />,
      color: "bg-blue-100",
      nivel: "Básico",
    },
    {
      nombre: "Investigación Científica",
      descripcion: "Actualización y difusión científica en ingeniería de sistemas.",
      icono: <FileText className="w-10 h-10 text-[#25D366]" />,
      color: "bg-purple-100",
      nivel: "Intermedio",
    },
    {
      nombre: "Software de Desarrollo",
      descripcion: "Tendencias, herramientas y buenas prácticas en desarrollo de software.",
      icono: <Code className="w-10 h-10 text-[#25D366]" />,
      color: "bg-yellow-100",
      nivel: "Intermedio",
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
              className={`rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 ${hab.color}`}
            >
              <div className="mb-2 animate-bounce">{hab.icono}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{hab.nombre}</h3>
              <p className="text-gray-600 text-sm md:text-base">{hab.descripcion}</p>
              <span className="mt-2 px-3 py-1 bg-[#25D366] text-white text-xs rounded-full">{hab.nivel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
