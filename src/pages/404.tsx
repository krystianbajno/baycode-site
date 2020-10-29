import * as React from "react";
import "../assets/styles/404.scss"

import useEncryptedText from "../components/hooks/useEncryptedText"
import useGrowingText from "../components/hooks/useGrowingText"

import {useState} from "react"
import {genPass} from "../utils/password"
import {Helmet} from "react-helmet";
import {back} from "../utils/navigation"

const finalText = `{"status_code":404, "msg":"This page was not found"}`
const randomXorKey = genPass(finalText.length -1)
const browser = typeof window !== "undefined" && window;
const title = "Hey! How did you get here?";

export default (props) => {
  const [showDecrypted, setShowDecrypted] = useState(false)
  return browser && (
    <div className="four-o-four">
      <Helmet>
        <title>{title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={"How did you get here?"} />
      </Helmet>
      <div className="text-container">
        <div className="hacky-text back" onClick={back}>
          {"<-- go back"}
        </div>
        <div className="hacky-text">
          <span>{useGrowingText(`[*] Key acquired`, 30)}</span>
          <span>{useGrowingText(`[*] Using key: ${randomXorKey}`)}</span>
          <span>{useGrowingText(`[*] Message decryption in progress...`, 30)}</span>
        </div>
        <div className="hacky-text">
          {useEncryptedText(finalText, 0.1, true, () => {
            setShowDecrypted(true)
          }, randomXorKey)}
        </div>
        <div className="hacky-text">
          {showDecrypted && `[*] MESSAGE DECRYPTED.`}
        </div>
      </div>
    </div>
  )
}