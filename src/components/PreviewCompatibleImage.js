import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {

  const { alt = "", childImageSharp, image, text } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={alt+2}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        alt={alt+1}
      />
    );
    // for Netlify CMS 
  } else if (image) {
    return (
      <>
        {window.location.href.indexOf("admin") > -1 
        ? 
          <>
            <style type="text/css">
              {`
                #${text} {
                  background-image: url("${image}")
                }
              `}
            </style>
            <div id={text} className="featured-gif-container">
              <h3>{text}</h3>
            </div>
          </>
        :
          <>
            <style type="text/css">
              {`
                #${text} {
                  background-image: url("${image.publicURL}")
                }
              `}
            </style>
            <div id={text} className="featured-gif-container">
              <h3>{text}</h3>
            </div>
          </>
        }
      </>
      
    );
  } else {
    return null
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
