import { Img } from "react-image";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FadeInLeft from "../ui/FadeInLeft";
import FadeInRight from "../ui/FadeInRight";

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="mt-[4.7rem] px-4 py-6">
            <div className="bg-white rounded-md px-4 py-5 font-open text-stone-800 flex items-center justify-center w-full h-full gap-8 md:gap-20 flex-col overflow-hidden">
                <div className="flex items-center justify-center flex-col gap-3">
                    <h2 className="uppercase mt-3 font-bold text-lg md:text-xl lg:text-2xl">
                        Welcome to Exercise Hub
                    </h2>
                    <p className="text-start md:text-center text-sm sm:text-lg md:text-xl">
                        At Exercise Hub, we're passionate about making fitness
                        accessible to everyone. Whether you're new to the world
                        of exercise or a seasoned pro, we're here to guide you
                        on your wellness journey.
                    </p>
                </div>
                <div className="flex items-center justify-between gap-8 md:gap-14 flex-col md:flex-row px-2 md:px-24 ">
                    <div className="w-full md:w-1/2">
                        <FadeInLeft>
                            <Img
                                src="assets/images/desktop-2.jpg"
                                className="rounded-lg shadow-lg"
                            />
                        </FadeInLeft>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
                        <FadeInRight>
                            <h3 className=" uppercase text-lg md:text-xl font-semibold border-b-2 border-b-green-500 mb-4 w-fit">
                                Our Mission
                            </h3>
                            <p className="text-sm md:text-lg">
                                Our mission is simple: provide a comprehensive
                                platform for individuals to discover and learn
                                from a diverse range of exercises. We aim to
                                empower users with the knowledge needed to lead
                                a healthy and active lifestyle.
                            </p>
                        </FadeInRight>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-8 md:gap-14 flex-col lg:flex-row px-2 md:px-24 ">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
                        <FadeInLeft>
                            <h3 className=" uppercase text-lg md:text-xl font-semibold border-b-2 border-b-green-500 mb-5 w-fit">
                                What Sets Us Apart
                            </h3>
                            <p className="text-sm md:text-lg">
                                <span className="font-bold">
                                    Expert Guidance:
                                </span>{" "}
                                Benefit from detailed instructions, tips, and
                                video demonstrations for each exercise, ensuring
                                proper form and technique. Our team of fitness
                                experts is here to support you.
                            </p>
                            <p className="text-sm md:text-lg">
                                <span className="font-bold">
                                    Large Exercise Database:
                                </span>{" "}
                                Explore a vast collection of exercises covering
                                different muscle groups, difficulty levels, and
                                equipment. Whatever your fitness goals, we've
                                got exercises to match.
                            </p>
                        </FadeInLeft>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <FadeInRight>
                            <Img
                                src="assets/images/desktop-3.jpg"
                                className="rounded-lg shadow-lg"
                            />
                        </FadeInRight>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-8 md:gap-14 flex-col lg:flex-row px-2 md:px-24 ">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
                        <FadeInLeft>
                            <h3 className=" uppercase text-lg md:text-xl font-semibold border-b-2 border-b-green-500 mb-4 w-fit ">
                                How It Works
                            </h3>

                            <p className="text-sm md:text-lg mb-2  font-medium">
                                <span className="font-bold">
                                    Browse Exercises:
                                </span>{" "}
                                Discover a wide range of exercises categorized
                                by body part, difficulty, and equipment
                                availability.
                            </p>
                            <p className="text-sm md:text-lg mb-2">
                                <span className="font-bold">
                                    Learn Proper Techniques:
                                </span>{" "}
                                Access detailed instructions and video
                                demonstrations to master the correct form for
                                each exercise.
                            </p>
                            <p className="text-sm md:text-lg">
                                <span className="font-bold">
                                    Build Your Routine:
                                </span>{" "}
                                Tailor your workout routine by selecting
                                exercises that match your preferences and
                                fitness goals.
                            </p>
                        </FadeInLeft>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <FadeInRight>
                            <h3 className=" uppercase text-lg md:text-xl font-semibold border-b-2 border-b-green-500 w-fit mb-4">
                                {" "}
                                Get Started Today
                            </h3>
                            <p className="text-sm md:text-lg">
                                Ready to embark on a journey to a healthier,
                                more active lifestyle? Dive into Exercise Hub
                                and start your fitness adventure today.
                            </p>
                            <Button
                                onClick={() => navigate("/exercises")}
                                className="text-xs md:text-lg mt-10 text-white w-full xsm:w-auto"
                            >
                                Get Started
                            </Button>
                        </FadeInRight>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full px-2 md:px-24">
                    <h3 className=" uppercase font-bold text-lg md:text-xl mb-5 ">
                        About The Developer
                    </h3>
                    <div className="w-full flex items-center justify-between gap-8 md:gap-16 flex-col lg:flex-row">
                        <Img
                            src="assets/images/me.jpg"
                            className="rounded-full w-72 aspect-auto"
                        />
                        <div className="flex items-start justify-between flex-col gap-10">
                            <p className="text-sm md:text-lg">
                                I'm Moses Agbe, a passionate software developer
                                with a love for coding and a commitment to
                                making a positive impact through technology. I
                                specialize in building web applications using
                                modern technologies. My expertise includes
                                front-end development, and I enjoy working on
                                projects that challenge me to learn and grow.
                            </p>
                            <div className="flex flex-col md:flex-row w-full items-center gap-3">
                                <Link
                                    to="https://www.buymeacoffee.com/cybermaxi7"
                                    className="bg-green-500 px-6 py-3 font-semibold rounded-lg hover:bg-green-700 cursor-pointer transition duration-300 ease-in-out text-white w-full md:w-auto text-center"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Support Me ❤️
                                </Link>
                                <Button
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white w-full md:w-auto text-center"
                                    to="https://www.linkedin.com/in/moses-agbe-b7766321b/"
                                >
                                    Linkedin
                                </Button>
                                <Button
                                    to="https://twitter.com/cybermaxi7"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white w-full md:w-auto text-center"
                                >Twitter</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
