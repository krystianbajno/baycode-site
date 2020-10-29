import MenuEntry from "./MenuEntry"

export class MenuEntryImpl implements MenuEntry {
  private hiddenMobile: boolean
  private title: string
  private onPress: () => void

  public constructor(
    title?: string,
    hiddenMobile?: boolean,
    onPress?: () => void
  ) {
    this.hiddenMobile = hiddenMobile;
    this.title = title;
    this.onPress = onPress;
  }

  public setOnPress = (onPress: () => void): void => {
    this.onPress = onPress;
  }

  public setTitle = (title: string): void => {
    this.title = title;
  }

  public setHiddenMobile = (hiddenMobile: boolean): void => {
    this.hiddenMobile = hiddenMobile;
  }

  public getOnPress = (): (() => void) => this.onPress;

  public getTitle = (): string => this.title;

  public getHiddenMobile = (): boolean => this.hiddenMobile;
}