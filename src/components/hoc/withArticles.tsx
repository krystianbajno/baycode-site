import * as React from "react";
import { connect } from "react-redux"
import { compose } from "redux";
import Article from "../../models/Article"
import {NotificationManager} from 'react-notifications';
import {redirect} from "../../utils/navigation"

import {
  clearArticles,
  reloadArticles,
  getArticleBySlug,
  selectArticle
} from "../../store/actions/ArticleActions"

const onBlogCarouselItemPressed = async item => {
  if (!item.slug) return NotificationManager.info("To be announced")
  redirect(`/blog/${item.slug}`)
}

const mapDispatchToProps = dispatch => ({
  onBlogCarouselItemPressed: item => onBlogCarouselItemPressed(item),
  selectArticle: (article: Article) => dispatch(selectArticle(article)),
  reloadArticles: () => dispatch(reloadArticles()),
  clearArticles: () => dispatch(clearArticles()),
  getArticleBySlug: (slug: string) =>
    dispatch(getArticleBySlug(slug))
})

const mapStateToProps = state => ({
  articlesLoading: state.article.articlesLoading,
  articles: state.article.articles,
  selectedArticle: state.article.selectedArticle
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WrappedComponent => (props) => <WrappedComponent {...props} />
)






