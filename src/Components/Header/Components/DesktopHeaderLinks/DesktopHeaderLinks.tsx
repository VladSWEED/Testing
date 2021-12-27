import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DesktopHeaderLinksProps } from '../../Props/headerProps';

const DesktopHeaderLinks: FC<DesktopHeaderLinksProps> = ({
  personalStep, administrativeStep, serviceStep, systemStep, reportsStep
}) => {
  const [t] = useTranslation();
  return (
    <>
      {personalStep && <div> <a>{t('header.links.dashboard')}</a> <a>{t('header.links.myProfile')}</a> <a>{t('header.links.timeTracking')}</a> </div>}
      {administrativeStep && <div> <a>{t('header.links.employee')}</a> <a>{t('header.links.units')}</a> <a>{t('header.links.projects')}</a> <a>{t('header.links.accounts')}</a> <a>{t('header.links.timeApproval')}</a></div>}
      {serviceStep && <div> <a>{t('header.links.request')}</a> <a>{t('header.links.resources')}</a> </div>}
      {systemStep && <div> <a>{t('header.links.issues')}</a> <a>{t('header.links.dismissalInstr')}</a> </div>}
      {reportsStep && <div> <a>{t('header.links.oooEvents')}</a> <a>{t('header.links.approvedTime')}</a> <a>{t('header.links.approvedTimeWithOrg')}</a> <a>{t('header.links.prSchedule')}</a> <a>{t('header.links.exceedingBillable')}</a> <a>{t('header.links.bench')}</a> </div>}
    </>
  )
};

export default DesktopHeaderLinks;