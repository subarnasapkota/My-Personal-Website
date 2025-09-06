
import React from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';
import { CodeBracketIcon } from './Icon';

interface HeaderProps {
  activeView: View;
  navigateTo: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, navigateTo }) => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 text-center md:text-left mb-4 md:mb-0">
            <CodeBracketIcon className="w-10 h-10 text-blue-400"/>
            <div>
                <h1 className="text-2xl font-bold text-white">Alex Doe</h1>
                <p className="text-sm text-slate-400">Software Developer | Educator</p>
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      activeView === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
