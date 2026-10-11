function Skills() {
    return (
        <section id="skills">
            <h2>Technical Skills</h2>
            <ul>
                <li>
                    <label htmlFor="skill-python">Python</label>
                    <span>70%</span>
                    <meter id="skill-python" min="0" max="100" value="70">70%</meter>
                </li>
                <li>
                    <label htmlFor="skill-react">React / Next.js</label>
                    <span>30%</span>
                    <meter id="skill-react" min="0" max="100" value="30">30%</meter>
                </li>
                <li>
                    <label htmlFor="skill-node">Node.js</label>
                    <span>50%</span>
                    <meter id="skill-node" min="0" max="100" value="50">50%</meter>
                </li>
                <li>
                    <label htmlFor="skill-db">SQL</label>
                    <span>65%</span>
                    <meter id="skill-db" min="0" max="100" value="65">65%</meter>
                </li>
                <li>
                    <label htmlFor="skill-web">HTML / CSS</label>
                    <span>90%</span>
                    <meter id="skill-web" min="0" max="100" value="90">90%</meter>
                </li>
                <li>
                    <label htmlFor="skill-csharp">C#</label>
                    <span>45%</span>
                    <meter id="skill-csharp" min="0" max="100" value="45">45%</meter>
                </li>
            </ul>
        </section>
    );
}

export default Skills;