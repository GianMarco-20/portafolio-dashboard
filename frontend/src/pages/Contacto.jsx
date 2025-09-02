// src/pages/Contacto.jsx
import React from "react";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

const Contacto = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 px-4 md:px-12 pt-10 pb-16 flex flex-col max-w-6xl mx-auto w-full">
        
        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center md:text-left relative">
          📬 Contáctame
          <span className="block w-24 md:w-28 h-1 bg-[#25D366] rounded mt-2 mx-auto md:mx-0"></span>
        </h1>

        {/* Contenedor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#25D366]" />
              Envíame un mensaje
            </h2>
            <form
              action="https://formspree.io/f/mzzbzvdl" // Tu endpoint de Formspree
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#25D366] outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#25D366] outline-none transition"
              />
              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                rows="5"
                required
                className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#25D366] outline-none transition"
              ></textarea>
              <button
                type="submit"
                className="bg-[#25D366] text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-[#1DA955] hover:scale-105 transition-transform duration-300"
              >
                ✉️ Enviar mensaje
              </button>
            </form>
          </div>

          {/* Opciones rápidas */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              O contáctame directamente:
            </h2>

            <a
              href="mailto:75040140gm20@gmail.com"
              className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Mail className="text-[#25D366] w-6 h-6" />
              <span className="font-medium text-gray-700">
                75040140gm20@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/51932823633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="text-[#25D366] w-6 h-6" />
              <span className="font-medium text-gray-700">
                Escríbeme por WhatsApp
              </span>
            </a>

            <a
              href="tel:+51932823633"
              className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Phone className="text-[#25D366] w-6 h-6" />
              <span className="font-medium text-gray-700">
                +51 932 823 633
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
