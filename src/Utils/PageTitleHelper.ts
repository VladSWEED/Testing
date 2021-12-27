export default class PageTitleHelper {
  public static SetPageTitle(title: string): void {
    document.title = `${title} - SMG`;
  }
}
