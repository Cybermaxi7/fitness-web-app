import { Link, useSearchParams } from "react-router-dom";
import FilterOperation from "./FilterOperation";
import useExercises from "../hooks/useExercises";
import { useRef } from "react";
import Loader from "./Loader";
import Image from "../components/Image";
import { Img } from "react-image";
import Spinner from "./Spinner";

export default function ExercisesContainer() {
    const exercisesSectionRef = useRef();
    
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const { data: exercises, isLoading } = useExercises();
    console.log(exercises);
    //Filter operations
    const firstKey = searchParams.keys().next().value;
    console.log(firstKey);
    const filteredValue = searchParams.get(firstKey) || "all";
    let filteredExercises;
    if (filteredValue !== "all") {
        // Only filter when the value is not "all"
        filteredExercises = exercises?.filter(
            (exercise) => exercise[firstKey] === filteredValue
        );
    } else {
        // When the value is "all," use the original exercises array
        filteredExercises = exercises;
    }
    if (isLoading) return <Loader />;
    return (
        <div className="mt-[4.7rem] px-4 py-6 font-open text-stone-800">
        <FilterOperation scrollToRef={exercisesSectionRef} />
        <div
            ref={exercisesSectionRef}
            className="grid  grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center bg-white justify-start gap-4 md:gap-8 px-4 py-6 rounded-md shadow-md"
        >
            {filteredExercises?.map((exercise) => (
                <div
                    className="bg-white flex flex-col h-full gap-1 items-center justify-center  border rounded-lg border-green-400 px-2 py-3 shadow-lg"
                    key={exercise.id}
                >
                    {/* <Image
                        src={exercise.gifUrl}
                        alt="exercise1"
                        className="rounded-lg"
                    /> */}
                    <Img  src={exercise.gifUrl} loader={<Spinner />}/>
                    <p className="font-semibold text-sm sm:text-lg md:text-xl text-center capitalize">
                        {exercise.name}
                    </p>
                    <p className="text-sm md:text-lg">{exercise.target}</p>
                    <Link
                        to={`/exercise/${exercise.id}`}
                        className="btn text-white"
                    >
                        View Exercise
                    </Link>
                </div>
            ))}
        </div>
    </div>
    )
}

