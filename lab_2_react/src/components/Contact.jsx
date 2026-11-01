
function Contact() {
    return (
        <section id="contact">
            <h2 className="mb-[14px] text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
                Contact
            </h2>

            <ul className="text-sm">
                <li className="break-words border-b border-dashed border-white/10 py-2">
                    <a
                        href="mailto:alina.pylyptsiv.kb.2025@lpnu.ua"
                        className="break-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                        alina.pylyptsiv.kb.2025@lpnu.ua
                    </a>
                </li>

                <li className="border-b border-dashed border-white/10 py-2">
                    <a
                        href="https://github.com/nkluni"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                        github.com/nkluni
                    </a>
                </li>

                <li className="break-words border-b border-dashed border-white/10 py-2">
                    <a
                        href="https://www.linkedin.com/in/аліна-пилипців-a42a32440"
                        target="_blank"
                        rel="noreferrer"
                        className="break-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                        linkedin.com/in/аліна-пилипців-a42a32440
                    </a>
                </li>

                <li className="py-2">
                    Lviv, Ukraine
                </li>
            </ul>
        </section>
    );
}

export default Contact;
