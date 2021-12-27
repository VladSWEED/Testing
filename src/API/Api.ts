import { HTTP_ERROR_STATUS_CODES } from '../Constants/Requests';
import ApiError from './ApiError';

abstract class Api {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private async parseResponse(response: Response) {
    if (response.status === HTTP_ERROR_STATUS_CODES.badRequest) {
      throw new ApiError(response.status, response.statusText || 'Bad Request');
    }

    if (response.status === HTTP_ERROR_STATUS_CODES.unauthorized) {
      throw new ApiError(response.status, response.statusText || 'Unauthorized');
    }

    if (response.status === HTTP_ERROR_STATUS_CODES.notFound) {
      throw new ApiError(response.status, response.statusText || 'Not Found');
    }

    if (response.status === HTTP_ERROR_STATUS_CODES.internalServerError) {
      throw new ApiError(response.status, response.statusText || 'Internal Server Error');
    }
    
    if (response.status === HTTP_ERROR_STATUS_CODES.badGateway) {
      throw new ApiError(response.status, response.statusText || 'Bad Gateway');
    }

    const json = await response.json();
    return json;
  }

  protected async request(endpoint: string, options: RequestInit) {
    const response = await fetch(`${this.apiUrl}${endpoint}`, options);
    return this.parseResponse(response);
  }
}

export default Api;