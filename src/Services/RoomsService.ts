import axios from 'axios';
import IRoomInfo from '../Types/ServerSide/IRoomInfo';
import ProjectHelper from '../Utils/ProjectHelper';

export default class RoomsService {
  public static async getRoomInfo(employeeId: number): Promise<IRoomInfo> {
    const apiUrl = ProjectHelper.apiUrl + '/api/roomviewer/byemployee/' + employeeId;
    const result = await axios.get(apiUrl);
    if (result.data)
      return result.data;

    return { Responsible: '', RoomAddress: '', RoomPlan: '', FreeSeatsCount: 0 };
  }
};
