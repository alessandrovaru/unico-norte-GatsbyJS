import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import MainCarrousel from "../components/main-carrousel/MainCarrousel"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  porfolio1,
  porfolio2,
  porfolio3,
  porfolio4,
  porfolio5,
  porfolio6,
  title1,
  subtitle,
}) => {

  return (
    <div className="index-carrousel">
      <MainCarrousel
        porfolio1={porfolio1}
        porfolio2={porfolio2}
        porfolio3={porfolio3}
        porfolio4={porfolio4}
        porfolio5={porfolio5}
        porfolio6={porfolio6}
        title1={title1}
        subtitle={subtitle}
      />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  porfolio1: PropTypes.object,
  porfolio2: PropTypes.object,
  porfolio3: PropTypes.object,
  porfolio4: PropTypes.object,
  porfolio5: PropTypes.object,
  porfolio6: PropTypes.object,
  title1: PropTypes.string,
  subtitle: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        title1={frontmatter.title1}
        subtitle={frontmatter.subtitle}
        porfolio1={frontmatter.porfolio1}
        porfolio2={frontmatter.porfolio2}
        porfolio3={frontmatter.porfolio3}
        porfolio4={frontmatter.porfolio4}
        porfolio5={frontmatter.porfolio5}
        porfolio6={frontmatter.porfolio6}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            text
          }
          heading
          description
        }
        porfolio1 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        porfolio2 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        porfolio3 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        porfolio4 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        porfolio5 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        porfolio6 {
          title
          subtitle
          youtubeurl
          spotifyurl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
            publicURL
          }
        }
        title1
        subtitle
      }
    }
  }
`;
