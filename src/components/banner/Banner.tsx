import { useState } from "react";
import { BannerContainer, BannerWrapper } from "./banner.styles";
import images from "../../assets";

const Banner = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const handleMouseEnter2 = () => {
    setActive2(true);
  };

  const handleMouseLeave2 = () => {
    setActive2(false);
  };

  return (
    <BannerContainer>
      <BannerWrapper>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={images.logo}
          alt="logo"
          width="100"
          style={{
            marginBottom: "1rem",
            opacity: 0.8,
            transition: "transform 0.3s ease",
            transform: `${active ? "scale(0.6)" : "scale(1)"} ${
              active2 ? "rotate(360deg)" : "rotate(0deg)"
            }`,
          }}
        />
        <h2
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={{
            transition: "transform 0.3s ease",
            transform: active ? "scale(1.2)" : "scale(1)",
          }}
        >
          Animation Examples
        </h2>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
