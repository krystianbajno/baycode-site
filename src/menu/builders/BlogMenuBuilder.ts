import Builder from "../Builder"
import Menu from "../models/Menu"
import MenuFactory from "../factories/MenuFactory";
import MenuEntryFactory from "../factories/MenuEntryFactory";

export class BlogMenuBuilder implements Builder {
  private menu: Menu;
  private menuFactory: MenuFactory;
  private menuEntryFactory: MenuEntryFactory
  private readonly openContact: () => void;
  private readonly openProjects: () => void;

  constructor(
    menuFactory: MenuFactory,
    menuEntryFactory: MenuEntryFactory,
    openContact: () => void,
    openProjects: () => void
  ) {
    this.menuFactory = menuFactory;
    this.menuEntryFactory = menuEntryFactory;
    this.openContact = openContact;
    this.openProjects = openProjects;
  }

  createMenu = (): void => {
    this.menu = this.menuFactory.create()
  }

  addMenuEntries = (): void => {
    this.menu.addMenuEntry(
      this.menuEntryFactory.create({
        title:"Projects",
        hiddenMobile: false,
        onPress: () => this.openProjects()
      })
    )

    this.menu.addMenuEntry(
      this.menuEntryFactory.create({
        title:"Contact",
        hiddenMobile: false,
        onPress: () => this.openContact()
      })
    )
  }

  getMenu = (): Menu => this.menu
}

export const makeBlogMenuBuilder = (
  menuFactory: MenuFactory,
  menuEntryFactory: MenuEntryFactory,
  openContact: () => void,
  openProjects: () => void
): Builder => {
  return new BlogMenuBuilder(
    menuFactory,
    menuEntryFactory,
    openContact,
    openProjects
  )
}
