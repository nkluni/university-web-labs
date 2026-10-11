function Projects() {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>

            <article>
                <h3>E-Commerce Platform</h3>
                <p>
                    Documented solutions and methodologies for web exploitation,
                    cryptography, challenges on TryHackMe and HTB.
                </p>
                <ul className="tags">
                    <li>CTF</li>
                    <li>TryHackMe</li>
                    <li>Wireshark</li>
                    <li>Web Exploitation</li>
                </ul>
            </article>

            <article>
                <h3>Hardware And Systems Diagnostics Lab</h3>
                <p>
                    Hands-on hardware teardown of non-functional USB media, Android boot
                    restoration, and bare-metal Linux OS deployments.
                </p>
                <ul className="tags">
                    <li>Hardware Analysis</li>
                    <li>Linux Mint</li>
                    <li>Android Diagnostics</li>
                </ul>
            </article>

            <article>
                <h3>Log Analysis</h3>
                <p>
                    Simulated packet analysis and log investigation workflows based on
                    introductory SOC analyst training scenarios.
                </p>
                <ul className="tags">
                    <li>SOC Fundamentals</li>
                    <li>Wireshark</li>
                    <li>Log Analysis</li>
                </ul>
            </article>

            <article>
                <h3>Virtualization</h3>
                <p>
                    Configured custom virtualized test environments and Android emulators
                    inside Linux to troubleshoot driver configurations and network
                    interfaces.
                </p>
                <ul className="tags">
                    <li>Linux</li>
                    <li>Bash</li>
                    <li>Network Troubleshooting</li>
                </ul>
            </article>
        </section>
    );
}

export default Projects;