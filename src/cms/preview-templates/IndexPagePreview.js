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
          image: getAsset(data.porfolio1.image)}}
        porfolio2={data.porfolio2 || {}}
        porfolio3={data.porfolio3 || {}}
        porfolio4={data.porfolio4 || {}}
        porfolio5={data.porfolio5 || {}}
        porfolio6={data.porfolio6 || {}}
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
