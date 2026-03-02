export default function Experience() {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-wider">Professional Experience</h3>
            <div className="space-y-10">

                {/* Professional Experience */}
                <div>
                    <div className="mb-4">
                        <h4 className="text-stone-100 font-medium text-lg">Capital One</h4>
                    </div>
                    <div className="space-y-6 border-l-2 border-stone-800/50 ml-1 pl-5">
                        <div className="relative">
                            <span className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-[#1a1d18]"></span>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="text-stone-200 font-medium">Senior Associate Software Engineer</h5>
                                <span className="text-xs font-mono text-stone-500">2025 — Present</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 mt-2 text-stone-400 space-y-2 text-sm">
                                <li>Credit Card Data Platform</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <span className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-[#1a1d18]"></span>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="text-stone-200 font-medium">Associate Software Engineer</h5>
                                <span className="text-xs font-mono text-stone-500">2023 — 2025</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 mt-2 text-stone-400 space-y-2 text-sm">
                                <li>Financial Forecasting and Fraud Detection</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Volunteer Experience */}
                <div>
                    <div className="mb-4">
                        <h4 className="text-stone-100 font-medium text-lg">Gaithersburg HELP <span className="text-stone-500 font-normal text-sm ml-2">(Nonprofit)</span></h4>
                    </div>
                    <div className="space-y-6 border-l-2 border-stone-800/50 ml-1 pl-5">
                        <div className="relative">
                            <span className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-[#1a1d18]"></span>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="text-stone-200 font-medium">Software Developer Volunteer <span className="text-stone-500 font-normal text-sm">(Part-time)</span></h5>
                              <span className="text-xs font-mono text-stone-500">2025 — 2026</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 mt-2 text-stone-400 space-y-2 text-sm">
                                <li>Supported a hometown nonprofit serving families in need as a volunteer developer.</li>
                                <li>Implemented emergency accounting processes to bridge a SNAP benefit gap during a federal funding interruption (Sept–Nov 2025)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}