import { FC } from 'react';
import useWindowSize from '../../../Hooks/useWindowSize';
import MobileServiceRequests from './MobileServiceRequests/MobileServiceRequests'
import DesktopServiceRequests from './DesktopServiceRequests/DesktopServiceRequests'

const ServiceRequests: FC = () => {
  const [width] = useWindowSize();
  return (
    <>
      { width < 768 
        ? <MobileServiceRequests /> 
        : <DesktopServiceRequests />
      }        
    </>
  )
}

export default ServiceRequests;