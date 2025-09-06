
import React from 'react';
import { Card } from '../Card';

const skills = {
    "Languages": ["TypeScript", "JavaScript", "Python", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Tailwind CSS", "Next.js", "Flask"],
    "Databases": ["PostgreSQL", "MongoDB", "DynamoDB"],
    "Cloud & DevOps": ["AWS", "Docker", "Vercel", "Git"],
    "Soft Skills": ["Mentorship", "Communication", "Problem-Solving", "Agile Methodologies"]
};

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        description: "Lead developer for a high-traffic data analytics platform. Responsible for architecting new features, mentoring junior engineers, and improving system performance by 30%."
    },
    {
        role: "Coding Bootcamp Instructor",
        company: "Code Academy",
        period: "2018 - 2020",
        description: "Taught full-stack web development curriculum to over 200 students. Developed course materials and provided 1-on-1 mentorship, achieving a 95% student job placement rate."
    }
];

const About: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-white">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 flex justify-center">
                <img src="https://picsum.photos/seed/avatar/400/400" alt="Alex Doe" className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover border-4 border-slate-700"/>
            </div>

            <div className="lg:col-span-2 space-y-4">
                <Card>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-3">My Philosophy</h3>
                        <p className="text-slate-300 leading-relaxed">
                            I believe in the power of technology to solve real-world problems and the importance of sharing knowledge to uplift others. My approach to development is rooted in writing clean, scalable code and fostering collaborative, inclusive environments. As an educator, I strive to demystify complex concepts and inspire a lifelong love for learning in my students.
                        </p>
                    </div>
                </Card>
            </div>
        </div>

        <Card>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h3>
                <div className="space-y-4">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="font-bold text-slate-200">{category}</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {items.map(item => (
                                    <span key={item} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>

        <Card>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h3>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                            <p className="text-md text-slate-400 font-medium">{exp.company} | {exp.period}</p>
                            <p className="mt-2 text-slate-300">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    </div>
  );
};

export default About;
