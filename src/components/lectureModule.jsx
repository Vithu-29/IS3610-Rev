import { ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { lecturesData } from '../data/lecturesData.jsx';

export const LecturesModule = () => {
    const [selectedId, setSelectedId] = useState(1);
    const activeLecture = lecturesData.find(l => l.id === selectedId);

    const scrollRef = useRef(null); // scroll container reference

    // Scroll to top when lecture changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedId]);

    return (
        <div className="flex h-full">

            {/* Desktop Sidebar */}
            <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto hidden md:block">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Course Modules</h2>
                    <div className="space-y-2">
                        {lecturesData.map(lec => (
                            <div
                                key={lec.id}
                                onClick={() => setSelectedId(lec.id)}
                                className={`
                                    p-4 rounded-xl cursor-pointer border transition-all duration-200 group
                                    ${selectedId === lec.id
                                        ? 'bg-blue-50 border-blue-500 shadow-sm'
                                        : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'}
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={`
                                            p-2 rounded-lg 
                                            ${selectedId === lec.id
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 text-gray-500 group-hover:bg-white'}
                                        `}>
                                            {lec.icon}
                                        </div>
                                        <span className={`font-semibold ${selectedId === lec.id ? 'text-blue-900' : 'text-gray-700'}`}>
                                            {lec.title}
                                        </span>
                                    </div>
                                    {selectedId === lec.id && (
                                        <ChevronRight size={16} className="text-blue-500" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Mobile Dropdown - FIXED */}
                <div className="md:hidden sticky top-0 z-10 bg-slate-50 border-b border-gray-200 p-4">
                    <select
                        className="w-full p-3 border rounded-lg bg-white shadow-sm font-bold text-gray-700"
                        value={selectedId}
                        onChange={(e) => setSelectedId(Number(e.target.value))}
                    >
                        {lecturesData.map(l => (
                            <option key={l.id} value={l.id}>{l.title}</option>
                        ))}
                    </select>
                </div>

                {/* Scrollable Content */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12"
                >
                    <div className="max-w-4xl mx-auto bg-white min-h-full rounded-2xl shadow-sm border border-gray-200 p-8 animate-fade-in">
                        {activeLecture?.content}
                    </div>
                </div>
            </div>
        </div>
    );
};
