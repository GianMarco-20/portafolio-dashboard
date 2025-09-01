    // frontend/src/routes/AppRoutes.jsx
    import React from "react";
    import { Routes, Route } from "react-router-dom";
    import DashboardLayout from "../layout/DashboardLayout";

    // Pages
    import SobreMi from "../pages/SobreMi";
    import Formacion from "../pages/Formacion";
    import Habilidades from "../pages/Habilidades";
    import Proyectos from "../pages/Proyectos";
    import Certificados from "../pages/Certificados";
    import Contacto from "../pages/Contacto";

    const AppRoutes = () => {
    return (
        <Routes>
        {/* Layout general con sidebar fijo */}
        <Route element={<DashboardLayout />}>
            <Route index element={<SobreMi />} /> {/* "/" */}
            <Route path="formacion" element={<Formacion />} />
            <Route path="habilidades" element={<Habilidades />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="certificados" element={<Certificados />} />
            <Route path="contacto" element={<Contacto />} />
        </Route>
        </Routes>
    );
    };

    export default AppRoutes;
