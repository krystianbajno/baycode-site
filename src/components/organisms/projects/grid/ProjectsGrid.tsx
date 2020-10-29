import * as React from "react"
import Project from "../../../molecules/projects/Project"

import "../../../../assets/styles/components/organisms/projects-grid.scss"


export const ProjectsGrid = (props) => {
  const {projects} = props;

  return <div className="projects-grid">
    {projects && projects.map((item, key) => {
      return <Project
        key={key}
        name={item.name}
        company={item.company}
        description={item.description}
        stack={item.stack}
        complexity={item.complexity}
        activities={item.activities}
        link={item.link}
        classes={item.classes}
      />
    })}
  </div>
}