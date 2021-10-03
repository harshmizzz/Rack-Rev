import React from "react";
import Media from "react-media";
import "./HowDoesItWork.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";
import img1 from "../../../Images/Gauge a person, your own way.svg";
import img2 from "../../../Images/On the safer side....svg";
import img3 from "../../../Images/forgo the incompatible.svg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function HowDoesItWork() {
  return (
    <>
      <Media query={{ maxWidth: 800 }}>
        {(matches) =>
          matches ? (
            <>
              <div className="HowDoesItWorkBody">
                <h3>How Does It Work?</h3>

                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="HowDoesItWorkContainer">
                      <div className="HowDoesItWorkimg">
                        <img src={img1} alt="" />
                      </div>
                      <div className="HowDoesItWorkText">
                        <h3>Gauge a person, your own way!</h3>
                        <p>
                          We have a surprise for you! You can now ask whatever
                          you always wanted to ask strangers, before adding them
                          to your bracket!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="HowDoesItWorkContainer">
                      <div className="HowDoesItWorkimg">
                        <img src={img2} alt="" />
                      </div>
                      <div className="HowDoesItWorkText">
                        <h3>Forgo the incompatible</h3>
                        <p>
                          Select a few admirables, remove the unsuitable to
                          avoid the wild goose chase
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="HowDoesItWorkContainer">
                      <div className="HowDoesItWorkimg">
                        <img src={img3} alt="" />
                      </div>
                      <div className="HowDoesItWorkText">
                        <h3>On the safer side...</h3>
                        <p>
                          Verified users, verified users, verified all the way!
                          oh what a relief it is to enable and disable calls on
                          your way
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
          ) : (
            <>
              <div className="HowDoesItWorkBody">
                <h3>How Does It Work?</h3>
                <div className="row imageRow">
                  <div className="imgCard column col-lg-4">
                    <img className="HowDoesItWorkImg" src={img1} alt="" />
                    <h3>Gauge a person, your own way!</h3>
                    <p>
                      We have a surprise for you! You can now ask whatever you
                      always wanted to ask strangers, before adding them to your
                      bracket!
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="HowDoesItWorkImg" src={img2} alt="" />
                    <h3>Forgo the incompatible</h3>
                    <p>
                      Select a few admirables, remove the unsuitable to avoid
                      the wild goose chase
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="HowDoesItWorkImg" src={img3} alt="" />
                    <h3>On the safer side...</h3>
                    <p>
                      Verified users, verified users, verified all the way! oh
                      what a relief it is to enable and disable calls on your
                      way
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </Media>
    </>
  );
}

export default HowDoesItWork;
