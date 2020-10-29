import * as React from "react";

import "../../../assets/styles/logo.scss"


export default ({onPress, logo}) => (
  <div className="logo" onClick={onPress}>
    {logo}
  </div>
)