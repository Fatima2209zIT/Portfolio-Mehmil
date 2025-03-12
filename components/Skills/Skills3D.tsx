import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faBootstrap,
  faGit,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPalette, 
  faDatabase, 
  faCode 
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to library
library.add(
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faBootstrap,
  faGit,
  faGithub,
  faPalette,
  faDatabase,
  faCode
);

type Skill = {
  name: string;
  icon: any;
  percent: number;
};

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: faHtml5, percent: 95 },
    { name: "CSS", icon: faCss3Alt, percent: 90 },
    { name: "JavaScript", icon: faJs, percent: 85 },
    { name: "Next.Js", icon: faReact, percent: 50 },
    { name: "Tailwind CSS", icon: faPalette, percent: 75 },
    { name: "Supabase", icon: faDatabase, percent: 70 },
    { name: "VS Code", icon: faCode, percent: 90 },
    { name: "Git", icon: faGit, percent: 80 },
    { name: "GitHub", icon: faGithub, percent: 90 },
    { name: "TypeScript", icon: '🔷', percent: 65 },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  return (
    <section id="skills" className="py-20 bg-dark-2" ref={sectionRef}>
      <div className="container mx-auto px-4">
      <h1 className="heading">
      MY <span className="text-purple">SKILLS</span>
      </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              animated={animated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, animated }: { skill: Skill; animated: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= skill.percent ? prev : prev + 1));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [animated, skill.percent]);

  return (
    <div className="skill-card text-center p-6 rounded-xl bg-dark/20 hover:bg-dark/30 transition-all">
      <div className="progress-circle relative w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-dark-2"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          />
          <path
            className="text-teal"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              stroke: '#BF77F6',
              strokeDasharray: `${progress}, 100`,
              transition: 'stroke-dasharray 1s ease',
            }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {progress}%
        </span>
      </div>
      <div className="skill-icon text-4xl mb-2 transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">
        {typeof skill.icon === 'string' ? (
          <span>{skill.icon}</span>
        ) : (
          <FontAwesomeIcon icon={skill.icon} />
        )}
      </div>
      <h3 className="text-xl font-poppins font-bold">{skill.name}</h3>
    </div>
  );
};

export default Skills;