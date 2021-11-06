import React from "react";
import "./InDevelopment.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function InDevelopment() {
  return (
    <div className="InDevelopment">
      <div>
        <SettingsOutlinedIcon />
        <div>
          <p>We are currently in Development Phase. </p>
          <p
            className="InDevelopmentLink"
            onClick={() => {
              window.location = "/Dashboard";
            }}
          >
            Go Back
          </p>
        </div>
      </div>
    </div>
  );
}
export default InDevelopment;
