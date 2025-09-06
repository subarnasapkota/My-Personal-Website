
import React from 'react';
import { Card } from '../Card';
import { PROJECTS } from '../../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-white">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto self-start bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
