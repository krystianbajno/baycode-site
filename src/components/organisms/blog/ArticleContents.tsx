import * as React from "react"
import RenderContentful from "../../cms/ContentfulCmsComponents"
import i18n from "../../../i18n/i18n";

export default (props) => {
  return <div className="article-contents-organism">
    {props.contents && <RenderContentful data={props.contents}/>}
    {props.redirect && <div className="redirection">
      <h2>{i18n.t("article-contents.redirection-in-progress")}</h2>
      <p style={{height: 16}}/>
      <p>{i18n.t("article-contents.redirection-failure")} <a href={props.redirect}>{props.redirect}</a></p>
    </div>}
  </div>
}