import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

interface Project {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  featured: boolean;
  isDeployed: boolean;
  status: string;
  github: string;
  liveDemo: string;
}

interface AllProjectsOverlayProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
}

const AllProjectsOverlay: React.FC<AllProjectsOverlayProps> = ({ projects, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project: Project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto hide-scrollbar">
      <div className="min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white">All Projects</h1>
                <p className="text-gray-400">Explore my complete portfolio</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: Project, index: number) => (
              <ProjectCard
                key={index}
                project={project}
                variant="grid"
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default AllProjectsOverlay;
  