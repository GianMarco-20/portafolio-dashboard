// frontend/src/layout/DashboardLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  User,
  BookOpen,
  Code,
  FolderKanban,
  Award,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* SIDEBAR - solo en desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 justify-between">
        <div>
          {/* TITULO + LOGO */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#25D366]">Mi Portafolio</h2>
              <p className="text-sm text-gray-500">Ingeniero de Sistemas</p>
            </div>
            <img
              src="/images/mi-logo.png"
              alt="Mi logo"
              className="w-12 h-auto object-contain"
            />
          </div>

          {/* NAVEGACIÓN */}
          <nav className="flex flex-col gap-2">
            <NavItem to="/" label="Sobre mí" icon={<User size={18} />} end />
            <NavItem to="/formacion" label="Formación" icon={<BookOpen size={18} />} />
            <NavItem to="/habilidades" label="Habilidades" icon={<Code size={18} />} />
            <NavItem to="/proyectos" label="Proyectos" icon={<FolderKanban size={18} />} />
            <NavItem to="/certificados" label="Certificados" icon={<Award size={18} />} />
            <NavItem to="/contacto" label="Contacto" icon={<User size={18} />} />
          </nav>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex items-center justify-center gap-4 pb-2">
          <SocialIcon
            href="https://github.com/GianMarco-20"
            icon={<Github size={22} />}
            label="GitHub"
            tooltip="@GianMarco-20"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/gian-marco-casta%C3%B1eda-caycho-004962378/"
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            tooltip="Gian Marco Castañeda"
          />
          <SocialIcon
            href="https://www.instagram.com/gmarco_20?igsh=MW8waTJrczUwdWxheQ=="
            icon={<Instagram size={22} />}
            label="Instagram"
            tooltip="@gmarco_20"
          />
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col">
        {/* HEADER para desktop: vacío */}
        <header className="w-full bg-white shadow-md flex items-center px-6 py-3 hidden md:flex"></header>

        {/* HEADER para mobile */}
        <header className="w-full bg-white shadow-md flex items-center justify-between md:hidden px-4 py-3">
          <div>
            <h2 className="text-xl font-bold text-[#25D366]">Mi Portafolio</h2>
            <p className="text-sm text-gray-500">Ingeniero de Sistemas</p>
          </div>
          <img
            src="/images/mi-logo.png"
            alt="Mi logo"
            className="w-10 h-auto object-contain"
          />
        </header>

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>

      {/* BOTTOM NAV (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        <NavItem to="/" icon={<User size={22} />} end mobile />
        <NavItem to="/formacion" icon={<BookOpen size={22} />} mobile />
        <NavItem to="/habilidades" icon={<Code size={22} />} mobile />
        <NavItem to="/proyectos" icon={<FolderKanban size={22} />} mobile />
        <NavItem to="/certificados" icon={<Award size={22} />} mobile />
      </nav>
    </div>
  );
};

/* ------------------------ AUX COMPONENTS ------------------------ */
const NavItem = ({ to, label, icon, end, mobile }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center ${
          mobile ? "justify-center" : "justify-start"
        } gap-3 p-2 rounded-lg transition-all duration-150
         ${isActive ? "text-[#25D366] bg-[#25D366]/10" : "text-gray-700 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:scale-105"}`
      }
    >
      <span className="inline-flex items-center justify-center">{icon}</span>
      {!mobile && <span className="select-none">{label}</span>}
    </NavLink>
  );
};

// SocialIcon con animación de tooltip
const SocialIcon = ({ href, icon, label, tooltip }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-transform duration-150 hover:scale-110"
  >
    {icon}
    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
      {tooltip}
    </span>
  </a>
);

export default DashboardLayout;
