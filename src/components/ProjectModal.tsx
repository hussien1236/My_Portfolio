import { X, Github, ExternalLink } from "lucide-react";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!isOpen || !project) return null;
  
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="hide-scrollbar bg-gradient-to-br from-[#161513] to-[#1a1816] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800/50">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#161513] to-[#1a1816] p-6 border-b border-gray-800/50 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-4">
              {project.isDeployed && (
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              )}
              <button 
                onClick={() => window.open(project.github, '_blank')}
                className={`${project.isDeployed ? 'flex-1' : 'w-full'} bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700/50 hover:border-gray-600/50`}
              >
                <Github className="w-5 h-5" />
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export { ProjectModal };