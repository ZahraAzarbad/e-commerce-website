// import { useState } from "react";
// import Slider from "react-slick";
// import bgloginImage from "../assets/img/loginbg.png";

// const Banner = () => {
//   const [dotActive, setDocActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDocActive(next);
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "7%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotActive
//             ? {
//                 width: "30px",
//                 color: "#262626",
//                 borderRight: "3px #262626 solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//             : {
//                 width: "30px",
//                 color: "transparent",
//                 borderRight: "3px white solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//         }
//       >
//         {i + 1}
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           dots: true,
//           appendDots: (dots) => (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "2%",
//                 transform: "translateY(-50%)",
//               }}
//             >
//               <ul style={{ margin: "0px" }}> {dots} </ul>
//             </div>
//           ),
//           customPaging: (i) => (
//             <div
//               style={
//                 i === dotActive
//                   ? {
//                       width: "25px",
//                       color: "#262626",
//                       borderRight: "3px #262626 solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//                   : {
//                       width: "25px",
//                       color: "transparent",
//                       borderRight: "3px white solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//               }
//             >
//               {i + 1}
//             </div>
//           ),
//         },
//       },
//     ],
//   };
//   return (
//     <div className="w-full overflow-hidden">
//       <Slider {...settings}>
//         <div>
//           <img className="w-100 h-auto" src={bgloginImage} />
//         </div>

//         <div>
//           <img className="w-100 h-10" src={bgloginImage} />
//         </div>

//         <div>
//           <img className="w-100 h-10" src={bgloginImage} />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage from "../assets/img/banner1.jpg"; // Adjust the import path
import bannerTImage from "../assets/img/banner2.jpg"; // Adjust the import path
import bannerThImage from "../assets/img/banner3.jpg"; // Adjust the import path

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    showThumbs: false,
    autoPlay: true,
    infiniteLoop: true,
    onChange: (index) => {
      setDotActive(index);
    },
    // Other settings
  };

  return (
    <div className="w-full overflow-hidden">
      <Carousel {...settings}>
        <div>
          <img className="w-100 h-auto" src={bannerImage} alt="Slide 1" />
        </div>
        <div>
          <img className="w-100 h-auto" src={bannerTImage} alt="Slide 2" />
        </div>
        <div>
          <img className="w-100 h-auto" src={bannerThImage} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
