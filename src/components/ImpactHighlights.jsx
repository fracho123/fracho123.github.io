export default function ImpactHighlights() {
    return (
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
            <div className="p-4 border border-stone-800/60 rounded-lg bg-stone-900/30">
                <div className="text-2xl text-stone-100 mb-1">70%</div>
                <div className="text-stone-500">infra cost reduction via ECS spot optimization</div>
            </div>
            <div className="p-4 border border-stone-800/60 rounded-lg bg-stone-900/30">
                <div className="text-2xl text-stone-100 mb-1">6&times;</div>
                <div className="text-stone-500">throughput increase with parallel Kafka consumers</div>
            </div>
            <div className="p-4 border border-stone-800/60 rounded-lg bg-stone-900/30">
                <div className="text-2xl text-stone-100 mb-1">99.99%</div>
                <div className="text-stone-500">uptime achieved by hardening deploy pipelines</div>
            </div>
        </section>
    );
}