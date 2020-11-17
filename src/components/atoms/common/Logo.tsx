import * as React from "react";

import "../../../assets/styles/logo.scss"
import Icon from "../../../assets/images/icon.svg"

export default ({onPress, logo}) => (
  <div className="logo" onClick={onPress}>
    <Icon height={32} width={32}/>
    <span className="logo-text hidden-mobile">{logo}</span>
  </div>
)