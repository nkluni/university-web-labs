import Header from "./Header";
import Contact from "./Contact";
import Skills from "./Skills";
import Languages from "./Languages";

function Sidebar() {
    return (
        <aside className="sidebar">
            <Header />
            <Contact />
            <Skills />
            <Languages />
        </aside>
    );
}

export default Sidebar;