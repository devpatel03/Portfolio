import React from 'react';

// Project Card Component 
const ProjectCard = ({ project, index }) => (
  <div
    className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
    animate-fade-in-up"
    style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/F3F4F6/6B7280?text=Image+Error"; }}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-base mb-4">{project.description}</p>
      <a
        href="#"
        className="inline-flex items-center text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300"
      >
        View Project
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-fade-in">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Project One', description: 'A responsive e-commerce platform built with React and Node.js.', image: 'https://placehold.co/400x250/E0E7FF/4338CA?text=Project+1' },
            { title: 'Project Two', description: 'A task management application with real-time updates.', image: 'https://placehold.co/400x250/D1FAE5/059669?text=Project+2' },
            { title: 'Project Three', description: 'Personal blog site featuring dynamic content rendering.', image: 'https://placehold.co/400x250/FFE4E6/EF4444?text=Project+3' },
          ].map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;