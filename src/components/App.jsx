import React from 'react'

import ga from '../util/GoogleAnalytics'
ga.pageview(window.location.pathname)

import HeaderContainer from '../containers/HeaderContainer'
import ViewContainer from '../containers/ViewContainer'
import Footer from './Footer'

const App = () => (
  <div id="jhr">
    <HeaderContainer />
    <ViewContainer />
    <Footer />
  </div>
)

export default App
