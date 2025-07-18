import type { ReactElement } from "react";

interface SkillCardProps{
    icon: ReactElement,
    title:string,
    description:string,
    skills:string[],
}
const SkillCard = ({ 
  icon, 
  title, 
  description, 
  skills = [],
}: SkillCardProps) => {
  return (
    <div className={`group relative cursor-pointer bg-[#161513] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-101 hover:shadow-2xl`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
            {typeof icon === 'string' ? (
              <span className="text-2xl">{icon}</span>
            ) : (
              icon
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Skills List */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg border border-gray-700 hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
    </div>
  );
};

export default SkillCard;