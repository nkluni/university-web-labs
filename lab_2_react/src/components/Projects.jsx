const heading =
    "mb-1 flex items-center gap-3 text-xl font-bold uppercase tracking-widest sm:col-span-2 " +
    "before:h-6 before:w-1.5 before:rounded-sm before:bg-linear-to-b before:from-sky-400 before:to-blue-500 before:content-['']";

const card =
    "flex flex-col gap-2.5 rounded-2xl border border-slate-200 dark:border-[#1f3556] bg-slate-50 dark:bg-[#12233f] px-5 py-4.5 " +
    "transition duration-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl hover:shadow-slate-900/10";

const tags = "mt-auto flex flex-wrap gap-2";
const tag =
    "rounded-md bg-blue-100 dark:bg-[#16365c] px-2.5 py-1 text-xs font-semibold text-blue-800 dark:text-sky-200 transition hover:bg-blue-200 dark:hover:bg-[#1e4a78]";

function Projects() {
    return (
        <section id="projects" className="grid gap-4.5 sm:grid-cols-2">
            <h2 className={heading}>Featured Projects</h2>

            <article className={card}>
                <h3 className="text-lg font-bold">E-Commerce Platform</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Documented solutions and methodologies for web exploitation,
                    cryptography, challenges on TryHackMe and HTB.
                </p>
                <ul className={tags}>
                    <li className={tag}>CTF</li>
                    <li className={tag}>TryHackMe</li>
                    <li className={tag}>Wireshark</li>
                    <li className={tag}>Web Exploitation</li>
                </ul>
            </article>

            <article className={card}>
                <h3 className="text-lg font-bold">Hardware And Systems Diagnostics Lab</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Hands-on hardware teardown of non-functional USB media, Android boot
                    restoration, and bare-metal Linux OS deployments.
                </p>
                <ul className={tags}>
                    <li className={tag}>Hardware Analysis</li>
                    <li className={tag}>Linux Mint</li>
                    <li className={tag}>Android Diagnostics</li>
                </ul>
            </article>

            <article className={card}>
                <h3 className="text-lg font-bold">Log Analysis</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Simulated packet analysis and log investigation workflows based on
                    introductory SOC analyst training scenarios.
                </p>
                <ul className={tags}>
                    <li className={tag}>SOC Fundamentals</li>
                    <li className={tag}>Wireshark</li>
                    <li className={tag}>Log Analysis</li>
                </ul>
            </article>

            <article className={card}>
                <h3 className="text-lg font-bold">Virtualization</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Configured custom virtualized test environments and Android emulators
                    inside Linux to troubleshoot driver configurations and network
                    interfaces.
                </p>
                <ul className={tags}>
                    <li className={tag}>Linux</li>
                    <li className={tag}>Bash</li>
                    <li className={tag}>Network Troubleshooting</li>
                </ul>
            </article>
        </section>
    );
}

export default Projects;