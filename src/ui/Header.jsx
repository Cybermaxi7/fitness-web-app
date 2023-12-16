import { useCallback, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { useQueryContext } from "../context/QueryContext";
import Nav from "./Nav";
export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { setQuery } = useQueryContext();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleChange = useCallback(
        (e) => {
            setSearch(e.target.value);
        },
        [setSearch]
    );
    function handleSearch(e) {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        navigate("/exercises");
    }
    return (
        <header className=" bg-white flex items-center justify-between font-open text-stone-800 px-4 gap-2 sm:gap-8 lg:gap-12 md:px-8 py-4 z-[100] shadow-sm fixed top-0 left-0 w-full ">
            <div className=" text-4xl md:text-2xl text-green-500 font-mont">
                <Link
                    to="/"
                    className="hover:text-green-600  transition duration-400 ease-in-out whitespace-nowrap"
                >
                    {isMobile ? "EH" : "Exercise Hub"}
                </Link>
            </div>
            <form
                className="flex items-center justify-center w-full border rounded-md gap-2 px-2 focus-within:ring-2 focus-within:ring-green-500"
                onSubmit={handleSearch}
            >
                <GoSearch className="text-xl ml-2 " />

                <input
                    type="text"
                    placeholder="Search for Exercises"
                    className="w-full outline-none px-2 py-2 placeholder:text-inherit "
                    value={search}
                    onChange={handleChange}
                />
            </form>
            <Nav />
        </header>
    );
}
