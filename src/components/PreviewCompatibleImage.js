import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "15px" };
  console.log(imageInfo);

  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt+2}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt+1}
      />
    );
    // for Netlify CMS 
  } else if (image) {
    return <img style={{imageStyle}} src={image} alt={alt+'z'} />;
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
