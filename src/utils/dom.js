export const height = () => {
  if (typeof window !== 'undefined') {
    return window && +window.document.body.scrollHeight
  }

  return 0;
}

