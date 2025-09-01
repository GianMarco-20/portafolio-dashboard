    // fronted/src/components/Sidebar.jsx
    import React, { useState } from "react";
    import { NavLink } from "react-router-dom";
    import { User, GraduationCap, Cpu, FolderKanban, FileBadge, Mail, Menu } from "lucide-react";

    const navItems = [
    { to: "/", label: "Sobre mí", icon: <User size={18} /> },
    { to: "/formacion", label: "Formación", icon: <GraduationCap size={18} /> },
    { to: "/habilidades", label: "Habilidades", icon: <Cpu size={18} /> },
    { to: "/proyectos", label: "Proyectos", icon: <FolderKanban size={18} /> },
    { to: "/certificados", label: "Certificados", icon: <FileBadge size={18} /> },
    { to: "/contacto", label: "Contacto", icon: <Mail size={18} /> },
    ];

    const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <aside className={`h-screen ${open ? "w-64" : "w-20"} transition-all bg-slate-900 text-slate-100 flex flex-col`}>
        {/* Logo */}
        <div className="flex items-center justify-between p-4">
            <h1 className={`text-lg font-bold ${!open && "hidden"}`}>Portafolio</h1>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-slate-800">
            <Menu />
            </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 mt-6 flex flex-col gap-2">
            {navItems.map((item) => (
            <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors 
                ${isActive ? "bg-emerald-500 text-white" : "hover:bg-slate-800"}`
                }
            >
                {item.icon}
                <span className={`${!open && "hidden"}`}>{item.label}</span>
            </NavLink>
            ))}
        </nav>
        </aside>
    );
    };

    export default Sidebar;
