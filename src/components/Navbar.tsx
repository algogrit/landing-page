export default function Navbar() {
    function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        html.classList.toggle('dark', !isDark);
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold gradient-text">Algogrit</div>
                    <div className="flex items-center gap-6">
                        <a href="#about" className="hidden md:inline-block hover:text-amber-600 dark:hover:text-amber-400 transition-colors">About</a>
                        <a href="#expertise" className="hidden md:inline-block hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Expertise</a>
                        <a href="#writing" className="hidden md:inline-block hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Writing</a>
                        <a href="#resume" className="hidden md:inline-block hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Resume</a>
                        <a href="#contact" className="hidden md:inline-block hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contact</a>
                        <button id="theme-toggle" onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
                            <svg id="theme-icon-sun" className="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                            </svg>
                            <svg id="theme-icon-moon" className="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
