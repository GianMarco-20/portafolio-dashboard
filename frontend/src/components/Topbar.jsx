    // frontend/src/components/Topbar.jsx
    import React from "react";

    const Topbar = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Mi Portafolio
        </h1>
        <div className="flex items-center space-x-4">
            <button className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600">
            Contacto
            </button>
        </div>
        </header>
    );
    };

    export default Topbar;
