import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {
  clearEstimate,
  setEstimateCompany,
  setEstimateContents,
  setEstimateEmail,
  setEstimateErrors,
  setEstimateFormExpanded,
  setEstimatePhone,
  submitEstimateFormAction
} from "../../store/actions/EstimateActions"
import { EstimateErrors } from "../../store/reducers/EstimateReducer"

import {NotificationManager} from 'react-notifications';

const mapDispatchToProps = dispatch => ({
  setEstimateEmail: (email) => dispatch(setEstimateEmail(email)),
  setEstimateCompany: (company) => dispatch(setEstimateCompany(company)),
  setEstimatePhone: (phone) => dispatch(setEstimatePhone(phone)),
  setEstimateContents: (contents) => dispatch(setEstimateContents(contents)),
  setEstimateErrors: (errors: EstimateErrors) => dispatch(setEstimateErrors(errors)),
  submitEstimateFormAction: (onSuccess, onError) =>
    dispatch(submitEstimateFormAction(onSuccess, onError)),
  clearEstimate: () => dispatch(clearEstimate()),
  setEstimateFormExpanded: (expanded: boolean) => dispatch(setEstimateFormExpanded(expanded)),
})

const mapStateToProps = state => ({
  estimateFormExpanded: state.estimate.formExpanded,
  estimateLoading: state.estimate.loading,
  estimateErrors: state.estimate.errors,

  estimate: {
    email: state.estimate.email,
    phone: state.estimate.phone,
    company: state.estimate.company,
    contents: state.estimate.contents,
  }
})

const component = WrappedComponent => (props) => {
  const submitEstimateForm = () => props.submitEstimateFormAction(
    (response) => NotificationManager.success(response?.data.message, "Hooray!"),
    (response) => NotificationManager.error(response?.data?.message, "Oops")
  );

  return <WrappedComponent
    submitEstimateForm={submitEstimateForm}
    {...props}
  />
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  component
)