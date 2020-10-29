import * as React from "react"
import * as PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"

interface Props {
  title?: string,
  description?: string,
  image?: string,
  article?: boolean,
  twitterUser?: string,
  siteUrl?: string
}

const SEO = ({
 title,
 description,
 image,
 article,
 twitterUser,
 siteUrl
}: Props) => {
  const {pathname} = useLocation()

  return (
    <Helmet title={title}>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      {siteUrl && <meta property="og:url" content={`${siteUrl}${pathname}`} />}
      <meta name="description" content={description} />
      {article
        ? <meta property="og:type" content="article" />
        : <meta property="og:type" content="website" />
      }
      {title && <meta property="og:title" content={title} />}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image"/>

      {title && <meta name="twitter:title" content={title} />}
      {title && <title>{title}</title>}

      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {image && <meta name="twitter:image" content={image} />}
      {twitterUser && <meta name="twitter:creator" content={twitterUser} />}
      <meta name="twitter:site" content={twitterUser} />
      <link rel="icon"  href="favicon.svg" />
      <link rel="mask-icon" href="favicon.svg" color="#000000" />

    </Helmet>
  )
}
export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  twitterUser: PropTypes.string,
  siteUrl: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  twitterUser: null,
  siteUrl: null
}
