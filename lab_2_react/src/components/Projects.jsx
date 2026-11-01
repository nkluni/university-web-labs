
function Projects() {
    return (
        <section
            id="projects"
            className="grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2"
        >
            <h2 className="col-span-full mb-0.5 flex items-center gap-3 text-xl font-bold uppercase tracking-[0.1em] text-slate-900 before:h-6 before:w-[5px] before:shrink-0 before:rounded-sm before:bg-gradient-to-b before:from-sky-400 before:to-blue-500">
                Featured Projects
            </h2>

            <article className="flex flex-col gap-2.5 rounded-[14px] border border-slate-200 bg-slate-50 p-[18px_20px] transition duration-200 hover:-translate-y-[3px] hover:border-sky-400 hover:shadow-[0_10px_24px_rgba(15,39,68,0.1)]">
                <h3 className="text-lg font-bold text-slate-900">
                    E-Commerce Platform
                </h3>
                <p className="text-sm text-slate-500">
                    Documented solutions and methodologies for web exploitation,
                    cryptography, challenges on TryHackMe and HTB.
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        CTF
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        TryHackMe
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Wireshark
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Web Exploitation
                    </li>
                </ul>
            </article>

            <article className="flex flex-col gap-2.5 rounded-[14px] border border-slate-200 bg-slate-50 p-[18px_20px] transition duration-200 hover:-translate-y-[3px] hover:border-sky-400 hover:shadow-[0_10px_24px_rgba(15,39,68,0.1)]">
                <h3 className="text-lg font-bold text-slate-900">
                    Hardware And Systems Diagnostics Lab
                </h3>
                <p className="text-sm text-slate-500">
                    Hands-on hardware teardown of non-functional USB media, Android
                    boot restoration, and bare-metal Linux OS deployments.
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Hardware Analysis
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Linux Mint
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Android Diagnostics
                    </li>
                </ul>
            </article>

            <article className="flex flex-col gap-2.5 rounded-[14px] border border-slate-200 bg-slate-50 p-[18px_20px] transition duration-200 hover:-translate-y-[3px] hover:border-sky-400 hover:shadow-[0_10px_24px_rgba(15,39,68,0.1)]">
                <h3 className="text-lg font-bold text-slate-900">
                    Log Analysis
                </h3>
                <p className="text-sm text-slate-500">
                    Simulated packet analysis and log investigation workflows based on
                    introductory SOC analyst training scenarios.
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        SOC Fundamentals
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Wireshark
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Log Analysis
                    </li>
                </ul>
            </article>

            <article className="flex flex-col gap-2.5 rounded-[14px] border border-slate-200 bg-slate-50 p-[18px_20px] transition duration-200 hover:-translate-y-[3px] hover:border-sky-400 hover:shadow-[0_10px_24px_rgba(15,39,68,0.1)]">
                <h3 className="text-lg font-bold text-slate-900">
                    Virtualization
                </h3>
                <p className="text-sm text-slate-500">
                    Configured custom virtualized test environments and Android
                    emulators inside Linux to troubleshoot driver configurations and
                    network interfaces.
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Linux
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Bash
                    </li>
                    <li className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#1e5a8a]">
                        Network Troubleshooting
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Projects;
