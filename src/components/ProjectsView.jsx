import React, { Component } from 'react'
import { Callout, Colors, Row, Column } from 'react-foundation'

export default class ProjectsView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="projectsView">
        projects
      </div>
    )
  }
}
