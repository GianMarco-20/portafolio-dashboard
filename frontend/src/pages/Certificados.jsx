// src/pages/Certificados.jsx
import React from "react";

// Sección de Idiomas
const idiomas = [
  {
    nombre: "Inglés Basico",
    descripcion: "Certificado de inglés nivel basico.",
    institucion: "Centro de idiomas UNDC",
    fecha: "Diciembre 2024",
    imagen: "/images/inglesbasico.jpg",
    enlace: "/pdfs/inglesbasico.pdf",
  },
];

// Sección de Cursos
const cursos = [
    {
    nombre: "Excel Intermedio",
    descripcion: "Funciones de Excel, gestión de datos, análisis con tablas y gráficos dinámicos, validación y protección de datos",
    institucion: "Instituto peruano de negocios",
    fecha: "24 de abril de 2025",
    imagen: "/images/excelintermedio.jpg",
    enlace: "/pdfs/excelintermedio.pdf",
  },
  {
    nombre: "Marketing digital con inteligencia artificial",
    descripcion: "Utilizar la IA para analizar datos, medir resultados y mejorar continuamente tus campañas de marketing",
    institucion: "Centro sudamericano de formación-SUDITEP",
    fecha: "22 de abril de 2025",
    imagen: "/images/marketingdigital.jpg",
    enlace: "/pdfs/marketingdigital.pdf",
  },
];

// Sección de Conferencias
const conferencias = [
  {
    nombre: "Mentes que transforman: ciencia e innovación peruana desde la UNDC",
    descripcion: "En el marco del Día del Inventor y Científico Peruano",
    institucion: "Dirección de Innovación y Transferencia Tecnológica UNDC",
    fecha: "02 de julio de 2025",
    imagen: "/images/mentes.jpg",
    enlace: "/pdfs/mentes.pdf",
  },
  {
    nombre: "¿Como crear clases atracticas usando videos con jove?",
    descripcion: "Talleres de capacitación en acervos bibliograficos digitales con myloft",
    institucion: "Dirección de Innovación y Transferencia Tecnológica UNDC",
    fecha: "15 de mayo de 2025",
    imagen: "/images/videosconjove.jpg",
    enlace: "/pdfs/videosconjove.pdf",
  },
  {
    nombre: "Formación en recursos académicos de sage publishing",
    descripcion: "Talleres de capacitación en acervos bibliograficos digitales con myloft",
    institucion: "Dirección de Innovación y Transferencia Tecnológica UNDC",
    fecha: "07 de mayo de 2025",
    imagen: "/images/sagepublishing.jpg",
    enlace: "/pdfs/sagepublishing.pdf",
  },
  {
    nombre: "Hélices de innovación regional: Alianza quíntuple para el desarrollo de la provincia de cañete",
    descripcion: "Participación en innovación y transferencia tecnológica",
    institucion: "Dirección de Innovación y Transferencia Tecnológica UNDC",
    fecha: "11 de abril de 2025",
    imagen: "/images/innovacion.jpg",
    enlace: "/pdfs/innovacion.pdf",
  },
    {
    nombre: "Primer Acercamiento para el Fortalecimiento del Ecosistema Emprendedor de la Universidad Nacional de Cañete",
    descripcion: "Participación en emprendimiento e innovación",
    institucion: "Dirección de Incubadora de Empresas UNDC",
    fecha: "10 de abril de 2025",
    imagen: "/images/fortalecimiento.jpg",
    enlace: "/pdfs/fortalecimiento.pdf",
  },
      {
    nombre: "V Congreso Internacional de Ingeniería de Sistemas e Investigación Científica",
    descripcion: "Innovación, investigación y sistemas",
    institucion: "Escuela Profesional de Ingeniería de Sistemas UNDC",
    fecha: "30 de octubre del 2023",
    imagen: "/images/Congresointernacional2023.jpg",
    enlace: "/pdfs/Congresointernacional2023.pdf"
  },
    {
    nombre: "Conferencia en software de desarrollo",
    descripcion: "Tendencias, herramientas y buenas prácticas en desarrollo de software",
    institucion: "Escuela Profesional de Ingeniería de Sistemas UNDC",
    fecha: "30 de setiembre del 2022",
    imagen: "/images/ConferenciaSoftware.jpg",
    enlace: "/pdfs/ConferenciaSoftware.pdf",
  },
];

const Certificados = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 p-4 md:p-12 max-w-6xl mx-auto flex flex-col gap-12">
        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left relative">
          📜 Mis Certificados
          <span className="block w-24 md:w-28 h-1 bg-[#25D366] rounded mt-2 mx-auto md:mx-0"></span>
        </h1>

        {/* Secciones con espaciado reducido */}
        <Section title="Idiomas" data={idiomas} extraClass="mb-4" />
        <Section title="Cursos" data={cursos} extraClass="mb-4" />
        <Section title="Conferencias" data={conferencias} />
      </div>
    </div>
  );
};

const Section = ({ title, data, extraClass }) => (
  <div className={`flex flex-col gap-6 ${extraClass || ""}`}>
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((cert, index) => (
        <CertificadoCard key={index} cert={cert} />
      ))}
    </div>
  </div>
);

const CertificadoCard = ({ cert }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col">
    <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100">
      <img
        src={cert.imagen}
        alt={cert.nombre}
        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6 flex flex-col gap-2">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{cert.nombre}</h3>
      <p className="text-gray-600 text-sm md:text-base">{cert.descripcion}</p>
      <span className="text-gray-500 text-xs italic">📌 {cert.institucion}</span>
      <span className="text-gray-500 text-xs italic">📅 {cert.fecha}</span>
      <a
        href={cert.enlace}
        download
        className="mt-4 inline-block text-[#25D366] font-semibold hover:underline"
      >
        Ver Certificado
      </a>
    </div>
  </div>
);

export default Certificados;
