import { useSearchParams } from "react-router-dom";

export default function Filter({ filterField, options, scrollToRef }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterField, value);
        // if (searchParams.get("page")) {
        //     searchParams.set("page", 1);
        // }
        if (filterField === "bodyPart") {
            searchParams.delete("target");
        } else if (filterField === "target") {
            searchParams.delete("bodyPart");
        }
        setSearchParams(searchParams);
        // Scroll to the specified ref when a filter button is clicked
        console.log(scrollToRef.current);

        // Calculate the offset based on the target element's position
        const targetOffset = scrollToRef.current.offsetTop;
        console.log(targetOffset);
        // Scroll to the specified offset
        window.scrollTo({
            top: targetOffset - 80,
            // behavior: "smooth",
        });
    }

    return (
        <div className="border border-gray-100 bg-green-400 shadow-sm rounded-sm px-2 py-4 flex gap-2 flex-wrap items-center justify-center">
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    className={`${
                        option.value === currentFilter
                            ? "bg-green-600 text-white"
                            : "bg-gray-100"
                    } border-none rounded-lg font-semibold text-xs sm:text-sm md:text-lg px-2 py-1 transition whitespace-nowrap duration-300 ${
                        option.value !== currentFilter
                            ? "hover:bg-green-500 hover:text-white"
                            : ""
                    }`}
                    disabled={option.value === currentFilter}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
