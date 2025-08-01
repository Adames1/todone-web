import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/NavLinks";
import { logoutUser } from "../firebase/auth/auth";

import { LogOut, X } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-full md:w-64 lg:w-80 h-screen bg-gray-100 fixed md:static z-40 flex flex-col justify-between p-6">
      <div className="divide-y divide-gray-500/40">
        {/* user info / head */}
        <div className="flex flex-col justify-between items-center md:items-start pb-8 space-y-4">
          <button type="button" className="cursor-pointer">
            <X className="w-6 h-6 text-gray-500 md:hidden" />
            <span className="sr-only">close menu</span>
          </button>
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-slate-600">Nombre usuario</h2>
            <span className="text-sm text-slate-400">jhon@example.com</span>
          </div>
        </div>

        {/* navegation links */}
        <nav className="w-full flex flex-col space-y-4 mt-8 items-center md:items-start">
          {navLinks.map(({ name, icon: Icon, to, active }) =>
            active ? (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-indigo-100 text-indigo-500"
                      : "text-gray-600 hover:bg-gray-200"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </NavLink>
            ) : (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-400"
                title="Próximamente disponible"
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </div>
            )
          )}
        </nav>
      </div>

      {/* button logout */}
      <button
        type="button"
        onClick={() => logoutUser()}
        className="flex gap-2 justify-center md:justify-start text-md text-gray-600 cursor-pointer hover:text-red-500"
      >
        <LogOut className="w-5 h-5" />
        <span>Cerrar sesión</span>
      </button>
    </aside>
  );
}

export default Sidebar;
