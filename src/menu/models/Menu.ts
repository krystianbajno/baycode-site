import MenuEntry from "./MenuEntry"

export default interface Menu {
  addMenuEntry: (entry: MenuEntry) => void;
  getMenuEntries: () => MenuEntry[]
}