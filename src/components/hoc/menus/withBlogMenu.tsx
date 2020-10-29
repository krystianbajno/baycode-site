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
import { makeBlogMenuBuilder } from "../../../menu/builders/BlogMenuBuilder"
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
      openContactModal,
      closeContactModal,
      toggleProjectsDrawerVisible
    } = props;

    const [menu, setMenu] = useState(null)

    useEffect(() => {
      const menu = director.build(
        makeBlogMenuBuilder(
          menuFactory,
          menuEntryFactory,
          openContactModal,
          toggleProjectsDrawerVisible
        )
      )
      setMenu(menu)
    },[])

    return <WrappedComponent
      menu={menu}
      openContactModal={openContactModal}
      closeContactModal={closeContactModal}
      toggleProjectsDrawerVisible={toggleProjectsDrawerVisible}
      {...props}
    />
  }
)