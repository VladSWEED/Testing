import { useState, useEffect, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import RoomViewer from '../Components/RoomViewer';
import RoomsService from '../Services/RoomsService';
import UrlHelper from '../Utils/UrlHelper';
import IRoomInfo from '../Types/ServerSide/IRoomInfo';
import '../i18n/config';

const RoomViewerContainer: FunctionComponent = () => {
  const [roomInfo, setRoomInfo] = useState<IRoomInfo>({ Responsible: '', RoomAddress: '', RoomPlan: '', FreeSeatsCount: 0 });
  useEffect(() => { initRoomViewer() }, []);

  async function initRoomViewer(): Promise<void> {
    const employeeId: number = UrlHelper.getEmployeeId();
    const room: IRoomInfo = await RoomsService.getRoomInfo(employeeId);
    setRoomInfo(room);
  }

  return (<RoomViewer roomInfo={roomInfo} />);
};

ReactDOM.render(<RoomViewerContainer />, document.getElementById('reactContainer'));
