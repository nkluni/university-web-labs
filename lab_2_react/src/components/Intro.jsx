function Intro() {
    return (
        <section id="intro">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
                Hi, I'm <span className="text-cyan-600 dark:text-cyan-300">Alina</span>
            </h1>
            <p className="mt-3.5 max-w-[62ch] text-base leading-7 text-slate-500 dark:text-slate-400">
                I am a Cybersecurity student on a hands-on journey to master the
                complexities of information security. Rather than following a purely
                theoretical path, I actively build my skills through Capture The Flag
                (CTF) competitions, security hackathons, defense simulations, and
                practical cyber challenges.
            </p>
        </section>
    );
}

export default Intro;