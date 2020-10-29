import {actionType, ModalActions} from "../actions/ModalActions"

export type ModalState = Readonly<{
  readonly contactModalVisible: boolean
  readonly projectsDrawerVisible: boolean
}>

export const initialState: ModalState = {
  contactModalVisible: false,
  projectsDrawerVisible: false
}

export default function modalReducer(state = initialState, action: ModalActions) {
  switch (action.type) {
    case actionType.SET_CONTACT_MODAL_VISIBLE: {
      return {
        ...state,
        contactModalVisible: action.payload
      }
    }
    case actionType.TOGGLE_PROJECTS_DRAWER_VISIBLE: {
      return {
        ...state,
        projectsDrawerVisible: !state.projectsDrawerVisible
      }
    }

    default:
      return state;
  }
}
