import React from "react";
import { Code } from "lucide-react";

// Skill Cards
const SkillCard = ({ skill, index }) => (
  <div
    className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
    flex flex-col items-center justify-center text-center animate-fade-in-up"
    style={{ animationDelay: (index * 0.1) + 's', opacity: 0 }} 
  >
    <Code className="w-10 h-10 text-blue-400 mb-4" /> {/* Generic icon, could be specific per skill */}
    <h3 className="text-xl font-semibold text-white">{skill}</h3>
  </div>
);

// Skill Sections
const Skills = () => {
  const frontendSkills = ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"];
  const backendSkills = ["Node.js", "MySQL", "SQLite", "Python", "Java", "Kotlin"];
  const toolSkills = ["GitHub", "VS Code", "Visual Studio", "Android Studio"];
  const communicationTools = ["MS Teams", "Google Chat", "Discord", "Zoom"];
  const methodologies = ["Agile", "Scrum", "Waterfall", "TDD"];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-fade-in">My Skills</h2>

        {/* Frontend */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-left">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>

        {/* Backend */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-left">Backend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {backendSkills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-left">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {toolSkills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
        <br>
        </br>
        <br>
        </br>

         {/* Communication Tools */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-left">Communication Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {communicationTools.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
        <br>
        </br>

        {/* Methodologies */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-left">Methodologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {methodologies.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;