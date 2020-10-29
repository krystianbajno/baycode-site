import { MenuEntryImpl } from "../models/MenuEntryImpl"
import MenuEntry from "../models/MenuEntry"

export interface MenuEntryFactoryArguments {
  title: string,
  hiddenMobile: boolean,
  onPress: () => void
}

export interface MenuEntryFactory {
  create: ({ title, hiddenMobile, onPress }: MenuEntryFactoryArguments) => MenuEntry
}

export default class MenuEntryFactoryImpl implements MenuEntryFactory {
  public create = ({ title, hiddenMobile, onPress }: MenuEntryFactoryArguments): MenuEntry => {
    return new MenuEntryImpl(title, hiddenMobile, onPress)
  }
}

export const makeMenuEntryFactory = (): MenuEntryFactory => {
  return new MenuEntryFactoryImpl
}

