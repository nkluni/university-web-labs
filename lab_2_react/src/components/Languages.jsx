
function Languages() {
    return (
        <section id="languages">
            <h2 className="mb-3.5 text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
                Languages
            </h2>

            <ul className="space-y-1.5">
                <li className="flex items-center justify-between gap-3 py-1.5 text-sm">
                    <span>English</span>
                    <span className="font-semibold text-sky-300">B2-Level</span>
                </li>

                <li className="flex items-center justify-between gap-3 py-1.5 text-sm">
                    <span>Ukrainian</span>
                    <span className="font-semibold text-sky-300">Native</span>
                </li>
            </ul>
        </section>
    );
}

export default Languages;
