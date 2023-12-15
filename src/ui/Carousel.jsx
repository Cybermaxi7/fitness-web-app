import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "../components/Image";
import SwiperComponent from "../components/Swiper";
import { desktopImages, mobileImages } from "../data/data";

export default function Carousel() {
    return <SwiperComponent />;
}
