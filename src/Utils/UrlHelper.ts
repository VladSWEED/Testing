export default class UrlHelper {
  public static getEmployeeId(): number {
    const url: string = window.location.href;
    const index: number = url.lastIndexOf('/');

    return parseInt(url.slice(index+1));
  }
};
