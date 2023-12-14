import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "../components/Image";
import SwiperComponent from "../components/Swiper";
import { desktopImages, mobileImages } from "../data/data";

export default function Carousel() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        // <div className="w-full h-full overflow-hidden">
        //     <Slider {...settings}>
        //             {!isMobile
        //                 ? desktopImages.map((images) => (
        //                       <div key={images.img} className="w-full h-[calc(100dvh-4.7rem)]">
        //                           <Image src={images.img} alt={images.alt} />
        //                       </div>
        //                   ))
        //                 : mobileImages.map((images) => (
        //                       <div key={images.img} className="w-full h-[calc(100dvh-4.7rem)]">
        //                           <Image src={images.img} alt={images.alt} />
        //                       </div>
        //                   ))}
        //     </Slider>
        // </div>
        
            <SwiperComponent />
        
    );
}
