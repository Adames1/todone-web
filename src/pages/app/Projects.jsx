import LayoutApp from "../../layout/LayoutApp";
import ProjectCard from "../../components/ProjectCard";
import { Plus } from "lucide-react";

function Projects() {
  return (
    <LayoutApp>
      <section className="h-full w-full overflow-auto">
        <h2 className="font-semibold mb-4 text-gray-600 text-xl">Proyectos</h2>

        <button
          type="button"
          className="flex items-center gap-1 text-gray-500 group cursor-pointer"
        >
          <Plus
            className="group-hover:bg-indigo-500 group-hover:text-white rounded-full transition-all duration-300 ease-in p-0.5"
            size={28}
          />
          <span className="font-semibold text-gray-400 group-hover:text-gray-500 transition-all duration-300 ease-in">
            Nuevo Proyecto
          </span>
        </button>

        <div className="divide-y-[1px] divide-gray-200 w-full flex flex-col justify-center mt-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </LayoutApp>
  );
}

export default Projects;
