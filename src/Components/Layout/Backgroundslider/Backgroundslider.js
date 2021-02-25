import BackgroundSlider from "react-background-slider";
import im1 from "../../../assets/im1.jpeg";
import im2 from "../../../assets/im2.jpg";
import im3 from "../../../assets/im3.jpg";
import im4 from "../../../assets/im4.jpeg";
import React from "react";

function Backgroundslider() {
  return (
    <div>
      <BackgroundSlider
        images={[im1, im2, im3, im4]}
        duration={5}
        transition={2}
      />
    </div>
  );
}

export default Backgroundslider;
