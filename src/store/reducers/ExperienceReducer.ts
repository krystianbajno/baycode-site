import {actionType, ExperienceActions} from "../actions/ExperienceActions"
import Project from "../../models/Project";
import Company from "../../models/Company"
import Stack from "../../models/Stack"

export type ExperienceState = Readonly<{
  readonly projects: Project[]
  readonly companies: Company[]
  readonly stack: Stack[]
}>

export const initialState: ExperienceState = {
  projects: [],
  companies: [],
  stack: []
}

export default function experienceReducer(state = initialState, action: ExperienceActions) {
  switch (action.type) {
    case actionType.SET_PROJECTS: {
      return {
        ...state,
        projects: action.payload
      }
    }
    case actionType.SET_COMPANIES: {
      return {
        ...state,
        companies: action.payload
      }
    }
    case actionType.SET_STACK: {
      return {
        ...state,
        stack: action.payload
      }
    }
    default:
      return state;
  }
}
