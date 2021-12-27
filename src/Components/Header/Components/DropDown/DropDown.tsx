import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../Constants/Routes';
import { CrossXIcon } from '../../../Icons';
import { DropDownProps } from '../../Props/headerProps';
import { 
  AdministrativeContainer, 
  DropDownContainer, 
  PersonalContainer, 
  ServiceContainer, 
  SystemContainer,
  PersonalLinks, 
  AdministrativeLinks,
  ServiceLinks,
  SystemLinks
} from './DropDown.styles';

const DropDown: FC<DropDownProps> = ({
  openDropDown, isEnglish
}) => { 
  const [t] = useTranslation();
  return (
    <DropDownContainer 
      initial={{ x: -480 }} 
      animate={{ x: 0 }} 
      exit={{ x: -480 }}
      transition={{duration: .22}}
      isEnglish={isEnglish}
    >
      <div>
        <CrossXIcon onClick={openDropDown} className="cross-icon"/>
      </div>

      <PersonalContainer>
        <div>{t('header.personal')}</div>

        <PersonalLinks isEnglish={isEnglish}>
          <a>{t('header.links.dashboard')}</a>
          <a>{t('header.links.myProfile')}</a>
          <a>{t('header.links.timeTracking')}</a> 
        </PersonalLinks>
      </PersonalContainer>

      <AdministrativeContainer>
        <div>{t('header.administrative')}</div>

        <AdministrativeLinks isEnglish={isEnglish}>
          <a>{t('header.links.employee')}</a>
          <a>{t('header.links.units')}</a>
          <a>{t('header.links.projects')}</a> 
          <a>{t('header.links.accounts')}</a> 
          <a>{t('header.links.timeApproval')}</a> 
        </AdministrativeLinks>        
      </AdministrativeContainer>

      <ServiceContainer>
        <div>{t('header.service')}</div>

        <ServiceLinks isEnglish={isEnglish}>
          <a>{t('header.links.request')}</a>
          <a>{t('header.links.resources')}</a>
        </ServiceLinks>
      </ServiceContainer>

      <SystemContainer>
        <div>{t('header.system')}</div>

        <SystemLinks isEnglish={isEnglish}>
          <a>{t('header.links.issues')}</a>
          <a>{t('header.links.dismissalInstr')}</a>        
        </SystemLinks>
      </SystemContainer>

      <div>
        <Link to={ROUTES.help} target="_blank">{t('header.help')}</Link>
      </div>
    </DropDownContainer>
  );
};

export default DropDown;
