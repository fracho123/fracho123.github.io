export default function OpenSource() {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-mono text-stone-500 mb-8 uppercase tracking-wider">Open Source</h3>
            <div className="space-y-6">
                {/* PR 1 */}
                <div className="group">
                    <div className="flex justify-between items-baseline mb-1">
                        <a href="#" className="text-stone-100 font-medium group-hover:text-[#8ba87a] transition-colors flex items-center gap-2">
                            apache/kafka
                            <span className="text-stone-600 group-hover:text-[#8ba87a]/50 transition-colors">↗</span>
                        </a>
                        <span className="text-xs font-mono px-2 py-0.5 bg-[#4a5d3f]/20 text-[#8ba87a] border border-[#4a5d3f]/40 rounded-full">Merged</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">
                        Fixed a race condition in the consumer group rebalance logic that caused intermittent latency spikes under heavy load. Added regression tests to the core test suite.
                    </p>
                </div>
            </div>
        </section>
    );
}