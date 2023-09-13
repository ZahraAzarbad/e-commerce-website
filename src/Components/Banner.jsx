import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "./product/Image";
import { Link } from "react-router-dom";
import bannerImage from "../assets/img/banner1.jpg";
import bannerTImage from "../assets/img/banner2.jpg";
import bannerThImage from "../assets/img/banner3.jpg";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-11/12 h-[435px] my-4 "
      >
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          {" "}
          <Link to="/categorypage/64dd42bdd7c6f41d3873157c">
            <Image
              className="w-100 h-100 object-cover block"
              imgSrc={bannerImage}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          {" "}
          <Link to="/categorypage/64dc80dff88b88b5f4068bd6">
            <Image imgSrc={bannerTImage} />
          </Link>{" "}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <Link to="/categorypage/64d8f4cbc2e821617d738c27">
            <Image imgSrc={bannerThImage} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
