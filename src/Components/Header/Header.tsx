import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../Hooks/useWindowSize';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header: FC = () => { 
  const [, i18n] = useTranslation();
  const [width] = useWindowSize();
  const [inputValue, setInputValue] = useState<string>('');
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);  

  const isEnglish = i18n.resolvedLanguage === 'en'; 
  const isMobile = isEnglish ? width < 950 : width < 1091;

  const openInputHandler = ()=> {
    if(!inputValue) {
      setIsInputOpen(!isInputOpen);
    }    
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };  
  
  const headerProps = {isInputOpen, inputValue, inputChangeHandler, openInputHandler, isEnglish};
  
  return ( 
    <>
      { isMobile
        ? <MobileHeader {...headerProps}/> 
        : <DesktopHeader {...headerProps} />
      }        
    </>
  );
};

export default Header;
