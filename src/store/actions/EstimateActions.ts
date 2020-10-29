import {CloudFunctionApi} from "../../api/cloud-function";
import {Dispatch} from "redux";
import { EstimateErrors } from "../reducers/EstimateReducer"

export const actionType = {
  SET_ESTIMATE_EMAIL: "estimate/SET_ESTIMATE_EMAIL",
  SET_ESTIMATE_PHONE: "estimate/SET_ESTIMATE_PHONE",
  SET_ESTIMATE_COMPANY: "estimate/SET_ESTIMATE_COMPANY",
  SET_ESTIMATE_CONTENTS: "estimate/SET_ESTIMATE_CONTENTS",
  SET_ESTIMATE_ERRORS: "estimate/SET_ESTIMATE_ERRORS",
  SET_ESTIMATE_LOADING: "estimate/SET_ESTIMATE_LOADING",
  SET_ESTIMATE_FORM_EXPANDED: "estimate/SET_ESTIMATE_FORM_EXPANDED"
};

export interface SetEstimateEmail {
  type: typeof actionType.SET_ESTIMATE_EMAIL;
  payload: boolean;
}

export interface SetEstimatePhone {
  type: typeof actionType.SET_ESTIMATE_PHONE;
  payload: boolean;
}

export interface SetEstimateCompany {
  type: typeof actionType.SET_ESTIMATE_PHONE;
  payload: boolean;
}

export interface SetEstimateContents {
  type: typeof actionType.SET_ESTIMATE_CONTENTS;
  payload: boolean;
}

export interface SetEstimateErrors {
  type: typeof actionType.SET_ESTIMATE_ERRORS;
  payload: boolean;
}

export interface SetEstimateLoading {
  type: typeof actionType.SET_ESTIMATE_LOADING;
  payload: boolean;
}

export interface SetEstimateFormExpanded {
  type: typeof actionType.SET_ESTIMATE_FORM_EXPANDED,
  payload: boolean
}

export type EstimateActions =
  | SetEstimateEmail
  | SetEstimatePhone
  | SetEstimateCompany
  | SetEstimateContents
  | SetEstimateErrors
  | SetEstimateLoading
  | SetEstimateFormExpanded

export const setEstimateContents = (contents?: string) => ({
  type: actionType.SET_ESTIMATE_CONTENTS,
  payload: contents
});

export const setEstimateEmail = (email?: string) => ({
  type: actionType.SET_ESTIMATE_EMAIL,
  payload: email
});

export const setEstimatePhone = (company?: string) => ({
  type: actionType.SET_ESTIMATE_PHONE,
  payload: company
});

export const setEstimateCompany = (company?: string) => ({
  type: actionType.SET_ESTIMATE_COMPANY,
  payload: company
});

export const setEstimateLoading = (loading?: boolean) => ({
  type: actionType.SET_ESTIMATE_LOADING,
  payload: loading
})

export const setEstimateErrors = (errors: EstimateErrors | null) => ({
  type: actionType.SET_ESTIMATE_ERRORS,
  payload: errors
})

export const setEstimateFormExpanded = (expanded: boolean) => ({
  type: actionType.SET_ESTIMATE_FORM_EXPANDED,
  payload: expanded
})

export const clearEstimate = () => async (
  dispatch: any,
) => {
  dispatch(setEstimatePhone(''))
  dispatch(setEstimateCompany(''))
  dispatch(setEstimateEmail(''))
  dispatch(setEstimateContents(''))
}

export const submitEstimate = () => async (
  dispatch: any,
  getState: any,
  {cloudFunctionApi}: { cloudFunctionApi: CloudFunctionApi }
) => {
  const {
    email,
    phone,
    company,
    contents
  } = getState().estimate

  return cloudFunctionApi.sendEstimateToMessageRouter({
    email,
    phone,
    company,
    contents
  })
};

export const submitEstimateFormAction = (onSuccess, onError) => async (
  dispatch: any,
) => {
  await dispatch(setEstimateErrors(null))
  await dispatch(setEstimateLoading(true))

  try {
    const response = await dispatch(submitEstimate())
    await dispatch(setEstimateFormExpanded(false))
    await dispatch(clearEstimate())
    onSuccess(response)
  } catch (e) {
    await dispatch(setEstimateErrors(e?.response?.data?.errors))
    onError(e?.response)
  }
  await dispatch(setEstimateLoading(false))
}