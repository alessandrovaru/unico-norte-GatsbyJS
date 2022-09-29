import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    console.log(getAsset(data.porfolio1.image))
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
        porfolio1={{
          title: data.porfolio1.title,
          subtitle: data.porfolio1.subtitle,
          image: getAsset(data.porfolio1.image),
          spotifyurl: data.porfolio1.spotifyurl,
          youtubeurl: data.porfolio1.youtubeurl
        }}
        porfolio2={{
          title: data.porfolio2.title,
          subtitle: data.porfolio2.subtitle,
          image: getAsset(data.porfolio2.image),
          spotifyurl: data.porfolio2.spotifyurl,
          youtubeurl: data.porfolio2.youtubeurl
        }}
        porfolio3={{
          title: data.porfolio3.title,
          subtitle: data.porfolio3.subtitle,
          image: getAsset(data.porfolio3.image),
          spotifyurl: data.porfolio3.spotifyurl,
          youtubeurl: data.porfolio3.youtubeurl
        }}
        porfolio4={{
          title: data.porfolio4.title,
          subtitle: data.porfolio4.subtitle,
          image: getAsset(data.porfolio4.image),
          spotifyurl: data.porfolio4.spotifyurl,
          youtubeurl: data.porfolio4.youtubeurl
        }}
        porfolio5={{
          title: data.porfolio5.title,
          subtitle: data.porfolio5.subtitle,
          image: getAsset(data.porfolio5.image),
          spotifyurl: data.porfolio5.spotifyurl,
          youtubeurl: data.porfolio5.youtubeurl
        }}
        porfolio6={{
          title: data.porfolio6.title,
          subtitle: data.porfolio6.subtitle,
          image: getAsset(data.porfolio6.image),
          spotifyurl: data.porfolio6.spotifyurl,
          youtubeurl: data.porfolio6.youtubeurl
        }}
        title1={data.title1}
        subtitle={data.subtitle}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
