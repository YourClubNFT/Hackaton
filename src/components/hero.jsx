import React from "react";
import bannerImage from "../assets/images/banner.png";
import logoImage from "../assets/images/logo_yc_light.png";

export default function Hero() {
  return (
    <div
      className="hero bg-cover relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        height: "auto",
        minHeight: "30vh",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1
            className="mb-5 text-3xl sm:text-5xl font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            <img
              src={logoImage}
              alt="Logo"
              className="h-14 sm:h-20 md:h-24 lg:h-28"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
