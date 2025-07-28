import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import reactLogo from '../assets/react.svg';
import Backend from '../assets/Backend.png';
import DBLogo from '../assets/DBLogo.png';
import DevTools from '../assets/DevTools.png'
import { useEffect, useRef, useState } from 'react';
import { client } from '../sanity';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools';
}

const categoryMeta = {
  frontend: {
    icon: <img src={reactLogo} alt="React" style={{ width: 32, height: 32 }} />,
    title: 'Frontend',
    description: 'Building interactive UIs with modern frameworks and styling.'
  },
  backend: {
    icon: <img src={Backend} alt="Backend" style={{ width: 32, height: 32 }} />,
    title: 'Backend',
    description: 'Robust server-side logic, APIs, and business processes.'
  },
  databases: {
    icon: <img src={DBLogo} alt="Databases" style={{ width: 42, height: 42 }} />,
    title: 'Databases',
    description: 'Designing and managing relational and cloud databases.'
  },
  tools: {
    icon: <img src={DevTools} alt="Databases" style={{ width: 42, height: 42 }} />,
    title: 'Dev Tools & Other',
    description: 'Modern development, version control, and deployment tools.'
  }
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "skill"]{ name, category }`).then((data: Skill[]) => {
      setSkills(data);
      setLoading(false);
    });
  }, []);

  // Group skills by category
  const grouped: Record<string, string[]> = {
    frontend: [],
    backend: [],
    databases: [],
    tools: [],
  };
  skills.forEach(skill => {
    if (grouped[skill.category]) grouped[skill.category].push(skill.name);
  });
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add delay based on card position for staggered effect
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, index]));
              }, index * 150); // 150ms delay between each card
            }
            else {
              // Remove card from visible set when it leaves viewport
              setVisibleCards(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of the card is visible
          rootMargin: '-50px 0px', // Start animation slightly before card enters viewport
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div id="skills">
      <div className='flex flex-col justify-center items-center md:mt-40 mt-20'>
        <SectionTitle title={'My Skills'} />
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 md:mt-20 mt-10 w-full'>
          {Object.entries(categoryMeta).map(([cat, meta], index) => (
            <div
              key={cat}
              ref={el => { cardsRef.current[index] = el; }}
                className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <SkillCard
                icon={meta.icon}
                title={meta.title}
                description={meta.description}
                skills={grouped[cat]}
              />
            </div>
          ))}
        </div>
        {loading && <div className="text-gray-400 mt-4">Loading skills...</div>}
      </div>
    </div>
  );
};
export default Skills