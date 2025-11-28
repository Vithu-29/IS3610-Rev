import { useState, useEffect } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { tutorialsData } from '../data/tutorialsData';

export const TutorialsModule = () => {
    const [activeTutId, setActiveTutId] = useState(1);
    const [revealed, setRevealed] = useState({});
    const activeTut = tutorialsData.find(t => t.id === activeTutId);

    const toggleReveal = (id) => {
        setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Reset scroll ONLY on desktop panes
    useEffect(() => {
        const left = document.getElementById("tutorial-left");
        const right = document.getElementById("tutorial-right");

        if (window.innerWidth >= 768) {   // Desktop mode only
            if (left) left.scrollTop = 0;
            if (right) right.scrollTop = 0;
        } else {
            window.scrollTo(0, 0); // Mobile → full page scroll reset
        }
    }, [activeTutId]);

    return (
        <div className="flex flex-col h-full overflow-y-auto">
            {/* Top Navigation */}
            <div className=" bg-white border-b px-6 py-3 flex items-center space-x-4 overflow-x-auto whitespace-nowrap pr-6scrollbar-none min-h-14">
                {tutorialsData.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTutId(t.id)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-bold transition-all
                            ${activeTutId === t.id
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                        `}
                    >
                        {t.title.split(":")[0]}
                    </button>
                ))}
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">

                {/* LEFT: Case Study */}
                <div
                    id="tutorial-left"
                    className="
                        md:w-1/2 p-6 bg-slate-50 border-r 
                        md:overflow-y-auto 
                        overflow-visible 
                    "
                >
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeTut.title}</h2>

                        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-6">
                            Focus: {activeTut.topic}
                        </div>

                        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                            {activeTut.caseText}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Questions */}
                <div
                    id="tutorial-right"
                    className="
                        md:w-1/2 p-6 bg-white 
                        md:overflow-y-auto 
                        overflow-visible 
                    "
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <HelpCircle className="mr-2 text-purple-600" /> Discussion Questions
                    </h3>

                    <div className="space-y-6">
                        {activeTut.questions.map((q, idx) => (
                            <div
                                key={idx}
                                className="border rounded-xl p-5 hover:border-purple-200 transition-colors"
                            >
                                <p className="font-semibold text-gray-800 mb-4">{q.q}</p>

                                {revealed[`${activeTutId}-${idx}`] ? (
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 animate-slide-up">
                                        <div className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">
                                            Suggested Answer
                                        </div>
                                        <p className="text-gray-800 text-sm leading-relaxed">{q.a}</p>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => toggleReveal(`${activeTutId}-${idx}`)}
                                        className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center"
                                    >
                                        Reveal Answer <ArrowRight size={14} className="ml-1" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
