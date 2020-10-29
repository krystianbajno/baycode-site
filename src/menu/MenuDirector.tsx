import Builder from "./Builder"
import Menu from "./models/Menu"

interface Director {
  build: (Builder) => Menu
}

export class MenuDirectorImpl implements Director {
  public build = (builder: Builder): Menu => {
    builder.createMenu();
    builder.addMenuEntries()
    return builder.getMenu()
  }
}

export const makeMenuDirector = (): Director => {
  return new MenuDirectorImpl;
}