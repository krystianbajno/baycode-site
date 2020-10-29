import {useEffect, useState} from 'react';

export default (finalText, timeout = 10) => {
  const [currentText, setCurrentText] = useState("");

  const setNextStep = () => {
    setCurrentText(currentText + finalText[currentText.length])
  }

  useEffect(() => {
    if (currentText !== finalText) {
      setTimeout(setNextStep, timeout)
    }
  }, [currentText]);

  return currentText;
}