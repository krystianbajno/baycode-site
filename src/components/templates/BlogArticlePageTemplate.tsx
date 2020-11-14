import * as React from "react";
import "../../assets/styles/templates/blog-article.scss"
import MainLayout from "../layouts/MainLayout";

export default (props) => {
  const {
    menu,
    blogCarousel,
    image,
    title,
    contactModal,
    projectsModal,
    articleInfo,
    articleContents
  } = props

  return <MainLayout menu={menu} article>
    <div className="blog-article-page-template">
      <section className="image">
        <img src={image} alt={title}/>
      </section>
      <section className="blog-article-post">
        <div className="article-information">
          {articleInfo}
        </div>
        <div className="contents">
          {articleContents}
        </div>
      </section>
      <section className="articles-grid">
        {blogCarousel}
      </section>
      {contactModal}
      {projectsModal}
    </div>
  </MainLayout>
}
