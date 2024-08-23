import React from "react";
import { isMobile } from "react-device-detect";

const MobileWarning: React.FC = () => {
  if (!isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffcc00",
        color: "#000",
        textAlign: "center",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      For the best experience, please use the desktop version of our site.
    </div>
  );
};

export default MobileWarning;
