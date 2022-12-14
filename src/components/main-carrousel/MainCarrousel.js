import React from "react";

import { FaYoutube, FaSpotify } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image";

import logo from "../../img/white-logo.png";




// Import Swiper styles
import 'swiper/css';
import './styles.sass'
import { Link } from "gatsby";


const MainCarrousel = ({
  title1,
  subtitle,
  porfolio1, 
  porfolio2,
  porfolio3,
  porfolio4,
  porfolio5,
  porfolio6}) => {
  
  return (
    <>
      <div className='main-carrousel'>
        <Container>
          <Row>
              <Col>
                <div className="main content has-text-centered">
                  <GatsbyImage
                    image={logo}
                    alt="Unico Norte"
                    style={{ width: "14em"}}
                    className="main-logo"
                  />
                  <h1>{title1}</h1>
                  <p>{subtitle}</p>
                </div>
              </Col>
            </Row>
          <Row>
            <Col>
              <div className="main-gif">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="scene-container">
                      {typeof window !== 'undefined' && 
                        <>
                          <div className="simplePlane">
                            <GatsbyImage
                              image={porfolio1.image.childImageSharp.gatsbyImageData}
                              data-sampler="simplePlaneTexture"
                              alt=""
                              className="first"
                            />
                          </div>
                        </>
                      }
                    </div>
                    <div className="text-container">
                      <h2>{porfolio1.title}</h2>
                      <h3>{porfolio1.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio1.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio1.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-2">
                <div> 
                  {/* <video
                      image="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="text-container">
                      <h2>{porfolio2.title}</h2>
                      <h3>{porfolio2.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio2.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio2.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div> 
                    <div className="scene-container">
                      {typeof window !== 'undefined' && 
                      <>
                        <div className="simplePlane">
                          <GatsbyImage
                            image={porfolio2.image.childImageSharp.gatsbyImageData}
                            data-sampler="simplePlaneTexture"
                            alt=""
                            className="first"
                          />
                        </div>
                      </>
                      }
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-3">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="scene-container">
                        {typeof window !== 'undefined' && 
                          <>
                            <div className="simplePlane">
                              <GatsbyImage
                                image={porfolio3.image}
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        }              
                    </div>
                    <div className="text-container">
                      <h2>{porfolio3.title}</h2>
                      <h3>{porfolio3.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio3.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio3.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div> 
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-4">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="scene-container">
                      {typeof window !== 'undefined' && 
                        <>
                          <div className="simplePlane">
                            <GatsbyImage
                              image={porfolio4.image.childImageSharp.gatsbyImageData}
                              data-sampler="simplePlaneTexture"
                              alt=""
                              className="first"
                            />
                          </div>
                        </>
                      }
                    </div>
                    <div className="text-container">
                      <h2>{porfolio4.title}</h2>
                      <h3>{porfolio4.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio4.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio4.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div> 
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-5">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="text-container">
                      <h2>{porfolio5.title}</h2>
                      <h3>{porfolio5.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio5.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio5.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div> 
                    <div className="scene-container">
                      {typeof window !== 'undefined' && 
                        <>
                          <div className="simplePlane">
                              <GatsbyImage
                                image={porfolio5.image.childImageSharp.gatsbyImageData}
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                        </>
                      }
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-6">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="text-container">
                      <h2>{porfolio6.title}</h2>
                      <h3>{porfolio6.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio6.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio6.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div> 
                    <div className="scene-container">                      
                      {typeof window !== 'undefined' && 
                        <>
                         <div className="simplePlane">
                            <GatsbyImage
                              image={porfolio6.image.childImageSharp.gatsbyImageData}
                              data-sampler="simplePlaneTexture"
                              alt=""
                              className="first"
                            />
                          </div>
                        </>
                      }
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="main-gif-7">
                <div> 
                  {/* <video
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    
                    <div className="scene-container">                      
                      {typeof window !== 'undefined' && 
                        <>
                          <div className="simplePlane">
                            <GatsbyImage
                              image={porfolio6.image.childImageSharp.gatsbyImageData}
                              data-sampler="simplePlaneTexture"
                              alt=""
                              className="first"
                            />
                          </div>
                        </>
                      }
                    </div> 
                    <div className="text-container">
                      <h2>{porfolio6.title}</h2>
                      <h3>{porfolio6.subtitle}</h3>
                      <div className="icons-container">
                        <Link to={porfolio6.youtubeurl}>
                          <FaYoutube/>
                        </Link>
                        <Link to={porfolio6.youtubeurl}>
                          <FaSpotify/>
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MainCarrousel