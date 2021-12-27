import { useNavigate } from "react-router-dom";
import ApiError from '../API/ApiError';
import { ROUTES } from './../Constants/Routes';
import { HTTP_ERROR_STATUS_CODES } from './../Constants/Requests';

const useApiErrorHandler = () => {
  const navigate = useNavigate(); 

  /* eslint-disable */
  return ( tryFunc: (...args: any) => void, catchFunc?: (error: any) => void) => {
    //* eslint-disable */
    return async (...args: any) => {
      try {
        await tryFunc(...args);
      } catch (error) {
        if (error instanceof ApiError) {
          if (error.statusCode === HTTP_ERROR_STATUS_CODES.notFound) {
            console.log('error: ', error.statusCode);            
            navigate(ROUTES.index);
          }
          if (catchFunc) {
            catchFunc(error);
          }
          return;
        }
        throw error;
      }
    }
  }
}

export default useApiErrorHandler;
