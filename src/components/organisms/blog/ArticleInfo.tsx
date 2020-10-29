import * as React from "react"

import "../../../assets/styles/components/organisms/articles/article-info.scss"
import { Author as AuthorModel } from "../../../models/Author"
import Author from "../../molecules/articles/Author"

interface Props {
  title?: string;
  description?: string;
  author?: AuthorModel;
}

export default (props) => {
  return <div className="article-info">
    <div className="title">
      {props.title}
    </div>
    <div className="description">
      {props.description}
    </div>
    {props.author && <div className="author-information">
      <Author
        avatar={props.author.avatar}
        firstname={props.author.firstname}
        lastname={props.author.lastname}
        description={props.author.description}
      />
    </div>}
  </div>
}