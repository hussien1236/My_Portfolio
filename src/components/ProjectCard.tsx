import { Calendar, Eye, Github } from "lucide-react";

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

interface ProjectCardProps {
  project: Project;
  variant?: 'grid' | 'featured';
  onClick?: () => void;
}

const ProjectCard = ({ project, variant = 'grid', onClick }: ProjectCardProps) => {
  const cardClass = variant === 'featured' 
    ? 'group flex flex-col justify-between relative cursor-pointer bg-gradient-to-br from-[#161513] to-[#1a1816] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10'
    : 'group relative cursor-pointer bg-gradient-to-br from-[#161513] to-[#1a1816] rounded-2xl overflow-hidden border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/5';

  return (
    <div className={cardClass} onClick={onClick}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            variant === 'featured' ? 'h-48' : 'h-32'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/80 via-transparent to-transparent"></div>
        
      </div>
      
      {/* Content */}
      <div className={`relative flex flex-col justify-between z-10 ${variant === 'featured' ? 'p-6' : 'p-4'}`}>
        <div className="flex flex-col items-start gap-2 mb-2">
          <h3 className={`font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300 ${
            variant === 'featured' ? 'text-xl' : 'text-lg'
          }`}>
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Calendar className="w-3 h-3" />
            {project.date}
          </div>
        </div>
        
        <p className={`text-gray-400 leading-relaxed mb-4 ${
          variant === 'featured' ? 'text-sm line-clamp-3' : 'text-xs line-clamp-2'
        }`}>
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, variant === 'featured' ? 4 : 3).map((tag: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > (variant === 'featured' ? 4 : 3) && (
            <span className="px-2 py-1 bg-gray-800/50 rounded-full text-xs text-gray-400 border border-gray-700/50">
              +{project.tags.length - (variant === 'featured' ? 4 : 3)}
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {project.isDeployed && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveDemo, '_blank');
              }}
              className="flex-1 bg-gradient-to-r whitespace-nowrap from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Eye className="w-4 h-4" />
              View Project
            </button>
          )}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, '_blank');
            }}
            className={`${project.isDeployed ? 'flex-1' : 'w-full'} whitespace-nowrap bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 font-medium py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-gray-700/50 hover:border-gray-600/50`}
          >
            <Github className="w-4 h-4" />
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
