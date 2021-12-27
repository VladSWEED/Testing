import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../../Constants/Routes';
import {
  SMGDesktopLogo,
  PersonIcon,
  AdministrativeIcon,
  SeviceIcon,
  ConfigurationIcon,
  HelpIcon,
  CrossIcon,
  ExitIcon
} from '../../Icons';
import { headerProps } from '../Props/headerProps';
import HeaderInput from '../Components/HeaderInput';
import SmgSimpleButton from '../../../Controls/SmgSimpleButton';
import useWindowSize from '../../../Hooks/useWindowSize';
import DesktopHeaderLinks from '../Components/DesktopHeaderLinks';
import {
  HeaderContainer,
  MainLinksWrapper,
  ButtonWrapper,
  SubHeader,
  ListElement
} from './DesktopHeader.styles';

const STEPS = {
  PERSONAL: 1,
  ADMINISTRATIVE: 2,
  SERVICE: 3,
  SYSTEM: 4,
  REPORTS: 5,
};

const DesktopHeader: FC<headerProps> = ({
  isInputOpen, inputValue, isEnglish, inputChangeHandler, openInputHandler
}) => {
  const [t] = useTranslation();
  const [subIsOpen, setSubIsOpen] = useState<boolean>(false);
  const [showCreateButton, setShowCreateButton] = useState<boolean>(false);
  const [step, setStep] = useState<number>(STEPS.PERSONAL);
  const [width] = useWindowSize();
  const navigate = useNavigate();

  const LINKS = [
    { id: 0, name: t('header.personal'), to: ROUTES.index, icon: <PersonIcon />, step: STEPS.PERSONAL },
    { id: 1, name: t('header.administrative'), to: ROUTES.employees, icon: <AdministrativeIcon />, step: STEPS.ADMINISTRATIVE },
    { id: 2, name: t('header.service'), to: ROUTES.index, icon: <SeviceIcon />, step: STEPS.SERVICE },
    { id: 3, name: t('header.system'), to: ROUTES.demo, icon: <ConfigurationIcon />, step: STEPS.SYSTEM },
    { id: 4, name: t('header.reports'), to: ROUTES.index, icon: <ConfigurationIcon />, step: STEPS.REPORTS },
  ];

  useEffect(() => {
    (width < 1665) ? setShowCreateButton(true) : setShowCreateButton(false);
  }, [width]);

  const shouldHideLinks = isInputOpen && (width < 1265);

  const openSubHeaderHandler = (newStep: number) => {
    if (subIsOpen && step !== newStep) {
      setStep(newStep);
    } else {
      setStep(newStep);
      setSubIsOpen(!subIsOpen);
    }
  };

  const isPersonalStep = step === STEPS.PERSONAL;
  const isAdministrativeStep = step === STEPS.ADMINISTRATIVE;
  const isServiceStep = step === STEPS.SERVICE;
  const isSystemStep = step === STEPS.SYSTEM;
  const isReportsStep = step === STEPS.REPORTS;

  const isActiveLink = [isPersonalStep, isAdministrativeStep, isServiceStep, isSystemStep, isReportsStep];

  return (
    <>
      <HeaderContainer isLinks={shouldHideLinks}>
        <SMGDesktopLogo className="logo" onClick={() => navigate(ROUTES.index)} />

        {
          !shouldHideLinks &&
          <MainLinksWrapper isInputOpen={isInputOpen} isEnglish={isEnglish}>
            <nav>
              <ul>
                {
                  LINKS.map(link => (
                    <ListElement key={link.id} isLink={isActiveLink[link.id]} isInputOpen={isInputOpen} isEnglish={isEnglish}>
                      <Link
                        to={link.to}
                        onClick={() => openSubHeaderHandler(link.step)}
                      >
                        {link.icon} {link.name}
                      </Link>
                    </ListElement>
                  ))
                }
                <ListElement isInputOpen={isInputOpen}>
                  <Link to={ROUTES.help} target="_blank"><HelpIcon /> {t('header.help')}</Link>
                </ListElement>
              </ul>
            </nav>
          </MainLinksWrapper>
        }

        <HeaderInput
          isInputOpen={isInputOpen}
          value={inputValue}
          onChange={inputChangeHandler}
          onMouseEnter={openInputHandler}
        />

        <ButtonWrapper>
          {!showCreateButton
            ? (
              <>
                <SmgSimpleButton>{t('header.buttons.serviceRequest')}</SmgSimpleButton>
                <SmgSimpleButton>{t('header.buttons.oooRequest')}</SmgSimpleButton>
                <SmgSimpleButton>{t('header.buttons.smgIssue')}</SmgSimpleButton>
              </>
            )
            : <SmgSimpleButton><CrossIcon /> {t('header.buttons.create')}</SmgSimpleButton>
          }
          <SmgSimpleButton type="secondary" className='exit-button'>
            {width < 1025 ? <ExitIcon /> : t('header.buttons.signOut')}
          </SmgSimpleButton>
        </ButtonWrapper>

      </HeaderContainer>

      <SubHeader isOpen={subIsOpen && !shouldHideLinks} isEnglish={isEnglish}>
        <DesktopHeaderLinks
          personalStep={isPersonalStep}
          administrativeStep={isAdministrativeStep}
          serviceStep={isServiceStep}
          systemStep={isSystemStep}
          reportsStep={isReportsStep}
        />
      </SubHeader>
    </>
  );
};

export default DesktopHeader;
