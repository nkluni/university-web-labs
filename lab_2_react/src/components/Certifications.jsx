
function Certifications() {
    return (
        <section id="certifications">
            <h2 className="mb-5 flex items-center gap-3 text-xl font-bold uppercase tracking-[0.1em] text-slate-900">
                <span className="h-6 w-[5px] shrink-0 rounded-sm bg-gradient-to-b from-sky-400 to-blue-500" />
                Certifications
            </h2>

            <article className="rounded-[14px] border border-slate-200 bg-slate-50 px-5 py-[18px]">
                <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                        Internet Security During War: A Practical Course
                    </h3>
                    <time
                        dateTime="2026"
                        className="whitespace-nowrap text-sm tabular-nums text-slate-500"
                    >
                        2026
                    </time>
                </header>

                <p className="mt-1 text-sm text-slate-500">
                    Digital and information and communication competence &amp; Critical
                    thinking and systems thinking skills
                </p>
            </article>
        </section>
    );
}

export default Certifications;
