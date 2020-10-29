import * as React from "react"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import {
  closeContactModal,
  openContactModal,
  toggleProjectsDrawerVisible
} from "../../../store/actions/ModalActions"

import { makeMenuFactory } from "../../../menu/factories/MenuFactory"
import { makeMenuEntryFactory } from "../../../menu/factories/MenuEntryFactory"
import { makeLandingPageMenuBuilder } from "../../../menu/builders/LandingPageMenuBuilder"
import { makeMenuDirector } from "../../../menu/MenuDirector"

const mapStateToProps = state => ({
  contactModalVisible: state.modal.contactModalVisible,
  projectsDrawerVisible: state.modal.projectsDrawerVisible
})

const mapDispatchToProps = dispatch => ({
  openContactModal: () => dispatch(openContactModal()),
  closeContactModal: () => dispatch(closeContactModal()),
  toggleProjectsDrawerVisible: () => dispatch(toggleProjectsDrawerVisible())
})

const menuFactory = makeMenuFactory()
const menuEntryFactory = makeMenuEntryFactory();
const director = makeMenuDirector()

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WrappedComponent => (props) => {
    const {
      toggleProjectsDrawerVisible,
      openContactModal,
      closeContactModal
    } = props;

    const [menu, setMenu] = useState(null)
    const stackRef = React.useRef<HTMLDivElement>()
    const blogRef = React.useRef<HTMLDivElement>()

    useEffect(() => {
      const menu = director.build(
        makeLandingPageMenuBuilder(
          menuFactory,
          menuEntryFactory,
          stackRef,
          blogRef,
          toggleProjectsDrawerVisible,
          openContactModal
        )
      )
      setMenu(menu)
    },[])

    return <WrappedComponent
      stackRef={stackRef}
      blogRef={blogRef}
      menu={menu}
      toggleProjectsDrawerVisible={toggleProjectsDrawerVisible}
      openContactModal={openContactModal}
      closeContactModal={closeContactModal}
      {...props}
    />
  }
)