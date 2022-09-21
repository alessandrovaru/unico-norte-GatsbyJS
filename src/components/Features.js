import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const FeatureGrid = ({ gridItems }) => (
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {gridItems.map((item) => (
      <>
        <SwiperSlide key={item.text}>
          <div>
            <div className="has-text-centered">
              <div
                style={{
                  width: "100%",
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </>
    ))}
  </Swiper>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
