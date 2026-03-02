export default function Hero() {
    return (
        <section className="mb-20">
            <div className="flex flex-col-reverse sm:flex-row gap-6 sm:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-medium text-stone-100 tracking-tight mb-2">Franklin Choi</h1>
                    <h2 className="text-xl text-stone-400">Backend / Data Platform Engineer</h2>
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#4a5d3f]/50 shrink-0">
                    <img
                        src={new URL('../assets/v-cube.jpg', import.meta.url).href}
                        alt="Franklin Choi"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            <p className="text-lg leading-relaxed text-stone-400 max-w-2xl mb-8">
                Kafka enjoyer, mechanical keyboard clicker, and occasional over-optimizer
            </p>
            {/*<div className="flex gap-4 font-mono text-sm">*/}
            {/*    <a href="/FranklinChoi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#4a5d3f] text-[#f5f5f0] rounded hover:bg-[#5b704f] transition-colors font-medium">*/}
            {/*        Resume (PDF)*/}
            {/*    </a>*/}
            {/*    <a href="mailto:your@email.com" className="px-4 py-2 border border-[#4a5d3f] rounded hover:bg-[#2c3326] hover:text-stone-100 transition-colors">*/}
            {/*        Email Me*/}
            {/*    </a>*/}
            {/*</div>*/}
        </section>
    );
}