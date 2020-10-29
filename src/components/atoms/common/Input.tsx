import * as React from "react"
import "../../../assets/styles/components/common/input.scss"

export default (props) => {
  const {
    type,
    onChange,
    value,
    placeholder,
    className,
    textarea
  } = props;

  return textarea ? <textarea
    className={`textarea ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={(change) => onChange(change.target.value)}
  /> : <input
    className={`input ${className}`}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(change) => onChange(change.target.value)}
  />
}