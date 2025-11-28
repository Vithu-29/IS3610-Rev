import { useState, useEffect, useRef } from 'react';
import { CheckSquare, X, ChevronDown, ChevronUp, BookOpen, Lightbulb, Eye, EyeOff } from 'lucide-react';
import { pastPaperData } from '../data/pastPaperData';

export const PastPaperModule = () => {
    const [mode, setMode] = useState('mcq');
    const [mcqState, setMcqState] = useState({});

    // New State for Essay Section toggles
    // Format: { "questionIndex-subQuestionIndex": boolean }
    const [visibleAnswers, setVisibleAnswers] = useState({});

    const scrollRef = useRef(null);

    const checkMcq = (qId, optionIdx, correctIdx) => {
        setMcqState(prev => ({
            ...prev,
            [qId]: { selected: optionIdx, isCorrect: optionIdx === correctIdx }
        }));
    };

    const toggleAnswer = (mainIndex, subIndex) => {
        const key = `${mainIndex}-${subIndex}`;
        setVisibleAnswers(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Scroll Reset on mode change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [mode]);

    return (
        <div className="h-full flex flex-col bg-gray-50 font-sans">

            {/* ------------------------------ */}
            {/* FIXED TOP HEADER */}
            {/* ------------------------------ */}
            <div className="
                bg-white border-b px-5 py-4 shadow-sm z-10 
                flex flex-col md:flex-row md:justify-between md:items-center 
                gap-4 md:gap-0 w-full sticky top-0
            ">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        January 2025 Examination
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                        IS 3610 Management Information Systems
                    </p>
                </div>

                <div className="flex bg-gray-100 p-1 rounded-lg mx-auto md:mx-0">
                    <button
                        onClick={() => setMode('mcq')}
                        className={`
                            px-6 py-2 rounded-md text-sm font-bold transition-all
                            ${mode === 'mcq'
                                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'}
                        `}
                    >
                        MCQs
                    </button>

                    <button
                        onClick={() => setMode('essay')}
                        className={`
                            px-6 py-2 rounded-md text-sm font-bold transition-all
                            ${mode === 'essay'
                                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'}
                        `}
                    >
                        Essay Questions
                    </button>
                </div>
            </div>

            {/* ------------------------------ */}
            {/* MAIN SCROLLABLE CONTENT */}
            {/* ------------------------------ */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 md:p-8"
            >
                <div className="max-w-4xl mx-auto">

                    {mode === 'mcq' ? (
                        /* MCQ SECTION (Unchanged) */
                        <div className="grid grid-cols-1 gap-4">
                            {pastPaperData.mcqs.map((q) => {
                                const status = mcqState[q.id];
                                return (
                                    <div
                                        key={q.id}
                                        className={`bg-white p-6 rounded-xl shadow-sm border transition-colors duration-300
                                            ${status
                                                ? status.isCorrect
                                                    ? 'border-green-200 bg-green-50/50'
                                                    : 'border-red-200 bg-red-50/50'
                                                : 'border-gray-200 hover:border-blue-200'
                                            }`}
                                    >
                                        <div className="flex gap-4">
                                            <span className="font-bold text-gray-400 select-none text-lg">{q.id}.</span>

                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900 mb-4 text-lg">{q.q}</p>

                                                <div className="space-y-2">
                                                    {q.options.map((opt, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => checkMcq(q.id, i, q.correct)}
                                                            disabled={!!status}
                                                            className={`
                                                                w-full text-left p-4 rounded-lg text-sm border font-medium
                                                                transition-all flex justify-between items-center group
                                                                ${status?.selected === i
                                                                    ? status.isCorrect
                                                                        ? 'bg-green-600 text-white border-green-600 shadow-md'
                                                                        : 'bg-red-500 text-white border-red-500 shadow-md'
                                                                    : status && q.correct === i
                                                                        ? 'bg-green-100 text-green-800 border-green-200'
                                                                        : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                                                                }
                                                            `}
                                                        >
                                                            <div className="flex items-center">
                                                                <span className={`
                                                                    font-mono mr-3 px-2 py-0.5 rounded text-xs
                                                                    ${status?.selected === i ? 'bg-white/20' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}
                                                                `}>
                                                                    {String.fromCharCode(65 + i)}
                                                                </span>
                                                                {opt}
                                                            </div>

                                                            {status?.selected === i &&
                                                                (status.isCorrect
                                                                    ? <CheckSquare size={18} />
                                                                    : <X size={18} />)}
                                                        </button>
                                                    ))}
                                                </div>

                                                {status && !status.isCorrect && (
                                                    <div className="mt-4 p-3 rounded-lg bg-green-100 border border-green-200 text-sm font-bold text-green-800 flex items-center animate-in fade-in slide-in-from-top-1">
                                                        <CheckSquare size={16} className="mr-2" />
                                                        Correct Answer: Option {String.fromCharCode(65 + q.correct)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        /* REDESIGNED ESSAY SECTION */
                        <div className="space-y-10 pb-12">
                            {pastPaperData.essay.map((q, i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                                    {/* Question Header */}
                                    <div className="bg-slate-900 p-6 md:p-8 flex items-start gap-4">
                                        <div className="bg-slate-700/50 p-2 rounded-lg text-white mt-1">
                                            <BookOpen size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                                {q.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm mt-1">Case Study & Analysis</p>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8">

                                        {/* Case Study Context Box */}
                                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10 relative">
                                            <div className="absolute -top-3 left-6 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wide">
                                                Context
                                            </div>
                                            <p className='whitespace-pre-line leading-relaxed text-blue-900 text-base md:text-lg opacity-90'>
                                                {q.context}
                                            </p>
                                        </div>

                                        {/* Questions List */}
                                        <div className="space-y-8">
                                            {q.questions.map((subQ, j) => {
                                                const isVisible = visibleAnswers[`${i}-${j}`];

                                                return (
                                                    <div key={j} className="flex flex-col gap-4 group">

                                                        {/* The Question */}
                                                        <div className="flex gap-4">
                                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                                                                {subQ.q}
                                                            </h4>
                                                        </div>

                                                        {/* Toggle Button */}
                                                        <div className="ml-12">
                                                            <button
                                                                onClick={() => toggleAnswer(i, j)}
                                                                className={`
                                                                    flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 
                                                                    ${isVisible
                                                                        ? ' text-slate-600 hover:text-slate-800'
                                                                        : 'text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center'
                                                                    }
                                                                `}
                                                            >
                                                                {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                                                                {isVisible ? 'Hide Model Answer' : 'Reveal Model Answer'}
                                                            </button>

                                                            {/* The Answer (Conditional Render) */}
                                                            {isVisible && (
                                                                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                                                    <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl p-6 md:p-8 relative overflow-hidden">

                                                                        {/* Decorative Icon */}
                                                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                                                            <CheckSquare size={64} className="text-emerald-900" />
                                                                        </div>

                                                                        <h5 className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4 border-b border-emerald-200 pb-2 w-max">
                                                                            <Lightbulb size={14} className="fill-emerald-700" />
                                                                            Model Answer Key
                                                                        </h5>

                                                                        <div
                                                                            className="prose prose-sm md:prose-base text-gray-800 max-w-none leading-relaxed
                                                                            prose-strong:text-emerald-900 prose-strong:font-bold 
                                                                            prose-ul:list-disc prose-ul:pl-4 prose-li:marker:text-emerald-600"
                                                                            dangerouslySetInnerHTML={{ __html: subQ.a }}
                                                                        >
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Divider for all except last item */}
                                                        {j !== q.questions.length - 1 && (
                                                            <div className="h-px bg-gray-100 mt-6 ml-12" />
                                                        )}
                                                    </div>
                                                );
                                            })}
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