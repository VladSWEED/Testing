import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ROUTES } from '../../../Constants/Routes';
import SmgSimpleButton from '../../../Controls/SmgSimpleButton';
import { BurgerIcon, CrossIcon, ExitIcon, SMGMobileLogo } from '../../Icons';
import HeaderInput from '../Components/HeaderInput';
import DropDown from '../Components/DropDown';
import { headerProps } from '../Props/headerProps';
import { 
  MobileHeaderContainer,
  SearchContainer,
  NavigationInfo,
  Navigate,
  Buttons,
  Backdrop
} from './MobileHeader.styles';

const MobileHeader: FC<headerProps> = ({
  isInputOpen, inputValue, inputChangeHandler, openInputHandler, isEnglish
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const openDashboardPage = ()=> navigate(ROUTES.index);

  const openDropDown = ()=> setIsOpen(!isOpen);

  return (
    <MobileHeaderContainer>

      {isOpen && <Backdrop/>}
      
      <AnimatePresence>
        {isOpen && <DropDown openDropDown={openDropDown} isEnglish={isEnglish} />}
      </AnimatePresence>      

      <SearchContainer isInputOpen={isInputOpen}>
        { !isInputOpen && (
          <Navigate>
            <BurgerIcon onClick={openDropDown}/>
            <SMGMobileLogo onClick={openDashboardPage} className="mobile-logo" />
          </Navigate>
        ) }
          
        <HeaderInput 
          isInputOpen={isInputOpen}
          value={inputValue}
          onChange={inputChangeHandler}
          onMouseEnter={openInputHandler}
          className="mobile-input"
        />

        { !isInputOpen && (
          <Buttons>
            <SmgSimpleButton><CrossIcon /> Create</SmgSimpleButton>
            <SmgSimpleButton type="secondary" className='exit-button'>
              <ExitIcon/> 
            </SmgSimpleButton>
          </Buttons>
        ) }
          
      </SearchContainer>

      <NavigationInfo>
          NavigationInfo
      </NavigationInfo>
    
    </MobileHeaderContainer>    
  );
};

export default MobileHeader;
