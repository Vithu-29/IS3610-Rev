import { useState, useEffect } from 'react';
import { BookOpen, FileText, CheckSquare, Menu, X, AlertCircle } from 'lucide-react';
import { NavButton } from './components/navButton';
import { LecturesModule } from './components/lectureModule';
import { TutorialsModule } from './components/tutorialModule';
import { PastPaperModule } from './components/pastPaperModule';


export default function App() {
  const [activeTab, setActiveTab] = useState('lectures');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reset window scroll (desktop or full-page scroll)
    window.scrollTo(0, 0);

    // Reset scroll inside main content wrapper
    const mainEl = document.getElementById("mainContent");
    if (mainEl) mainEl.scrollTop = 0;
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'lectures': return <LecturesModule />;
      case 'tutorials': return <TutorialsModule />;
      case 'pastpapers': return <PastPaperModule />;
      default: return <LecturesModule />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out shadow-2xl
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-blue-400 tracking-tight">IS3610 Revision</h1>
            <p className="text-xs text-slate-400 mt-1">Complete Guide</p>
          </div>
          {isMobile && <button onClick={() => setSidebarOpen(false)}><X size={20} /></button>}
        </div>

        <nav className="p-4 space-y-2">
          <NavButton active={activeTab === 'lectures'} onClick={() => { setActiveTab('lectures'); if (isMobile) setSidebarOpen(false); }} icon={<BookOpen size={20} />} label="Lecture Notes" />
          <NavButton active={activeTab === 'tutorials'} onClick={() => { setActiveTab('tutorials'); if (isMobile) setSidebarOpen(false); }} icon={<FileText size={20} />} label="Tutorials" />
          <NavButton active={activeTab === 'pastpapers'} onClick={() => { setActiveTab('pastpapers'); if (isMobile) setSidebarOpen(false); }} icon={<CheckSquare size={20} />} label="Past Paper 2025" />
          {/* Download 2025 Jan Past Paper */}
          <a
            href="./IS3610_2025_Jan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 mt-10 border hover:bg-blue-700 text-white rounded-xl transition-colors"
          >
            <FileText size={20} />
            <span className="text-sm font-medium">Download Jan 2025 Paper</span>
          </a>
        </nav>

        <div className="absolute bottom-0 w-full p-6 bg-slate-950">
          <div className="flex items-center space-x-2 text-yellow-500 mb-2">
            <AlertCircle size={16} />
            <span className="text-xs font-bold">Exam Mode</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center z-10 border-b">
          <div className="flex items-center space-x-2">
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded">
              <Menu size={24} />
            </button>
            <span className="font-bold text-lg text-slate-800">IS3610</span>
          </div>
        </header>

        <main id="mainContent" className="flex-1 overflow-y-auto relative">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}