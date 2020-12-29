import * as React from "react";
import BlogCarouselGrid from "./grids/BlogCarouselGrid";
import "../../../assets/styles/templates/blog-carousel.scss"

const BlogCarousel = (props) => {
  const {articles, onItemPressed} = props;

  return <div className="blog-carousel">
    <div className="carousel">
      <BlogCarouselGrid
        articles={articles}
        onItemPressed={onItemPressed}
      />
    </div>
  </div>
}

export default BlogCarousel;