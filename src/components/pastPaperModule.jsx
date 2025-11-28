import { useState, useEffect, useRef } from 'react';
import { CheckSquare, X } from 'lucide-react';
import { pastPaperData } from '../data/pastPaperData';

export const PastPaperModule = () => {
    const [mode, setMode] = useState('mcq');
    const [mcqState, setMcqState] = useState({});
    const scrollRef = useRef(null);   // ✅ FIX: reference scroll container

    const checkMcq = (qId, optionIdx, correctIdx) => {
        setMcqState(prev => ({
            ...prev,
            [qId]: { selected: optionIdx, isCorrect: optionIdx === correctIdx }
        }));
    };

    // ------------------------------
    // FIX: Scroll Reset on mode change
    // ------------------------------
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [mode]);

    return (
        <div className="h-full flex flex-col bg-gray-50">

            {/* ------------------------------ */}
            {/* FIXED TOP HEADER (Mobile Friendly) */}
            {/* ------------------------------ */}
            <div className="
                bg-white border-b px-5 py-4 shadow-sm z-10 
                flex flex-col md:flex-row md:justify-between md:items-center 
                gap-2 md:gap-0 w-full sticky top-0
            ">
                {/* Left */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        January 2025 Examination
                    </h2>
                    <p className="text-sm text-gray-500">
                        IS 3610 Management Information Systems
                    </p>
                </div>

                {/* Right: Switch Buttons */}
                <div className="flex bg-gray-100 p-1 rounded-lg mx-auto md:mx-0">
                    <button
                        onClick={() => setMode('mcq')}
                        className={`
                            px-5 py-2 rounded-md text-sm font-bold transition-all
                            ${mode === 'mcq'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'}
                        `}
                    >
                        Section 1: MCQs
                    </button>

                    <button
                        onClick={() => setMode('essay')}
                        className={`
                            px-5 py-2 rounded-md text-sm font-bold transition-all
                            ${mode === 'essay'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'}
                        `}
                    >
                        Section 2: Essay
                    </button>
                </div>
            </div>

            {/* ------------------------------ */}
            {/* MAIN SCROLLABLE CONTENT */}
            {/* ------------------------------ */}
            <div
                ref={scrollRef}     // ✅ FIX: scroll container reference
                className="flex-1 overflow-y-auto p-4 md:p-8"
            >
                <div className="max-w-5xl mx-auto">

                    {mode === 'mcq' ? (
                        <div className="grid grid-cols-1 gap-4">
                            {pastPaperData.mcqs.map((q) => {
                                const status = mcqState[q.id];
                                return (
                                    <div
                                        key={q.id}
                                        className={`bg-white p-6 rounded-xl shadow-sm border 
                                            ${status
                                                ? status.isCorrect
                                                    ? 'border-green-200 bg-green-50'
                                                    : 'border-red-200 bg-red-50'
                                                : 'border-gray-200'
                                            }`}
                                    >
                                        <div className="flex gap-4">
                                            <span className="font-bold text-gray-400 select-none">{q.id}.</span>

                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900 mb-4">{q.q}</p>

                                                <div className="space-y-2">
                                                    {q.options.map((opt, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => checkMcq(q.id, i, q.correct)}
                                                            disabled={!!status}
                                                            className={`
                                                                w-full text-left p-3 rounded-lg text-sm border 
                                                                transition-all flex justify-between items-center
                                                                ${status?.selected === i
                                                                    ? status.isCorrect
                                                                        ? 'bg-green-600 text-white border-green-600'
                                                                        : 'bg-red-500 text-white border-red-500'
                                                                    : status && q.correct === i
                                                                        ? 'bg-green-100 text-green-800 border-green-200'
                                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-transparent'
                                                                }
                                                            `}
                                                        >
                                                            <span>
                                                                <span className="font-mono mr-2 opacity-50">
                                                                    ({String.fromCharCode(97 + i)})
                                                                </span>
                                                                {opt}
                                                            </span>

                                                            {status?.selected === i &&
                                                                (status.isCorrect
                                                                    ? <CheckSquare size={16} />
                                                                    : <X size={16} />)}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Wrong Answer – Show Correct */}
                                                {status && !status.isCorrect && (
                                                    <div className="mt-3 text-xs font-bold text-green-700 flex items-center">
                                                        <CheckSquare size={12} className="mr-1" />
                                                        Correct Answer: (
                                                        {String.fromCharCode(97 + q.correct)})
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {pastPaperData.essay.map((q, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="bg-slate-900 p-6 text-white">
                                        <h3 className="text-xl font-bold">{q.title}</h3>
                                    </div>

                                    <div className="p-8">
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-sm text-gray-700 italic">
                                            {q.context}
                                        </div>

                                        <div className="space-y-8">
                                            {q.questions.map((subQ, j) => (
                                                <div key={j} className="border-b last:border-0 pb-8 last:pb-0">
                                                    <p className="font-bold text-lg text-gray-900 mb-4">{subQ.q}</p>

                                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                            Model Answer Points
                                                        </h5>

                                                        <div className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                                                            {subQ.a}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
