import { Logo } from "./Logo";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";

export function Header() {
    const [IsHidden, setIsHidden] = useState(true)

    const navItems = [
        { name: "Home", slug: "home" },
        { name: "About", slug: "about" },
        { name: "Skills", slug: "skills" },
        { name: "Project", slug: "projects" },
        { name: "Contact", slug: "contact" },
    ];

    // Track the currently active section
    const [activeSection, setActiveSection] = useState("home");

    return (
        <div
            className="sticky top-0 z-[9999] h-[10vh] md:h-[15vh] w-[100%] md:bg-[#0e0e0e70] md:backdrop-blur-md"
        >
            <div className="absolute top-0 left-0 w-full h-full ">
                <nav
                    className="absolute h-full w-full flex justify-between items-start md:items-center px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[60px] 2xl:px-[80px]"
                >
                    <Logo className="mt-2 md:mt-0" />
                    <div
                        className={`relative -right-5 h-[100vh] md:h-fit bg-[#0e0e0e70] backdrop-blur-md md:backdrop-blur-none md:bg-transparent md:top-0 w-[70vw] lg:w-[60vw] flex flex-col md:flex-row px-2 items-center justify-evenly linksContainer ${IsHidden ? 'hidden' : "flex"} md:flex`}
                    >
                        {navItems?.map((item) => (
                            <Link
                                to={item.slug}
                                smooth={true}
                                duration={500}
                                offset={-110}
                                spy={true}
                                key={item.name}
                                onClick={() => setIsHidden(true)} // Update active section
                                onSetActive={() => setActiveSection(item.slug)}
                                className={`relative cursor-pointer  text-[18px] tracking-wider ${activeSection === item.slug
                                    ? "text-[#c7ce00]"
                                    : "text-[#fffeb2] hover:text-[#c7ce00]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
                <button
                    className={`relative left-[93%] md:hidden text-2xl text-[#fffeb2] cursor-pointer mt-2 `}
                    onClick={() => setIsHidden((prev) => !prev)}
                >
                    <i className={`${IsHidden ? "ri-menu-2-line" : "ri-close-large-line"}`}></i>
                </button>
            </div>
        </div>
    );
}
