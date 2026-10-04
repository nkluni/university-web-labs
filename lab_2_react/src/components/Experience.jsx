function Experience() {
    return (
        <section id="experience">
            <h2>Досвід та практична діяльність</h2>
            <p>
                Офіційного місця роботи поки немає, тому нижче — недавній практичний
                досвід зі змагань та подій.
            </p>

            <section id="ctf">
                <h3>CTF-змагання</h3>
                <article>
                    <p>
                        <time dateTime="2026-07">Липень 2026</time> | Роль: Explorer / у
                        команді «Cyber_Valkyries»
                    </p>
                    <ul>
                        <li>
                            Розв'язувала завдання в категоріях: forensics, OSINT, reverse
                            engineering, steganography
                        </li>
                        <li>
                            Reverse engineering: здобула практичний досвід роботи з
                            інструментом Ghidra та аналізу скомпільованого бінарного коду
                        </li>
                        <li>
                            Steganography: навчилася шукати приховану інформацію в медіафайлах
                            за допомогою ExifTool
                        </li>
                        <li>
                            OSINT: навчилася збирати та структурувати публічну інформацію про
                            ціль без прямого злому
                        </li>
                        <li>
                            Forensics: навчилася аналізувати файлові системи та артефакти
                            Windows/Linux
                        </li>
                    </ul>
                </article>
            </section>
        </section>
    );
}

export default Experience;