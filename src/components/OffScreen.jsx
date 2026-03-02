export default function OffScreen() {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-wider">Off Screen</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                When I'm not untangling backend architecture, I'm usually diving into one of my other obsessions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-4 rounded-lg border border-stone-800/50 bg-stone-900/20 hover:border-stone-700/50 transition-colors">
                    <h4 className="text-stone-200 font-medium mb-1 flex items-center gap-2">
                        <span>☕</span> Specialty Coffee
                    </h4>
                    <p className="text-stone-500 text-sm">
                        Dialing in espresso shots and exploring light roasts. Current favorite: Ethiopian Yirgacheffe.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-800/50 bg-stone-900/20 hover:border-stone-700/50 transition-colors">
                    <h4 className="text-stone-200 font-medium mb-1 flex items-center gap-2">
                        <span>🧗‍♂️</span> Bouldering
                    </h4>
                    <p className="text-stone-500 text-sm">
                        Projecting V5s. It's basically physical problem-solving with immediate feedback.
                    </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-800/50 bg-stone-900/20 hover:border-stone-700/50 transition-colors">
                    <h4 className="text-stone-200 font-medium mb-1 flex items-center gap-2">
                        <span>📸</span> Street Photography
                    </h4>
                    <p className="text-stone-500 text-sm">
                        Shooting on a Fujifilm X100V. Trying to capture interesting light and geometry in the city.
                    </p>
                </div>

            </div>
        </section>
    );
}