import React from 'react'

import ga from '../util/GoogleAnalytics'
ga.pageview(window.location.pathname)

const App = () => (
  <div>
    <p>
      Hello there, dude.
    </p>
    <button id="tester">test button</button>
  </div>
)

export default App
