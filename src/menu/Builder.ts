import Menu from "./models/Menu"

export default interface Builder {
  createMenu: () => void
  addMenuEntries: () => void
  getMenu: () => Menu
}
