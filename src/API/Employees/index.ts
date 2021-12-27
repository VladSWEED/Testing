import axios, { AxiosResponse } from 'axios';

class EmployeesApi {
  static async getUsers(): Promise<AxiosResponse> {
    return axios.get('/Mock/employee.json');
  }
}

export default EmployeesApi;
