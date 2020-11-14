import * as React from "react";
import BlogCarouselGrid from "./grids/BlogCarouselGrid";
import "../../../assets/styles/templates/blog-carousel.scss"
import i18n from "../../../i18n/i18n";

const BlogCarousel = (props) => {
  const {articles, onItemPressed} = props;

  return <div className="blog-carousel">
    <div className="title">
      <h1>{i18n.t('blog')}</h1>
    </div>
    <div className="carousel">
      <BlogCarouselGrid
        articles={articles}
        onItemPressed={onItemPressed}
      />
    </div>
  </div>
}

export default BlogCarousel;