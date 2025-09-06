
export type View = 'home' | 'about' | 'portfolio' | 'blog' | 'students' | 'productivity' | 'contact';

export interface NavItem {
  id: View;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export interface StudentResource {
  id: number;
  title: string;
  description: string;
  type: 'Notes' | 'Code Snippet' | 'Assignment';
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Note {
  id: number;
  content: string;
  timestamp: string;
}

export interface Bookmark {
  id: number;
  url: string;
  title: string;
}
