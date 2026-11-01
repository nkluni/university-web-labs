
function Experience() {
    return (
        <section id="experience">
            <h2 className="mb-5 flex items-center gap-3 text-xl font-bold uppercase tracking-[0.1em] text-slate-900">
                <span className="h-6 w-[5px] shrink-0 rounded-sm bg-gradient-to-b from-sky-400 to-blue-500" />
                PRACTICAL TRAININGS
            </h2>

            <article className="relative ml-1.5 border-l-2 border-slate-200 pb-7 pl-7 last:border-transparent last:pb-0 before:absolute before:-left-[8px] before:top-1 before:h-3.5 before:w-3.5 before:rounded-full before:bg-sky-400 before:shadow-[0_0_0_4px_rgba(56,189,248,0.2)]">
                <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                        Hands-on Cybersecurity Student
                    </h3>
                    <p className="whitespace-nowrap text-sm tabular-nums text-slate-500">
                        <time dateTime="2025">2025</time> — Present
                    </p>
                </header>

                <p className="mb-2 mt-0.5 font-bold text-[#2b8aa6]">
                    Challenge Grinding
                </p>

                <ul className="grid list-disc gap-1.5 pl-5 text-[15px] text-slate-500 marker:text-sky-400">
                    <li>
                        Engaged in CTF events and hackathons, solving real-world challenges
                        across AI Prompt Injection, Forensics, and Reverse engineering
                        categories under time constraints.
                    </li>
                    <li>
                        Executed recovery and hard resets on Android devices to restore
                        system functionality and explore mobile OS boot processes.
                    </li>
                    <li>
                        Diagnosed and resolved complex Linux Wi-Fi driver and interface
                        configuration issues through terminal-based network management
                        tools.
                    </li>
                </ul>
            </article>

            <article className="relative ml-1.5 border-l-2 border-slate-200 pb-7 pl-7 last:border-transparent last:pb-0 before:absolute before:-left-[8px] before:top-1 before:h-3.5 before:w-3.5 before:rounded-full before:bg-sky-400 before:shadow-[0_0_0_4px_rgba(56,189,248,0.2)]">
                <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                        Cyber Origin Story
                    </h3>
                    <p className="whitespace-nowrap text-sm tabular-nums text-slate-500">
                        <time dateTime="2022">2023</time> —{" "}
                        <time dateTime="2024">2025</time>
                    </p>
                </header>

                <p className="mb-2 mt-0.5 font-bold text-[#2b8aa6]">
                    Exploration
                </p>

                <ul className="grid list-disc gap-1.5 pl-5 text-[15px] text-slate-500 marker:text-sky-400">
                    <li>
                        Completed an introductory SOC course, gaining structured insights
                        into log analysis, incident response basics, and defensive security
                        workflows.
                    </li>
                    <li>
                        Built a daily learning habit by surrounding myself with security
                        content.
                    </li>
                    <li>
                        Committed fully to the field by enrolling in a Cybersecurity
                        Bachelor's degree program, aligning formal academic theory with
                        practical CTF grinding and hands-on lab experiments.
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Experience;
