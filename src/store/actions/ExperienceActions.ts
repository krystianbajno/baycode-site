import {CloudStorageApi} from "../../api/cloud-storage";
import xml2js from "xml2js";
import Project from "../../models/Project"
import Company from "../../models/Company"
import Stack from "../../models/Stack"
import { fromXML } from "../../mappers/ProjectMapper"

export const actionType = {
  SET_STACK: "estimate/SET_STACK",
  SET_PROJECTS: "estimate/SET_PROJECTS",
  SET_COMPANIES: "estimate/SET_COMPANIES"
};

export interface SetProjects {
  type: typeof actionType.SET_PROJECTS;
  payload: Project[];
}

export interface SetCompanies {
  type: typeof actionType.SET_COMPANIES;
  payload: Company[];
}

export interface SetStack {
  type: typeof actionType.SET_STACK;
  payload: Stack[];
}

export type ExperienceActions =
  | SetProjects
  | SetCompanies
  | SetStack

export const setProjects = (projects: Project[]) => ({
  type: actionType.SET_PROJECTS,
  payload: projects
});

export const setCompanies = (companies: Company[]) => ({
  type: actionType.SET_COMPANIES,
  payload: companies
});

export const setStack = (stack: Stack[]) => ({
  type: actionType.SET_STACK,
  payload: stack
});
export const clearProjects = () => async dispatch => dispatch(setProjects([]))

export const getProjects = () => async (
  dispatch: any,
  getState: any,
  {cloudStorageApi}: { cloudStorageApi: CloudStorageApi }
) => {
  const { data } = await cloudStorageApi.getProjects()
  const { projects } = await xml2js.parseStringPromise(data);
  return projects.project.map(project => fromXML(project)).reverse()
}

export const getCompanies = () => async (
  dispatch: any,
  getState: any,
  {cloudStorageApi}: { cloudStorageApi: CloudStorageApi }
) => {
  const {data} = await cloudStorageApi.getCompanies()
  return data.reverse();
}

export const getStack = () => async (
  dispatch: any,
  getState: any,
  {cloudStorageApi}: { cloudStorageApi: CloudStorageApi }
) => {
  const {data} = await cloudStorageApi.getStack()
  return data;
}

export const reloadExperience = () => async (dispatch: any) => {
   const [
     projects,
     stack,
     companies
   ] = await Promise.all([
     dispatch(getProjects()),
     dispatch(getStack()),
     dispatch(getCompanies())
   ])

  dispatch(setProjects(projects))
  dispatch(setStack(stack))
  dispatch(setCompanies(companies))
}
