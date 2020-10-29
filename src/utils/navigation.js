export const back = () => {
  window && window.history.back()
}

export const redirect = (location) => {
  window && window.location.replace(location)
}

