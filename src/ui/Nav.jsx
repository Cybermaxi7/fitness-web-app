import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useQueryContext } from "../context/QueryContext";
import { navLinks } from "../data/data";
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { setQuery } = useQueryContext();
    const toggleNav = () => {
        setIsNavOpen((open) => !open);
    };
    const closeNav = () => {
        setIsNavOpen(false);
    };
    const handleExerciseClick = () => {
        setQuery("");
        console.log("clicked")
    };
    useEffect(function () {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeNav();
            }
        });
    }, []);
    return (
        <nav className="">
            <div className="items-center justify-center bg-green-300 hover:bg-green-500 transition duration-300 ease-in-out p-2 rounded-md right-0 lg:hidden flex cursor-pointer">
                {isNavOpen ? (
                    <CgClose onClick={toggleNav} className="text-[24px]" />
                ) : (
                    <RiMenu2Fill onClick={toggleNav} className="text-[24px]" />
                )}
            </div>
            <ul
                className={`whitespace-nowrap flex ${
                    isNavOpen
                        ? "flex-col absolute top-24 bg-green-500/80 text-green-500 font-semibold right-0 items-end pr-10 w-[70%] h-screen pt-10 gap-4 z-20"
                        : "hidden"
                } md:gap-2  lg:flex lg:flex-row `}
            >
                {navLinks.map((nav) => (
                    <li key={nav.name} onClick={closeNav} className="nav">
                        {nav.name === "Exercises" ? (
                            <NavLink
                                className=" px-4 py-3 text-end flex "
                                to={nav.to}
                                onClick={handleExerciseClick}
                            >
                                {nav.name}
                            </NavLink>
                        ) : (
                            <NavLink
                                className=" px-4 py-3 text-end flex "
                                to={nav.to}
                            >
                                {nav.name}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
            <div
                onClick={closeNav}
                className={`${
                    isNavOpen
                        ? "block absolute bg-stone-100/10 backdrop-blur top-[4.7rem] left-0 w-full h-screen z-10"
                        : "hidden"
                }`}
            ></div>
        </nav>
    );
}
