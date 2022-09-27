import React from "react";

import { FaYoutube, FaSpotify } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap'

import Scene from '../Scene.js'
import VideoScene from '../VideoScene.js'

import logo from "../../img/white-logo.png";




// Import Swiper styles
import 'swiper/css';
import './styles.sass'


const MainCarrousel = ({firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  title,
  subtitle}) => {
  return (
    <>
      <div className='main-carrousel'>
        <Container>
          <Row>
              <Col>
                <div className="main content has-text-centered">
                  <img
                    src={logo}
                    alt="Unico Norte"
                    style={{ width: "14em"}}
                    className="main-logo"
                  />
                  <p>UNICONORTE es una productora audiovisual establecida en Caracas, Venezuela. </p>
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
                      {window.location.href.indexOf("admin") > -1 
                      ? 
                        <>
                          <div className="simplePlane">
                            <img
                              src="https://unsplash.it/1920/1080?random=1"
                              data-sampler="simplePlaneTexture"
                              alt=""
                              className="first"
                            />
                          </div>
                        </>
                      :
                        <>
                          <Scene/>
                        </>
                      }
                    </div>
                    <div className="text-container">
                      <h2>{firstImage.title}</h2>
                      <h3>{firstImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
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
                      src="https://storage.coverr.co/videos/SqATu9FFa3sMU8DgnrKVu01TfN8rEZgaE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzODg4MDUyfQ.8tcbQ9WM8G5SSt4iUy0MYhSswnJ-l2M5BKGftJVsN6k"
                      data-sampler="simplePlaneTexture"
                    /> */}
                    <div className="text-container">
                      <h2>{secondImage.title}</h2>
                      <h3>{secondImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
                      </div>
                    </div> 
                    <div className="scene-container">
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
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
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
                          </>
                        }
                    </div>
                    <div className="text-container">
                      <h2>{thirdImage.title}</h2>
                      <h3>{thirdImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
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
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
                          </>
                        }
                    </div>
                    <div className="text-container">
                      <h2>{fourthImage.title}</h2>
                      <h3>{fourthImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
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
                      <h2>{fifthImage.title}</h2>
                      <h3>{fifthImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
                      </div>
                    </div> 
                    <div className="scene-container">
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
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
                      <h2>{sixthImage.title}</h2>
                      <h3>{sixthImage.subtitle}</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
                      </div>
                    </div> 
                    <div className="scene-container">
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
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
                      {window.location.href.indexOf("admin") > -1 
                        ? 
                          <>
                            <div className="simplePlane">
                              <img
                                src="https://unsplash.it/1920/1080?random=1"
                                data-sampler="simplePlaneTexture"
                                alt=""
                                className="first"
                              />
                            </div>
                          </>
                        :
                          <>
                            <Scene/>
                          </>
                        }
                    </div> 
                    <div className="text-container">
                      <h2>TITLE</h2>
                      <h3>Project Name</h3>
                      <div className="icons-container">
                        <FaYoutube/>
                        <FaSpotify/>
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