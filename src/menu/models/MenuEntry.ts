export default interface MenuEntry {
  setOnPress: (onPress: () => void) => void
  setTitle: (title: string) => void
  setHiddenMobile: (hiddenMobile: boolean) => void
  getOnPress: () => () => void
  getTitle: () => string
  getHiddenMobile: () => boolean
}