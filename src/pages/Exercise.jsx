import { FaCheck } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Img } from "react-image";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../components/Image";
import useExercise from "../hooks/useExercise";
import Loader from "../ui/Loader";

import Spinner from "../ui/Spinner";
export default function Exercise() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: exercise, isLoading } = useExercise(id);
    // console.log(data)
    if (isLoading) return <Loader one />;
    return (
        <div className="mt-[4.7rem] w-full h-full px-4 py-6  font-open">
            {exercise ? (
                <div className="bg-white w-full h-full rounded-lg flex items-center justify-between px-6 py-8  text-stone-800 flex-col gap-8 lg:gap-2 lg:flex-row relative">
                    <h2 className="uppercase text-green-500 font-bold text-sm sm:text-lg md:text-xl text-center self-center">
                        {exercise.name}
                    </h2>
                    <div className="h-full w-full lg:w-1/2 flex items-center justify-center">
                        <Img
                            src={exercise.gifUrl}
                            alt={exercise.name}
                            loader={<Spinner />}
                        />
                    </div>
                    <div className="h-full  w-full lg:w-1/2 flex flex-col gap-4 items-start justify-center">
                        <div className="flex gap-4 items-center justify-center">
                            <h3 className="uppercase text-green-500 font-semibold">
                                Equipment
                            </h3>
                            <p className="text-xs sm:text-sm md:text-lg">
                                {exercise.equipment}
                            </p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <h3 className="uppercase text-green-500 font-semibold">
                                Target
                            </h3>
                            <p className="text-xs sm:text-sm md:text-lg">
                                {exercise.target}
                            </p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <h3 className="uppercase text-green-500 font-semibold">
                                Body Part
                            </h3>
                            <p className="text-xs sm:text-sm md:text-lg">
                                {exercise.bodyPart}
                            </p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <h3 className="uppercase text-green-500 font-semibold">
                                Secondary Muscle
                            </h3>
                            {exercise.secondaryMuscles.map((muscle, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-sm md:text-lg"
                                >
                                    {muscle}
                                </p>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            <h3 className="text-center  uppercase font-semibold text-green-500 text-sm md:text-lg">
                                Instructions
                            </h3>
                            {exercise.instructions.map((instruction, index) => (
                                <p
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <FaCheck className="text-lg md:text-xl lg:text-2xl text-green-500 mt-1 flex-none w-5" />
                                    <span className="text-xs md:text-sm">
                                        {instruction}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={() => navigate(-1)}
                        className="bg-stone-100 w-8 md:w-12 flex items-center justify-center h-8 md:h-12 absolute top-5 md:top-2 left-4 cursor-pointer"
                    >
                        <IoArrowBack className="text-xl md:text-3xl text-green-500" />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

// bodyPart
// :
// "upper arms"
// equipment
// :
// "assisted"
// gifUrl
// :
// "https://v2.exercisedb.io/image/j9cynN48fUkYqk"
// id
// :
// "0018"
// instructions
// :
// (5) ['Stand with your feet shoulder-width apart and hold a towel with both hands behind your head.', 'Keep your elbows close to your ears and your upper arms stationary.', 'Slowly extend your forearms upward, squeezing your triceps at the top.', 'Pause for a moment, then slowly lower the towel back down to the starting position.', 'Repeat for the desired number of repetitions.']
// name
// :
// "assisted standing triceps extension (with towel)"
// secondaryMuscles
// :
// ['shoulders']
// target
// :
// "triceps"
