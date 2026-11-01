
const skills = [
    { id: "skill-python", name: "Python", value: 70 },
    { id: "skill-react", name: "React / Next.js", value: 30 },
    { id: "skill-node", name: "Node.js", value: 50 },
    { id: "skill-db", name: "SQL", value: 65 },
    { id: "skill-web", name: "HTML / CSS", value: 90 },
    { id: "skill-csharp", name: "C#", value: 45 },
];

function Skills() {
    return (
        <section id="skills">
            <h2 className="mb-3.5 text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
                Technical Skills
            </h2>

            <ul className="grid gap-3.5">
                {skills.map((skill) => (
                    <li
                        key={skill.id}
                        className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5 text-sm"
                    >
                        <label htmlFor={skill.id}>{skill.name}</label>

                        <span className="font-semibold text-sky-300">
                            {skill.value}%
                        </span>

                        <div className="col-span-2 h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                                id={skill.id}
                                role="meter"
                                aria-label={skill.name}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={skill.value}
                                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
                                style={{ width: `${skill.value}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
