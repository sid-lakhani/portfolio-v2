import Image from "next/image";
import PageHeader from "../universal/PageHeader";
import { projects } from "@/lib/constants";
import { Github, Link } from "lucide-react";

export default function ProjectCards() {
  return (
    <div className="h-full w-full px-[10%] lg:px-[20%]">
      <PageHeader
        title="My Projects & Work"
        subtitle="A showcase of the projects and ideas I’ve brought to life."
      />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-24 md:px-8 lg:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-950 border border-white/10 p-5 rounded-2xl shadow-black/30 dark:shadow-white/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-full aspect-[14/9] relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                className="onject-cover rounded-lg border border-black/10 dark:border-white/10"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              {project.description}
            </p>
            <div className="flex justify-center gap-4 w-full mt-auto pt-4">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Link size={28} />  
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Github size={28} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
