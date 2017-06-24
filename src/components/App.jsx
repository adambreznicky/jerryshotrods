import React from 'react'

import ga from '../util/GoogleAnalytics'
ga.pageview(window.location.pathname)

import HeaderContainer from '../containers/HeaderContainer'
import Footer from './Footer'

const App = () => (
  <div>
    <HeaderContainer />
    <p>
      Hello there, dude.
    </p>
    <button id="tester">test button</button>
    <Footer />
  </div>
)

export default App
