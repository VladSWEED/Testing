export type headerProps = {
  isInputOpen: boolean,
  inputValue: string,
  isEnglish: boolean,
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  openInputHandler: ()=> void
}

export type DropDownProps = {
  openDropDown: ()=> void,
  isEnglish: boolean
}

export type DesktopHeaderLinksProps = {
  personalStep: boolean,
  administrativeStep: boolean,
  serviceStep: boolean,
  systemStep: boolean,
  reportsStep: boolean,
}
