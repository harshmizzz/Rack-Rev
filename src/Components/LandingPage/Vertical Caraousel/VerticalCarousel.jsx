import React from "react";
import "./VerticalCaraousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Mousewheel,
  Pagination,
  A11y,
} from "swiper";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import img1 from "../../../Images/Women.svg";
SwiperCore.use([EffectFade, Mousewheel, Autoplay, Pagination, A11y]);

function VerticalCarousel() {
  return (
    <>
      <div className="VerticalCarousel">
        <div className="VerticalCarouselHeading">HAVE YOU EVER?</div>
        <Swiper
          modules={[Autoplay, Pagination, A11y, EffectFade]}
          slidesPerView={1}
          effect={"fade"}
          mousewheel={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            800: {
              direction: "vertical",
            },
          }}
        >
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <div className="VerticalTopNumber">1</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>
                      BOUGHT AN OUTFIT THAT IS JUST HUNG IN YOUR DRAWER BUT
                      NEVER WORE ?
                    </p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      So much detail! You can now see them through images, hear
                      them through audio stories and understand if you are
                      similar (or not!) through our common questions It’s as if
                      you are actually interacting with the person in real life,
                      before matching
                    </p>
                    <p>So that you can choose your ONE & ONLY wisely !</p>
                  </div>
                </div>
              </div>
              <div className="VerticalImageRight">
                <img src={img1} alt="Home1" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <div className="VerticalTopNumber">1</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>
                      BOUGHT AN OUTFIT THAT IS JUST HUNG IN YOUR DRAWER BUT
                      NEVER WORE ?
                    </p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      So much detail! You can now see them through images, hear
                      them through audio stories and understand if you are
                      similar (or not!) through our common questions It’s as if
                      you are actually interacting with the person in real life,
                      before matching
                    </p>
                  </div>
                  <div className="VerticalImageBottom">
                    <p>So that you can choose your ONE & ONLY wisely !</p>
                  </div>
                </div>
              </div>
              <div className="VerticalImageRight">
                <img src={img1} alt="Home1" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default VerticalCarousel;
