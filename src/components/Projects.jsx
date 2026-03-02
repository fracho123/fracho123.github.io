export default function Projects() {
    return (
        <section className="mb-20">
            <h3 className="text-sm font-mono text-stone-500 mb-8 uppercase tracking-wider">Selected Work</h3>
            <div className="space-y-10">
                {/* Project 1 */}
                <div className="group">
                    <h4 className="text-lg font-medium text-stone-100 mb-2 group-hover:text-[#8ba87a] transition-colors flex items-center gap-2">
                        Kafka Parallel Consumer Operationalization
                        <span className="text-stone-600 group-hover:text-[#8ba87a]/50 transition-colors">↗</span>
                    </h4>
                    <p className="text-stone-400 mb-4 leading-relaxed">
                        Designed and migrated to a parallel processing model with adhoc rewind, preserving message ordering where required.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                        <span className="px-2 py-1 bg-stone-900 text-stone-300 rounded border border-stone-800">Kafka</span>
                        <span className="px-2 py-1 bg-stone-900 text-stone-300 rounded border border-stone-800">Go</span>
                        <span className="px-2 py-1 bg-stone-900 text-stone-400 border border-stone-800/50 rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ba87a]/80"></span> Latency: -40%
            </span>
                    </div>
                </div>

            </div>
        </section>
    );
}