import * as React from "react";
import {Drawer} from "@material-ui/core";

import "../../../assets/styles/components/modals/projects.scss"
import "../../../assets/styles/components/common/modal.scss"

import { ProjectsGrid } from "./grid/ProjectsGrid";
import { CompaniesGrid } from "../companies/grid/CompaniesGrid"
import i18n from "../../../i18n/i18n";

export const Projects = (props) => {
  const {projects, companies} = props;

  return <Drawer
    anchor={"left"}
    open={props.visible}
    onClose={props.toggle}
  >
    <div className="drawer-container">
      <div
        onClick={props.toggle}
        className="modal-close"
      />
      <h2 className="drawer-title">
        {i18n.t('drawer.companies')}
      </h2>
      <div className="companies-scroll">
        <CompaniesGrid companies={companies}/>
      </div>
      <h2 className="drawer-title">
        {i18n.t('drawer.projects')}
      </h2>
      <div className="projects-scroll">
        <ProjectsGrid projects={projects}/>
      </div>
    </div>
  </Drawer>
}