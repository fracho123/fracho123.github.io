export default function AcademicExperience() {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-wider">Academic Experience</h3>

            <div className="space-y-10">
                <div>
                    <div className="mb-4">
                        <h4 className="text-stone-100 font-medium text-lg">Teaching & Research</h4>
                    </div>

                    <div className="space-y-6 border-l-2 border-stone-800/50 ml-1 pl-5">
                        <div className="relative">
                            <span className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-[#1a1d18]"></span>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="text-stone-200 font-medium">Undergraduate Teaching Assistant — UCLA</h5>
                                <span className="text-xs font-mono text-stone-500">Mar 2021 — Aug 2021</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 mt-2 text-stone-400 space-y-2 text-sm">
                                <li>Led labs/discussions for CS31 (C++) and Physics 4AL.</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <span className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-[#1a1d18]"></span>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="text-stone-200 font-medium">Undergraduate Researcher — QuBiT Lab @ UCLA</h5>
                                <span className="text-xs font-mono text-stone-500">Jun 2020 — Sep 2020</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 mt-2 text-stone-400 space-y-2 text-sm">
                                <li>Built a QGAN in Python/Qiskit for quantum state reconstruction; published in UCLA Samueli SURP 2020.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
