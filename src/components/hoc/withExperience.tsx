import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

const component = WrappedComponent => props => {
  const {
    projects,
    companies,
    stack
  } = props

  return <WrappedComponent
    stack={stack}
    projects={projects}
    companies={companies}
    {...props}
  />
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  stack: state.experience.stack,
  projects: state.experience.projects,
  companies: state.experience.companies,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  component
)
