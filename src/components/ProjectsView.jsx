import React, { Component } from 'react'
import { Callout, Colors, Row, Column } from 'react-foundation'
import R from 'ramda'

export default class ProjectsView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    this.p = this.props.projects.finishedProjects
    this.p.map(proj => proj.photo1 = require(`../static/projects/${proj.photo1}`))
    this.p.map(proj => proj.photo2 = require(`../static/projects/${proj.photo2}`))
    return (
      <div className="projectsView">
        {this.p.map(proj =>
          <div key={proj.title}>
            <h5>{proj.title}</h5>
            <img src={proj.photo1} />
            <p>{proj.caption1}</p>
            <img src={proj.photo2} />
            <p>{proj.caption2}</p>
            <p>{proj.story}</p>
          </div>
        )}
      </div>
    )
  }
}
