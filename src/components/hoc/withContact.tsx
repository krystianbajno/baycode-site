import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";


const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  contact: state.settings.contact,
})

const component = WrappedComponent => (props) => {
  return <WrappedComponent
    {...props}
  />
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  component
)