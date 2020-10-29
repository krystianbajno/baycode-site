import * as React from "react";

import "../../../assets/styles/components/molecules/author.scss"

export default (props) => {
  return (
    <div className="author">
        <img
          className="avatar"
          alt={props.description}
          src={props.avatar}
        />
        <div className="author-info">
          <div className="author-name">
            {props.firstname} {props.lastname}
          </div>
          <p className="author-description">
            {props.description}
          </p>
      </div>
    </div>
  )
}