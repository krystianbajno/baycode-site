import {actionType, SettingsActions} from "../actions/SettingsActions"
import Contact from "../../models/Contact"

export type SettingsState = Readonly<{
  readonly contact: Contact | null
}>

export const initialState: SettingsState = {
  contact: null,
}

export default function settingsReducer(state = initialState, action: SettingsActions) {
  switch (action.type) {
    case actionType.SET_CONTACT: {
      return {
        ...state,
        contact: action.payload
      }
    }
    default:
      return state;
  }
}
