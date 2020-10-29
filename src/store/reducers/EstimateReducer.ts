import {actionType, EstimateActions} from "../actions/EstimateActions"

export interface EstimateErrors {
  message: string,
  errors: {
    email: string,
    company: string
  } | null
}

export type EstimateState = Readonly<{
  readonly email: string,
  readonly contents: string,
  readonly company: string | null,
  readonly phone: string | null,
  readonly errors: EstimateErrors | null
  readonly formExpanded: boolean
  readonly loading: boolean
}>

export const initialState: EstimateState = {
  email: "",
  contents: "",
  company: "",
  phone: "",
  errors: null,
  formExpanded: false,
  loading: false
}

export default function estimateReducer(state = initialState, action: EstimateActions) {
  switch (action.type) {
    case actionType.SET_ESTIMATE_EMAIL: {
      return {
        ...state,
        email: action.payload
      }
    }
    case actionType.SET_ESTIMATE_CONTENTS: {
      return {
        ...state,
        contents: action.payload
      }
    }
    case actionType.SET_ESTIMATE_COMPANY: {
      return {
        ...state,
        company: action.payload
      }
    }
    case actionType.SET_ESTIMATE_PHONE: {
      return {
        ...state,
        phone: action.payload
      }
    }
    case actionType.SET_ESTIMATE_ERRORS: {
      return {
        ...state,
        errors: action.payload
      }
    }
    case actionType.SET_ESTIMATE_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case actionType.SET_ESTIMATE_FORM_EXPANDED: {
      return {
        ...state,
        formExpanded: action.payload
      }
    }
    default:
      return state;
  }
}
