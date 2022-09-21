import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function FullWidthImage(props) {
  const {
    img,
    title,
    subheading,
  } = props;

  

  return (

    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div
              className="margin-top-0"
              style={{
                display: "grid",
                alignItems: "center",
                height: "100vh"
              }}
            >
              {img?.url ? (
                <img
                  src={img}
                  objectFit={"cover"}
                  style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    height: "100%",
                    width: "100%",
                  }}
                  // You can optionally force an aspect ratio for the generated image
                  aspectratio={3 / 1}
                  // This is a presentational image, so the alt should be an empty string
                  alt=""
                  formats={["auto", "webp", "avif"]}
                />
              ) : (
                <GatsbyImage
                  image={img}
                  objectFit={"cover"}
                  style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    height: "100%",
                  }}
                  layout="fullWidth"
                  // You can optionally force an aspect ratio for the generated image
                  aspectratio={3 / 1}
                  // This is a presentational image, so the alt should be an empty string
                  alt=""
                  formats={["auto", "webp", "avif"]}
                />
              )}
              {(title || subheading) && (
                <div
                  style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                  }}
                >
                  {/* Any content here will be centered in the component */}
                  {title && (
                    <h1
                      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                      style={{
                        backgroundColor: "#080808",
                        color: "white",
                        lineHeight: "1",
                        padding: "0.25em",
                      }}
                    >
                      {title}
                    </h1>
                  )}
                  {subheading && (
                    <h3
                      className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                      style={{
                        backgroundColor: "#080808",
                        color: "white",
                        lineHeight: "1",
                        padding: "0.25rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {subheading}
                    </h3>
                  )}
                </div>
              )}
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
                className="margin-top-0"
                style={{
                  display: "grid",
                  alignItems: "center",
                  height: "100vh"
                }}
              >
                {img?.url ? (
                  <img
                    src={img}
                    objectFit={"cover"}
                    style={{
                      gridArea: "1/1",
                      // You can set a maximum height for the image, if you wish.
                      height: "100%",
                      width: "100%",
                    }}
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    formats={["auto", "webp", "avif"]}
                  />
                ) : (
                  <GatsbyImage
                    image={img}
                    objectFit={"cover"}
                    style={{
                      gridArea: "1/1",
                      // You can set a maximum height for the image, if you wish.
                      height: "100%",
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    formats={["auto", "webp", "avif"]}
                  />
                )}
                {(title || subheading) && (
                  <div
                    style={{
                      // By using the same grid area for both, they are stacked on top of each other
                      gridArea: "1/1",
                      position: "relative",
                      // This centers the other elements inside the hero component
                      placeItems: "center",
                      display: "grid",
                    }}
                  >
                    {/* Any content here will be centered in the component */}
                    {title && (
                      <h1
                        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                        style={{
                          backgroundColor: "#080808",
                          color: "white",
                          lineHeight: "1",
                          padding: "0.25em",
                        }}
                      >
                        {title}
                      </h1>
                    )}
                    {subheading && (
                      <h3
                        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                        style={{
                          backgroundColor: "#080808",
                          color: "white",
                          lineHeight: "1",
                          padding: "0.25rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        {subheading}
                      </h3>
                    )}
                  </div>
                )}
              </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
