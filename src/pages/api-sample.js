import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const APISample = ({ randomImage }) => (<img className='image' src={randomImage}/>)

APISample.getInitialProps = async ctx => {
  try {
    const response = await axios.get('https://foodish-api.herokuapp.com/api/images/pizza')
    const randomImage = response.data.image
    return { randomImage }
  } catch (error) {
    return { error }
  }
}

APISample.propTypes = {
  randomImage: PropTypes.any
}

export default APISample
