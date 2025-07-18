import { useEffect, useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { client } from '../sanity';

interface Experience{
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
}

const TimelineExperience = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  useEffect(()=>{
    client.fetch(`*[_type == "experience"] | order(duration desc){
      title,
      company,
      location,
      duration,
      type,
      description,
      achievements,
      technologies
    }`)
    .then((data)=>{
      setExperiences(data);
  })
  },[])
  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div id='experience' className="w-full mx-auto md:mt-40 mt-20">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionTitle title='My Journey'/>
        <p className="text-gray-300 text-lg">
          A timeline of my professional experiences and growth
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-black shadow-lg shadow-purple-500/50 z-10"></div>
            
            {/* Experience card */}
            <div className="ml-6 group bg-[#161513] cursor-pointer">
              <div className="border border-purple-500/30 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-purple-300 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                >
                  {expandedItem === index ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Hide achievements
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      View achievements
                    </>
                  )}
                </button>

                {/* Achievements - Expandable */}
                {expandedItem === index && (
                  <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-purple-500/20 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;