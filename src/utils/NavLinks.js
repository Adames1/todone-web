import { ChartPie, House, List, LayoutList, Calendar } from "lucide-react";

export const navLinks = [
  { name: "Inicio", icon: House, to: "/", active: true },
  { name: "Dashboard", icon: ChartPie, to: "/dashboard", active: false },
  { name: "Proyectos", icon: LayoutList, to: "/projects", active: true },
  { name: "Lista", icon: List, to: "/lista", active: false },
  { name: "Calendario", icon: Calendar, to: "/calendario", active: false },
];
