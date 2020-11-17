import * as React from "react"
import FormInput from "../../molecules/common/FormInput";
import "../../../assets/styles/components/forms/EstimateForm.scss"

export default (props) => {
  const {
    estimate,
    estimateErrors,
    setEstimateEmail,
    setEstimateCompany,
    setEstimatePhone,
    setEstimateContents
  } = props

  return (
    estimate && <div className="estimate-form">
      <div className="email">
        <FormInput
            title="Email"
            placeholder="Email for response (optional)"
            value={estimate.email}
            onChange={setEstimateEmail}
            error={estimateErrors?.email}
        />
      </div>
      <div className="company">
        <FormInput
            title="Company"
            placeholder="Company name (optional)"
            value={estimate.company}
            onChange={setEstimateCompany}
            error={estimateErrors?.company}
        />
      </div>
      <div className="phone">
         <FormInput
            title="Phone"
            placeholder="Phone for response (optional)"
            value={estimate.phone}
            onChange={setEstimatePhone}
            error={estimateErrors?.phone}
         />
      </div>
      <div className="contents">
          <FormInput
            title="Message"
            textarea
            placeholder="My message (required)"
            value={estimate.contents}
            onChange={setEstimateContents}
            error={estimateErrors?.contents}
          />
      </div>
    </div>
  )
}