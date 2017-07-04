import React, { Component } from 'react'
import { Callout, Colors, Row, Column,
         Pagination, PaginationEllipsis,
         PaginationPrevious, PaginationItem,
         PaginationNext, Inline } from 'react-foundation'
import R from 'ramda'

export default class ProjectsView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedPage: 1
    }
  }

  setPage(pageNum) {
    this.setState({selectedPage: pageNum})
    window.scrollTo(0, 0)
  }

  previousPage(){
    const prev = this.state.selectedPage - 1
    this.setState({selectedPage: prev})
    window.scrollTo(0, 0)
  }

  nextPage(){
    const next = this.state.selectedPage + 1
    this.setState({selectedPage: next})
    window.scrollTo(0, 0)
  }

  render() {
    const totalNumPages = 13
    const total = this.props.projects.finishedProjects.length
    const perPage = total/totalNumPages
    const max = perPage * this.state.selectedPage
    const min = max - perPage

    const prev = this.state.selectedPage - 1
    const next = this.state.selectedPage + 1
    const prevPrev = totalNumPages - 2

    const projList = this.props.projects.finishedProjects.map(function(proj, i) {
      if (i >= min && i <= max) {
        if (proj.photo2 != "") {
          return <div key={proj.title+i}>
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
          </div>;
        }
        else {
          return <div key={proj.title+i}>
            <Row className="display">
              <h5>{proj.title}</h5>
              <Column small={10} centerOnLarge centerOnSmall>
                <img src={require("../static/projects/"+proj.photo1)}/>
                <p>{proj.caption1}</p>
              </Column>
              <p>{proj.story}</p>
            </Row>
          </div>;
        }
      }
    })

    let pagination
    if (this.state.selectedPage == 1) {
      pagination = (
        <Pagination aria-label="Pagination" isCentered>
          <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
          <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
          <PaginationItem onClick={() => this.setPage(2)}><a aria-label="Page 2">2</a></PaginationItem>
          <PaginationItem onClick={() => this.setPage(3)}><a aria-label="Page 3">3</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem onClick={() => this.setPage(totalNumPages)}><a aria-label={"Page "+totalNumPages}>{totalNumPages}</a></PaginationItem>
          <PaginationNext onClick={() => this.nextPage()}><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
        </Pagination>
      )
    }
    else if (this.state.selectedPage == totalNumPages){
      pagination = (
        <Pagination aria-label="Pagination" isCentered>
          <PaginationPrevious onClick={() => this.previousPage()}><a aria-label="Previous page">Previous <Inline showForSr>page</Inline></a></PaginationPrevious>
          <PaginationItem onClick={() => this.setPage(1)}><a aria-label={"Page 1"}>1</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem onClick={() => this.setPage(prevPrev)}><a aria-label={"Page "+prevPrev}>{prevPrev}</a></PaginationItem>
          <PaginationItem onClick={() => this.setPage(prev)}><a aria-label={"Page "+prev}>{prev}</a></PaginationItem>
          <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> {totalNumPages}</PaginationItem>
          <PaginationNext isDisabled>Next <Inline showForSr>page</Inline></PaginationNext>
        </Pagination>
      )
    }
    else {
      let prevJoint
      let nextJoint
      if (prev != 1) {
        prevJoint = (
          <PaginationItem onClick={() => this.setPage(1)}><a aria-label={"Page 1"}>1</a></PaginationItem>
        )
      }
      if (next != totalNumPages) {
        nextJoint = (
          <PaginationItem onClick={() => this.setPage(totalNumPages)}><a aria-label={"Page "+totalNumPages}>{totalNumPages}</a></PaginationItem>
        )
      }
      pagination = (
        <Pagination aria-label="Pagination" isCentered>
          <PaginationPrevious onClick={() => this.previousPage()}><a aria-label="Previous page">Previous <Inline showForSr>page</Inline></a></PaginationPrevious>
          {prevJoint}
          <PaginationEllipsis/>
          <PaginationItem onClick={() => this.setPage(prevPrev)}><a aria-label={"Page "+prev}>{prev}</a></PaginationItem>
          <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> {this.state.selectedPage}</PaginationItem>
          <PaginationItem onClick={() => this.setPage(next)}><a aria-label={"Page "+next}>{next}</a></PaginationItem>
          <PaginationEllipsis/>
          {nextJoint}
          <PaginationNext onClick={() => this.nextPage()}><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
        </Pagination>
      )
    }

    return (
      <div className="projectsView">
        {projList}
        {pagination}
      </div>
    )
  }
}
