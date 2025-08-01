import { Square, ChevronRight } from "lucide-react";

function ProjectCard() {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Square size={20} className="text-gray-300" />
        <span className="font-medium text-gray-600">Name project</span>
      </div>
      <ChevronRight size={24} className="text-gray-500" />
    </div>
  );
}

export default ProjectCard;
