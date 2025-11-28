export const NavButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`
      flex items-center space-x-3 w-full p-3 rounded-lg transition-all duration-200
      ${active
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
    `}
    >
        {icon}
        <span className="font-medium">{label}</span>
    </button>
);