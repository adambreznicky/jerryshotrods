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
    return (
      <div className="projectsView">
        {this.props.projects.finishedProjects.map(proj =>
          <div key={proj.title}>
            <Row className="display">
              <h5>{proj.title}</h5>
              <Column large={6}>
                <img src={require("../static/projects/"+proj.photo1)}/>
                <p>{proj.caption1}</p>
              </Column>
              <Column large={6}>
                <img src={require("../static/projects/"+proj.photo2)} />
                <p>{proj.caption2}</p>
              </Column>
              <p>{proj.story}</p>
            </Row>
          </div>
        )}
      </div>
    )
  }
}
