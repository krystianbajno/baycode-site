import * as React from "react";

import "../../../assets/styles/components/molecules/project.scss"

export default (props) => {
  return <div className="project">
    <div className="top">
      <div className="client">
        <div className="name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
      <div className={`complexity ${props.complexity}`}>{props.complexity}</div>
    </div>
    <div className="descriptive">
      {props.description && <div className="description">{props.description}</div>}
      <div className="activities">
        {props.activities && props.activities.map((activity, key) => {
          return <li className="activity" key={key}>
            <span>{activity}</span>
          </li>
        })}
      </div>
    </div>
    <div className="stack">
      {props.stack && props.stack.map((technology, key) => {
        return <div className="technology" key={key}>
          {technology}
        </div>
      })}
    </div>
    <div className="meta">
      {props.link && <div className="link">
        <a href={props.link}>{props.link}</a>
      </div>}
      <div className="classes">
        {props.classes && props.classes.map((classtype, key) => {
          return <div className="classtype" key={key}>
            #{classtype}
          </div>
        })}
      </div>
    </div>
  </div>
}