import ISMGSettings from '../Types/Configuration/ISMGSettings';
import smgSettings from '../Configuration/SmgSettings.json';

export default class ProjectHelper {
  public static get isDevelopment(): boolean {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  }

  public static get isProduction(): boolean {
    if (!process.env.NODE_ENV)
      return false;

    return process.env.NODE_ENV === 'production';
  }

  public static get apiUrl(): string {
    return this.settings.apiUrl;
    /*
        if (this.isDevelopment)
            return this.settings.devApiUrl;

        if (this.isProduction)
            return this.settings.prodApiUrl;

        throw new Error('Build mode doesn`t development or production mode.');
        */
  }

  private static get settings(): ISMGSettings {
    return smgSettings;
  }
}
