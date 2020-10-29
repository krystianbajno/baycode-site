import * as React from "react"
import { useEffect } from "react"
import { reloadSettings } from "./store/actions/SettingsActions"
import { reloadExperience } from "./store/actions/ExperienceActions"
import { reloadArticles } from "./store/actions/ArticleActions"

export default ({ children, store }) => {
  useEffect(() => {
    store.dispatch(reloadSettings())
    store.dispatch(reloadArticles())
    store.dispatch(reloadExperience())
  }, [])

  return <>
    {children}
  </>
}