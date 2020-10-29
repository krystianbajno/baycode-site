import {useEffect, useState} from 'react';
import {encryptXor} from "../../utils/crypto"
import {genPass} from "../../utils/password"

export default (
  finalText,
  timeout = 50,
  random = true,
  onDecrypted = null,
  pass = null
) => {
  const [currentText, setCurrentText] = useState(finalText[0] || "");
  const [displayText, setDisplayText] = useState(
    encryptXor(finalText, pass || genPass(finalText.length))
  )

  const getNextLetter = () => {
    let currentCharCode = currentText.charCodeAt(currentText.length - 1)
    let finalCharCode = finalText.charCodeAt(currentText.length - 1)

    return String.fromCharCode(
      currentCharCode == finalCharCode
        ? currentCharCode
        : currentCharCode > finalCharCode
        ? currentCharCode - 1
        : currentCharCode + 1
    );
  }

  const setNextStep = () => {
    const nextLetter = getNextLetter()

    if (currentText[currentText.length - 1] == finalText[currentText.length - 1]) {
      setCurrentText(currentText + nextLetter)
    } else {
      setCurrentText(currentText.slice(0, currentText.length - 1) + nextLetter)
    }

    setDisplayText(
      currentText + displayText.slice(currentText.length - 1, finalText.length - 1)
    )
  }

  useEffect(() => {
    if (currentText !== finalText) {
      setTimeout(
        setNextStep, random ? Math.floor(Math.random() * timeout) : timeout
      )
    } else {
      setDisplayText(currentText)
      onDecrypted && onDecrypted()
    }

  }, [currentText]);

  return displayText;
}