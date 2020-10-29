import * as React from "react"
import RenderContentful from "../../cms/ContentfulCmsComponents"

export default (props) => {
  return <div className="article-contents-organism">
    {props.contents && <RenderContentful data={props.contents}/>}
  </div>
}