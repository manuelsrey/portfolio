import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className="nav-container">
            <div className="logo">
                <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
                    Portfolio de Manuel
                </Link>
            </div>
            <div className="cta-btn">
                <Link className={`link ${pathname === "/projects" ? "active" : ""}`} href="projects">
                    Proyectos
                </Link>
                </div>
            <div className="cta-btn">
                <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
                    Sobre Mí
                </Link>
                </div>
            </div>
        
    )
}

export default Navbar;