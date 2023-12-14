import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../ui/Carousel";
import HomeDetails from "../ui/HomeDetails";

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="mt-[4.7rem] font-open ">
            <Carousel />
           <HomeDetails />
        </div>
    );
}
