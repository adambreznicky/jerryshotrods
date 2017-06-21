import React from 'react'
import { Menu, MenuItem } from 'react-foundation'

import ga from '../util/GoogleAnalytics'
ga.pageview(window.location.pathname)

const App = () => (
  <div>
    <div className="menu-active-state-example">
      <Menu>
        <MenuItem isActive><a>Home</a></MenuItem>
        <MenuItem><a>About</a></MenuItem>
        <MenuItem><a>Nachos</a></MenuItem>
      </Menu>
    </div>
    <p>
      Hello there, dude.
    </p>
    <button id="tester">test button</button>
  </div>
)

export default App
