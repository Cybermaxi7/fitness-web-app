import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../ui/Carousel";

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="mt-[4.7rem] font-open ">
            <Carousel />
            <div className="absolute top-[4.7rem] left-0 bg-stone-900/50 w-full h-[calc(100dvh-4.7rem)] text-white flex flex-col items-center justify-center text-center font-medium ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
                    Welcome to{" "}
                    <span className="font-semibold text-green-500 bg-stone-900/80 px-1 ">
                        Exercise Hub
                    </span>
                </h1>
                <h2 className="w-[90%] md:w-[80%] lg:w-[75%] text-lg sm:text-xl md:text-2xl">
                    Your gateway to a stronger, resilient you starts at Exercise
                    Hub. Dive deep into a sea of exercises and sculpt the body
                    you desire.
                </h2>
                <Button
                    onClick={() => navigate("/exercises")}
                    className="text-2xl mt-20"
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
