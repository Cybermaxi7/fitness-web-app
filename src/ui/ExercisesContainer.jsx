import { useEffect, useRef } from "react";
import { Img } from "react-image";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Image from "../components/Image";
import useExercises from "../hooks/useExercises";
import FilterOperation from "./FilterOperation";
import Loader from "./Loader";
import Spinner from "./Spinner";

export default function ExercisesContainer() {
    const exercisesSectionRef = useRef();
  const { isLoading, exercisesInStore: exercises } = useExercises();
  console.log(exercises)
  const [searchParams] = useSearchParams();

  

  const firstKey = searchParams.keys().next().value;
  const filteredValue = searchParams.get(firstKey) || "all";
  // Only when filter value is not all
  const filteredExercises =
    filteredValue !== "all"
      ? exercises.data?.filter((exercise) => exercise[firstKey] === filteredValue)
      : exercises.data;

  if (isLoading) {
    return <Loader two />;
  }
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
                        <Img src={exercise.gifUrl} loader={<Spinner />} />
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
            <div>Want More? Search for Exercises</div>
        </div>
    );
}
