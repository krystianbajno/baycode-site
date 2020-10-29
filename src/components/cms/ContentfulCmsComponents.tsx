import * as React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import "../../assets/styles/components/styled/cms.scss"
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const Bold = ({children}) => <span className="contentful bold">{children}</span>
export const Italic = ({children}) => <span className="contentful italic">{children}</span>
export const Underline = ({children}) => <span className="contentful underline">{children}</span>
export const Paragraph = ({children}) => <p className="contentful text">{children}</p>
export const Asset = ({node}) =>
  <div className="contentful asset-container">
    <img className="asset-image" src={node?.data?.target?.fields?.file?.url} />
  </div>
export const Code = ({children}) =>
  <SyntaxHighlighter className="contentful code" style={darcula} language={"javascript"}>
    {children}
  </SyntaxHighlighter>

export const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
      [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
      [MARKS.CODE]: text => <Code>{text}</Code>
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="contentful">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="contentful">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="contentful">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="contentful">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="contentful">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="contentful">{children}</h6>,
      [BLOCKS.HR]: () => <hr className="contentful" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => <Asset node={node}/>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
    },
}

export default ({data}) => <>{documentToReactComponents(data, options)}</>
