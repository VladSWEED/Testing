import { useState, useEffect, FunctionComponent } from 'react';
import { t } from 'i18next';
import { SVG } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.panzoom.js';
import PageTitleHelper from '../Utils/PageTitleHelper';
import { ANY_TODO } from '../Types/Common/TODOTypes';
import IRoomViewerProps from '../Types/Props/IRoomViewerProps';
import IRoomInfo from '../Types/ServerSide/IRoomInfo';
import '../Assets/Css/roomviewer.css';

const RoomViewer: FunctionComponent<IRoomViewerProps> = (props: IRoomViewerProps) => {
  const [roomInfo, setRoomInfo] = useState<IRoomInfo>(props.roomInfo);

  useEffect(() => { setRoomInfo(props.roomInfo) }, [props]);
  useEffect(() => { initRoomInfo() }, [roomInfo]);

  function initRoomInfo(): void {
    PageTitleHelper.SetPageTitle(roomInfo.RoomAddress);

    if (!roomInfo.RoomPlan)
      return;

    const room: ANY_TODO = SVG('#roomContainer').svg(roomInfo.RoomPlan).get(0); // .get(0) returns room svg
    room.panZoom({ zoomFactor: 0.1 });
  }

  return (<>
    <div className="room">
      <div className="location">
        <img src="/Assets/icons/roomviewer/location.svg" width={24} height={24}/>
      </div>
      <div>
        <div className="name">{roomInfo.RoomAddress}</div>
        <div className="responsible">
          {t('roomviewer.responsible')}: {roomInfo.Responsible}
        </div>
      </div>
      <div className="free-seats">{t('roomviewer.freeSeats')}: {roomInfo.FreeSeatsCount}</div>
    </div>
    <div id="roomContainer" />
  </>);
};
export default RoomViewer;
