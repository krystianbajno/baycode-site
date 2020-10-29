import * as React from "react";

import "../../../assets/styles/components/molecules/company.scss"

export default (props) => <div className="company-molecule">
  <div className="name">
    {props.name}
  </div>
  <div className="description">
    {props.description.split('\n').map((item, key) => <span key={key}>
      {item}
    </span>)}
  </div>
</div>
