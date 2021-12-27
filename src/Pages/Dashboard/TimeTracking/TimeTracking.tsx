import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { CrossIcon } from '../../../Components/Icons'
import SmgSimpleButton from '../../../Controls/SmgSimpleButton/SmgSimpleButton'
import * as S from './TimeTracking.styles'


const TimeTracking: FC = () => {
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>{t('dashboard.timeTracking')}</S.Header>
      <S.Wrapper>
        <S.Content>
          <S.WorkingHours>
            <S.Donut>
              <S.TopNumber>96<span>{t('dashboard.hours')}</span></S.TopNumber>
              <S.BottomNumber>/184</S.BottomNumber>
            </S.Donut>
            <S.Month>{t('dashboard.reportedInMonth')} {t('dashboard.December')}</S.Month>
          </S.WorkingHours>
          <SmgSimpleButton className="btn" type="primary"><CrossIcon />{t('dashboard.workingHours')}</SmgSimpleButton>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default TimeTracking