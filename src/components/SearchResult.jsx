import { Link } from "react-router-dom";
import { useQueryContext } from "../context/QueryContext";
import useSearchExercises from "../hooks/useSearchExercise";
import Loader from "../ui/Loader";
import Image from "./Image";

export default function SearchResult() {
    const { query } = useQueryContext();
    const { data: exercise, isLoading, error } = useSearchExercises(query);
    console.log(error);

    if (isLoading) return <Loader />;
    return (
        <div className="mt-[4.7rem] h-[calc(100dvh-4.7rem)] px-4 py-6 font-open text-stone-800">
            <h3 className="pb-4 font-semibold">
                Showing results for{" "}
                <span className="text-green-500">{query}</span>
            </h3>
            <div className="grid  grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center bg-white justify-start gap-4 md:gap-8 px-4 py-6 rounded-md shadow-md">
                {error ? (
                    <div className="col-span-3">Exercises with name <span className="font-semibold">{query}</span> couldn't be found, try rephrasing the search term</div>
                ) : (
                    exercise?.map((exercise) => (
                        <div
                            className="bg-white flex flex-col h-full gap-1 items-center justify-center  border rounded-lg border-green-400 px-2 py-3 shadow-lg"
                            key={exercise.id}
                        >
                            <Image
                                src={exercise.gifUrl}
                                alt="exercise1"
                                className="rounded-lg"
                            />
                            <p className="font-semibold text-sm sm:text-lg md:text-xl text-center capitalize">
                                {exercise.name}
                            </p>
                            <p className="text-sm md:text-lg">
                                {exercise.target}
                            </p>
                            <Link
                                to={`/exercise/${exercise.id}`}
                                className="btn text-white"
                            >
                                View Exercise
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
