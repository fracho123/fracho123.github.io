export default function Education() {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-wider">Education</h3>
            <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-stone-100 font-medium text-lg">Georgia Tech — OMSCS</h4>
                    <span className="text-xs font-mono text-stone-500 mt-1 sm:mt-0">Starting 2026 (Wish me luck!)</span>
                </div>
                <p className="text-stone-300 text-sm mb-3">
                    Master of Science in Computer Science (Online)
                </p>
                <ul className="list-disc list-outside ml-4 text-stone-400 space-y-2 text-sm">
                    <li>Specialization: Computing Systems</li>
                </ul>
            </div>
            <div className="mt-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-stone-100 font-medium text-lg">University of California, Los Angeles</h4>
                    <span className="text-xs font-mono text-stone-500 mt-1 sm:mt-0">2019 — 2023</span>
                </div>
                <p className="text-stone-300 text-sm mb-3">
                    Bachelor of Science in Computer Science and Engineering
                </p>
                <ul className="list-disc list-outside ml-4 text-stone-400 space-y-2 text-sm">
                    <li>Fast Track at UCLA Electrical and Computer Engineering</li>
                    <li>IEEE General Board at UCLA</li>
                </ul>
            </div>
        </section>
    );
}