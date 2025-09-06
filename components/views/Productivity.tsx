
import React, { useState } from 'react';
import { Card } from '../Card';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Todo, Note, Bookmark } from '../../types';
import { TrashIcon } from '../Icon';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <form onSubmit={addTodo} className="flex gap-2 mb-4">
                <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Add a new task..." className="flex-grow bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Add</button>
            </form>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-md">
                        <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} className="text-slate-500 hover:text-red-400">
                            <TrashIcon className="w-5 h-5"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Notes: React.FC = () => {
    const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
    const [newNote, setNewNote] = useState('');

    const addNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (newNote.trim()) {
            const timestamp = new Date().toLocaleString();
            setNotes([{ id: Date.now(), content: newNote, timestamp }, ...notes]);
            setNewNote('');
        }
    };

    const deleteNote = (id: number) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div>
            <form onSubmit={addNote} className="mb-4">
                <textarea value={newNote} onChange={e => setNewNote(e.target.value)} placeholder="Write a new note..." rows={3} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Save Note</button>
            </form>
            <div className="space-y-4">
                {notes.map(note => (
                    <div key={note.id} className="bg-slate-700 p-4 rounded-md">
                        <p className="text-slate-200 whitespace-pre-wrap">{note.content}</p>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-600">
                            <span className="text-xs text-slate-400">{note.timestamp}</span>
                             <button onClick={() => deleteNote(note.id)} className="text-slate-500 hover:text-red-400">
                                <TrashIcon className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Bookmarks: React.FC = () => {
    const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>('bookmarks', []);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const addBookmark = (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim() && title.trim()) {
            setBookmarks([...bookmarks, { id: Date.now(), url, title }]);
            setUrl('');
            setTitle('');
        }
    };

    const deleteBookmark = (id: number) => {
        setBookmarks(bookmarks.filter(b => b.id !== id));
    }

    return (
        <div>
            <form onSubmit={addBookmark} className="space-y-3 mb-4">
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Add Bookmark</button>
            </form>
            <ul className="space-y-2">
                {bookmarks.map(bookmark => (
                    <li key={bookmark.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-md">
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline truncate">{bookmark.title}</a>
                         <button onClick={() => deleteBookmark(bookmark.id)} className="text-slate-500 hover:text-red-400 ml-4">
                            <TrashIcon className="w-5 h-5"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


type ProductivityTab = 'todos' | 'notes' | 'bookmarks';

const Productivity: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ProductivityTab>('todos');

    const tabs: { id: ProductivityTab, label: string }[] = [
        { id: 'todos', label: 'To-Do List' },
        { id: 'notes', label: 'Notes' },
        { id: 'bookmarks', label: 'Bookmarks' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'todos': return <TodoList />;
            case 'notes': return <Notes />;
            case 'bookmarks': return <Bookmarks />;
            default: return null;
        }
    }

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Productivity Hub</h2>
                <p className="text-slate-400 mt-2">Your private space for tasks, notes, and links. Data is saved in your browser.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
                <Card>
                    <div className="border-b border-slate-700">
                        <nav className="flex space-x-2 p-2" aria-label="Tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${
                                        activeTab === tab.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    } px-4 py-2 font-medium text-sm rounded-md`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-6">
                        {renderContent()}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Productivity;
