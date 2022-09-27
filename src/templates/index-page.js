import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
import MainCarrousel from "../components/main-carrousel/MainCarrousel"
// import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  subtitle,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div className="index-carrousel">
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <MainCarrousel/>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        Ver más proyectos...
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <MainCarrousel 
        firstImage={firstImage}
        secondImage={secondImage}
        thirdImage={thirdImage}
        fourthImage={fourthImage}
        fifthImage={fifthImage}
        sixthImage={sixthImage}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  firstImage: PropTypes.object,
  secondImage: PropTypes.object,
  thirdImage: PropTypes.object,
  fourthImage: PropTypes.object,
  fifthImage: PropTypes.object,
  sixthImage: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        firstImage={frontmatter.firstImage}
        secondImage={frontmatter.secondImage}
        thirdImage={frontmatter.thirdImage}
        fourthImage={frontmatter.fourthImage}
        fifthImage={frontmatter.fifthImage}
        sixthImage={frontmatter.sixthImage}
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


export const query = graphql`
  
    query IndexPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          title
          subtitle
          firstImage {
            title
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            linkYoutube
            linkSpotify
          }
          fourthImage {
            title
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            linkYoutube
            linkSpotify
          }
          thirdImage {
            title
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            linkYoutube
            linkSpotify
          }
          sixthImage {
            linkYoutube
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            linkSpotify
          }
          fifthImage {
            subtitle
            linkYoutube
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            linkSpotify
          }
          secondImage {
            subtitle
            linkYoutube
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            linkSpotify
          }
        }
      }
    }
`;
