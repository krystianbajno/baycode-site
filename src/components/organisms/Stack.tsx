import * as React from "react"

import "../../assets/styles/components/organisms/stack.scss"
import Stack from "../../models/Stack"


const RecurseChild = (props) => {
  const { title, children, link } = props.child

  return <li>
    {link ? <a href={link}>
      {title}
    </a> : title}
    {children && <ul>
      {children.map((item, key) => <RecurseChild
        key={key}
        child={item}
      />)}
    </ul>}
  </li>
}

export default ({ stack }) => {
  return <div className="stack">
    <h1 className="heading">
      Stack
    </h1>
    <div className="tools">
      {stack?.map((item: Stack, key) => (
        <div key={key} className={item.className}>
          <h2>{item.title}</h2>
          <ul>
            {item.children && item.children.map(({
               title,
               children,
               link
             }, keySub) => <RecurseChild
              key={keySub}
              child={{
                title,
                children,
                link
              }}
            />)}
          </ul>
        </div>
      ))}
    </div>
    <div className="services">
      <h2>Services</h2>
      <ul>
        <li>Backend Dev</li>
        <li>Frontend Dev</li>
        <li>Mobile Dev</li>
        <li>Security & Penetration Testing</li>
        <li>Cloud & Dev Ops</li>
        <li>Consultancy</li>
      </ul>
    </div>
  </div>
}