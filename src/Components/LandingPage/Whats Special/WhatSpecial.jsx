import React from "react";
import "./WhatSpecial.css";
function WhatSpecial() {
  return (
    <div className="WhatSpecial">
      <div className="WhatSpecialTop">
        <div className="WhatSpecialHeading">WHAT’S SPECIAL ?</div>
      </div>
      <div className="WhatSpecialMiddle">
        <div className="WhatSpecialCards1">
          <div className="WhatSpecialCardBottom">
            <div className="WhatSpecialLine"></div>
            <div className="WhatSpecialCardContent">
              Best Stylist <br /> Suggestions
            </div>
          </div>
        </div>
        <div className="WhatSpecialCards2">
          <div className="WhatSpecialCardBottom">
            <div className="WhatSpecialLine"></div>
            <div className="WhatSpecialCardContent">
              Intelligent <br /> Recommendations
            </div>
          </div>
        </div>
        <div className="WhatSpecialCards3">
          <div className="WhatSpecialCardBottom">
            <div className="WhatSpecialLine"></div>
            <div className="WhatSpecialCardContent">
              Personal Wardrobe <br /> Management
            </div>
          </div>
        </div>
      </div>
      <div className="WhatSpecialBottom">
        <div className="WhatSpecialBottomLeft">
          <div>Take a Trip with your Stylist</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
            egestas imperdiet facilisis lorem lacus nibh.
          </p>
        </div>
        <div className="WhatSpecialBottomRight">
          <div>Import Your Wardrobe</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
            egestas imperdiet facilisis lorem lacus nibh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatSpecial;
