
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../Card';
import { STUDENT_RESOURCES } from '../../constants';
import { streamStudyBuddyResponse } from '../../services/geminiService';
import { SparklesIcon, SendIcon } from '../Icon';

const AiStudyBuddy: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [conversation, setConversation] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [conversation]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        const userMessage = { type: 'user' as const, text: prompt };
        setConversation(prev => [...prev, userMessage]);
        setPrompt('');
        setIsLoading(true);
        setError(null);

        try {
            const stream = await streamStudyBuddyResponse(prompt);
            let botMessage = { type: 'bot' as const, text: '' };
            setConversation(prev => [...prev, botMessage]);

            for await (const chunk of stream) {
                const chunkText = chunk.text;
                setConversation(prev => {
                    const newConversation = [...prev];
                    const lastMessage = newConversation[newConversation.length - 1];
                    if (lastMessage && lastMessage.type === 'bot') {
                        lastMessage.text += chunkText;
                    }
                    return newConversation;
                });
            }
        } catch (err) {
            setError('Sorry, I am having trouble connecting. Please check if the API key is configured and try again later.');
            setConversation(prev => [...prev, { type: 'bot' as const, text: 'An error occurred.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <SparklesIcon className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-semibold text-white">AI Study Buddy</h3>
                </div>
                <p className="text-slate-400 mb-4">
                    Stuck on a concept? Need a code example? Ask me anything!
                </p>
                <div 
                    ref={chatContainerRef}
                    className="h-72 overflow-y-auto bg-slate-900 rounded-md p-4 space-y-4 mb-4 border border-slate-700"
                >
                    {conversation.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                     {isLoading && conversation[conversation.length - 1]?.type === 'user' && (
                        <div className="flex justify-start">
                            <div className="bg-slate-700 text-slate-200 p-3 rounded-lg">
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>
                 {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Explain the difference between let and const"
                        className="flex-grow bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    />
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center w-28" disabled={isLoading}>
                       {isLoading ? <span className="animate-pulse">Sending...</span> : <SendIcon className="w-5 h-5"/>}
                    </button>
                </form>
            </div>
        </Card>
    );
};


const Students: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-white">Student Resources</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:col-span-2">
                    <AiStudyBuddy />
                </div>

                {STUDENT_RESOURCES.map(resource => (
                    <Card key={resource.id}>
                        <div className="p-6">
                            <span className="text-sm font-semibold text-blue-400">{resource.type}</span>
                            <h3 className="text-xl font-semibold text-white mt-1 mb-2">{resource.title}</h3>
                            <p className="text-slate-400">{resource.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Students;
