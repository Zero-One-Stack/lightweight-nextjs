import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { DefaultSeo } from 'next-seo'
import { Header } from '../components/layout/header'
import SEO from '../../next-seo.config'

import '../sass/index.scss'

const App = ({ Component, pageProps }) => (
  <Fragment>
    <DefaultSeo {...SEO} />
    <Header />
    <Component {...pageProps} />
  </Fragment>
)

export default App

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
