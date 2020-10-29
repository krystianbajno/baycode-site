import * as React from "react"
import Input from "../../atoms/common/Input";

import "../../../assets/styles/components/common/form-input.scss"

export default (props) => {
  return <div className="form-input">
    <div className={`title ${props.error && 'error'}`}>
      {props.title}
    </div>
    <Input {...props}/>
    <div className="error error-data">
      {props.error}
    </div>
  </div>
}