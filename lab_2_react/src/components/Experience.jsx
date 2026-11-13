const heading =
    "mb-5 flex items-center gap-3 text-xl font-bold uppercase tracking-widest " +
    "before:h-6 before:w-1.5 before:rounded-sm before:bg-linear-to-b before:from-sky-400 before:to-blue-500 before:content-['']";

const timeline =
    "relative ml-1.5 border-l-2 border-slate-200 dark:border-[#1f3556] pb-7 pl-7 last:border-l-transparent last:pb-0 " +
    "before:absolute before:top-1 before:-left-2 before:size-3.5 before:rounded-full before:bg-sky-400 before:ring-4 before:ring-sky-400/20 before:content-['']";

const articleHeader =
    "flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4";

const list =
    "grid list-disc gap-1.5 pl-5 text-[15px] text-slate-500 dark:text-slate-400 marker:text-sky-400";

function Experience() {
    return (
        <section id="experience">
            <h2 className={heading}>PRACTICAL TRAININGS</h2>

            <article className={timeline}>
                <header className={articleHeader}>
                    <h3 className="text-lg font-bold">Hands-on Cybersecurity Student</h3>
                    <p className="whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                        <time dateTime="2025">2025</time> — Present
                    </p>
                </header>
                <p className="mt-0.5 mb-2.5 font-bold text-cyan-700 dark:text-cyan-300">Challenge Grinding</p>
                <ul className={list}>
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

            <article className={timeline}>
                <header className={articleHeader}>
                    <h3 className="text-lg font-bold">Cyber Origin Story</h3>
                    <p className="whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                        <time dateTime="2023">2023</time> — <time dateTime="2025">2025</time>
                    </p>
                </header>
                <p className="mt-0.5 mb-2.5 font-bold text-cyan-700 dark:text-cyan-300">Exploration</p>
                <ul className={list}>
                    <li>
                        Completed an introductory SOC course, gaining structured insights
                        into log analysis, incident response basics, and defensive security
                        workflows.
                    </li>
                    <li>Built a daily learning habit by surrounding myself with security content.</li>
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