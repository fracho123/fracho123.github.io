export default function Header() {
    return (
        <header className="flex justify-between items-center mb-24 text-sm font-mono text-stone-500">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4a5d3f] animate-pulse"></span>
                NYC • building backend systems
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/fracho123" className="hover:text-stone-100 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/fracho123" className="hover:text-stone-100 transition-colors">LinkedIn</a>
            </div>
        </header>
    );
}