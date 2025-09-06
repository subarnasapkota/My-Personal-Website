
import { NavItem, Project, Article, StudentResource } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'students', label: 'Student Resources' },
  { id: 'productivity', label: 'Productivity Hub' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cloud-Based Data Analytics Platform',
    description: 'A scalable platform for real-time data processing and visualization, built on serverless architecture.',
    technologies: ['React', 'TypeScript', 'D3.js', 'AWS Lambda', 'DynamoDB'],
    link: '#',
    image: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 2,
    title: 'AI-Powered E-commerce Recommendation Engine',
    description: 'Developed a personalized recommendation system that increased user engagement by 25%.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    link: '#',
    image: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 3,
    title: 'Open Source UI Component Library',
    description: 'Creator and maintainer of a popular component library focused on accessibility and performance.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    link: '#',
    image: 'https://picsum.photos/seed/project3/600/400',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Deep Dive into React Hooks',
    excerpt: 'Exploring advanced patterns and best practices for using React Hooks to manage complex state.',
    category: 'JavaScript',
    date: '2024-07-15',
  },
  {
    id: 2,
    title: 'Mastering Cloud Architecture on AWS',
    excerpt: 'A comprehensive guide to designing scalable, resilient, and cost-effective systems on AWS.',
    category: 'Cloud',
    date: '2024-06-28',
  },
  {
    id: 3,
    title: 'Effective Teaching Strategies for Code Newbies',
    excerpt: 'How to break down complex topics and foster a supportive learning environment for aspiring developers.',
    category: 'Teaching',
    date: '2024-05-10',
  },
];

export const STUDENT_RESOURCES: StudentResource[] = [
    {
        id: 1,
        title: "Lecture Notes: Asynchronous JavaScript",
        description: "Complete notes covering Promises, async/await, and the event loop. Includes diagrams and examples.",
        type: "Notes"
    },
    {
        id: 2,
        title: "React State Management Snippet",
        description: "A reusable code snippet demonstrating the use of `useState` and `useReducer` for local state.",
        type: "Code Snippet"
    },
    {
        id: 3,
        title: "Assignment: Build a To-Do App",
        description: "A practical assignment to apply your knowledge of React and component-based architecture.",
        type: "Assignment"
    }
];
