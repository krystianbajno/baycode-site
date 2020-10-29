import * as React from "react"

import "../../../../assets/styles/components/organisms/companies-grid.scss"
import Company from "../../../molecules/companies/Company"

export const CompaniesGrid = (props) => {
  const {companies} = props;

  return <div className="companies-grid">
    {companies && companies.map((item, key) => {
      return <Company
        key={key}
        name={item.name}
        description={item.description}
      />
    })}
  </div>
}