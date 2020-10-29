import Menu from "../models/Menu"
import MenuImpl from "../models/MenuImpl"

export interface MenuFactory {
  create: () => Menu
}

export default class MenuFactoryImpl {
  public create = (): Menu => {
    return new MenuImpl()
  }
}

export const makeMenuFactory = () => {
  return new MenuFactoryImpl()
}
