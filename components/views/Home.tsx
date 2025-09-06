
import React from 'react';
import { View } from '../../types';
import { Card } from '../Card';
import { BriefcaseIcon, BookOpenIcon, AcademicCapIcon, WrenchScrewdriverIcon } from '../Icon';

interface HomeProps {
  navigateTo: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const quickNavs = [
    {
      view: 'portfolio' as View,
      icon: BriefcaseIcon,
      title: 'My Projects',
      description: 'Explore a selection of my development work.',
    },
    {
      view: 'blog' as View,
      icon: BookOpenIcon,
      title: 'Learning Resources',
      description: 'Read my articles on tech and teaching methodologies.',
    },
    {
        view: 'students' as View,
        icon: AcademicCapIcon,
        title: 'Student Hub',
        description: 'Access course notes, assignments, and an AI study buddy.',
      },
    {
      view: 'productivity' as View,
      icon: WrenchScrewdriverIcon,
      title: 'Productivity Hub',
      description: 'Access your private to-do list, notes, and bookmarks.',
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center bg-slate-800/50 p-8 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to My Digital Space
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-300">
          I'm a passionate software developer and educator dedicated to building useful applications and empowering the next generation of coders.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickNavs.map((nav) => (
            <Card key={nav.view} onClick={() => navigateTo(nav.view)}>
              <div className="p-6 text-center">
                <nav.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{nav.title}</h3>
                <p className="text-slate-400">{nav.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
