import { GoSearch } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Nav from "./Nav";
export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <header className=" bg-white flex items-center justify-between font-open text-stone-800 px-4 gap-2 sm:gap-8 lg:gap-24 md:px-8 py-4 z-50 shadow-sm fixed top-0 left-0 w-full ">
            <div className=" text-4xl md:text-2xl text-green-500 font-mont">
                <Link
                    to="/"
                    className="hover:text-green-700  transition duration-400 ease-in-out whitespace-nowrap"
                >
                    {isMobile ? "EH" : "Exercise Hub"}
                </Link>
            </div>
            <div className="flex items-center justify-center w-full border rounded-md gap-2 px-2 focus-within:ring-2 focus-within:ring-green-500">
                <GoSearch className="text-xl ml-2 " />
                <input
                    type="text"
                    placeholder="Search for Exercises"
                    className="w-full outline-none px-2 py-2 placeholder:text-inherit "
                />
            </div>
            <Nav />
        </header>
    );
}
