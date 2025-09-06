
import React from 'react';
import { Card } from '../Card';
import { ARTICLES } from '../../constants';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-white">Blog & Articles</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {ARTICLES.map((article) => (
          <Card key={article.id}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{article.category}</span>
                    <span className="text-sm text-slate-400">{article.date}</span>
                </div>
              <h3 className="text-2xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">{article.title}</h3>
              <p className="text-slate-300 mb-4">{article.excerpt}</p>
              <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                Read More &rarr;
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
