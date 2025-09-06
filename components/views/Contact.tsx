
import React, { useState } from 'react';
import { Card } from '../Card';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../Icon';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // UI only - no actual submission logic
        if (name && email && subject && message) {
            setStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setStatus('error');
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                                <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
                            </div>
                            {status === 'success' && <p className="text-green-400">Thank you for your message!</p>}
                            {status === 'error' && <p className="text-red-400">Please fill out all fields.</p>}
                        </form>
                    </Card>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                    <a href="#" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <GithubIcon className="w-8 h-8 text-slate-300" />
                        <div>
                            <p className="font-semibold text-white">GitHub</p>
                            <p className="text-sm text-slate-400">/alexdoe-dev</p>
                        </div>
                    </a>
                     <a href="#" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <LinkedinIcon className="w-8 h-8 text-slate-300" />
                        <div>
                            <p className="font-semibold text-white">LinkedIn</p>
                            <p className="text-sm text-slate-400">/in/alexdoe</p>
                        </div>
                    </a>
                     <a href="#" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <TwitterIcon className="w-8 h-8 text-slate-300" />
                        <div>
                            <p className="font-semibold text-white">Twitter</p>
                            <p className="text-sm text-slate-400">@alexdoecodes</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
