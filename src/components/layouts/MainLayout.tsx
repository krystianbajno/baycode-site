import * as React from "react";
import Header from "../organisms/layout/Header";
import "../../assets/styles/main-layout.scss"
import SEO from "../organisms/SEO";
import Particles from "../organisms/particles/Particles";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from "../organisms/layout/Footer";
import {getYear} from "../../utils/dates";
import { graphql, useStaticQuery } from "gatsby"

interface Props {
  children: any
  article?: boolean
  menu: any
}

export default  (props: Props) => {
  const {children, menu, article} = props
  const data = useStaticQuery(query)

  return <div className="layout">
    <Particles top={64} />
    <NotificationContainer />
    <SEO
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      siteUrl={data.site.siteMetadata.siteUrl}
      image={data.site.siteMetadata.image}
      article={article || false}
    />
    <Header menu={menu} />
    <div className="page">
      {children}
    </div>
    <Footer currentYear={getYear(new Date)} />
  </div>
}

const query = graphql`
  query MainLayoutQuery {
    site { 
      siteMetadata {
        title
        description
        siteUrl,
        image
      }
    }
  }  
`