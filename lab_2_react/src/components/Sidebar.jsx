
import Header from "./Header";
import Contact from "./Contact";
import Skills from "./Skills";
import Languages from "./Languages";

function Sidebar() {
    return (
        <aside className="flex flex-col gap-8 bg-gradient-to-b from-[#10294a] to-[#0b1b33] px-7 py-10 text-[#dbe7f5] min-[901px]:gap-8 min-[901px]:px-7">
            <Header />
            <Contact />
            <Skills />
            <Languages />
        </aside>
    );
}

export default Sidebar;
