import Menu from "./Menu"
import MenuEntry from "./MenuEntry"

export default class MenuImpl implements Menu {
  private readonly menuEntries: MenuEntry[]

  public constructor() {
    this.menuEntries = []
  }

  addMenuEntry = (menuEntry: MenuEntry): void => {
    this.menuEntries.push(menuEntry)
  }

  getMenuEntries = (): MenuEntry[] => {
    return this.menuEntries;
  }
}