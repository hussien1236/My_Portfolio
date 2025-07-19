import { ArrowRight } from "lucide-react";
import { ProjectModal } from "../components/ProjectModal";
import AllProjectsOverlay from "./AllProjects";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { client } from "../sanity";


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
const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
          title,
          description,
          date,
          tags,
          featured,
          isDeployed,
          github,
          liveDemo,
          "image": image.asset->url
        }`
      )
      .then((data) => {
        setProjects(data)
      })
  }, [])

  const featuredProjects = projects.filter((p: Project) => p.featured);

  return (
    <section id="projects" className="md:mt-40 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionTitle title="Featured Projects" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 gap-4 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              variant="featured"
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowAllProjects(true)}
            className="primary_button font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            View All Projects ({projects.length})
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* All Projects Overlay */}
      <AllProjectsOverlay 
        projects={projects}
        isOpen={showAllProjects}
        onClose={() => setShowAllProjects(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
export default Projects;