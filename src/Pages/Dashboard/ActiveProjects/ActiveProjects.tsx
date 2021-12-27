import { FC } from 'react'
import useWindowSize from '../../../Hooks/useWindowSize';
import MobileActiveProjects from './Components/MobileActiveProjects/MobileActiveProjects'
import DesktopActiveProjects from './Components/DesktopActiveProjects/DesktopActiveProjects'

const ActiveProjects: FC = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      { isMobile
        ? <MobileActiveProjects /> 
        : <DesktopActiveProjects />
      }        
    </>
  )
}

export default ActiveProjects;