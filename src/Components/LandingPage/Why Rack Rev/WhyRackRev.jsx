import React from "react";
import "./WhyRackRev.css";
import img1 from "../../../Images/Fresh Folk Plants 5.png";
import img2 from "../../../Images/Clothes.png";
function WhyRackRev() {
  return (
    <>
      <div className="body" id="MeetUs">
        <div className="coverBody">
          <h3> Why RACK REV? </h3>
          <div className="firstSection">
            <p className="para para1">
              People don't "fall" in love, they "rise" in love{" "}
              <span>
                <br />
              </span>
              But nowadays this journey of finding that love has just turned
              into a race of swiping right and left which leads you nowhere. We
              understand how important a healthy relationship can be to multiply
              your strenght but this forest is too dense and dark, affecting
              your potential to be happy and successful. Trust us, this is a
              huge problem.
            </p>
            <img src={img1} className="birthImage1" alt="" />
          </div>
          <br />
          <br />
          <div className="secondSection ">
            <p className="para2">
              No more worries, LoveNote is at your rescue!{" "}
              <span>
                <br />
              </span>
              We are here to help you in this journey and provide you a safer
              environment, this being our only vission and mission. We don't
              make our users madly run in the race of swiping left and right but
              we work calmly, safely and taking you at your own pace.
              <span>
                <br />
                <br />
              </span>
              Be ready to join our hands so that you can hold your partner's
              hands forever.
              <span>
                <br />
                <br />
              </span>
              Join us to being a forever story{" "}
              <span>
                <br />
              </span>
              @LoveNote
            </p>
            <img src={img2} className="birthImage2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyRackRev;
