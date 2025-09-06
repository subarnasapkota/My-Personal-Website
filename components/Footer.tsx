
import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-12">
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-slate-400 mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Alex Doe. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
