import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CrossIcon, QuestionIcon, SickDayIcon, VacationIcon } from '../../../Components/Icons'
import SmgSimpleButton from '../../../Controls/SmgSimpleButton/SmgSimpleButton'
import * as S from './Requests.styles'

const Requests: FC = () => {
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>
        {t('dashboard.oooRequest')}
        <S.Tooltip>
          <QuestionIcon />
          <S.TooltipText>Out of Office activities: Unpaid, Time shift, Vacation, Business leave, Illness</S.TooltipText>
        </S.Tooltip>
      </S.Header>
      <S.Wrapper>
        <S.Content>
          <S.Remains>
            <S.Vacation>
              <VacationIcon />
              <S.TextContainer>
                <S.Name>{t('dashboard.vacation')}</S.Name>
                <S.Time>7{t('dashboard.hours')} 8{t('dashboard.minutes')} {t('dashboard.remains')}</S.Time>
              </S.TextContainer>
            </S.Vacation>
            <S.Illness>
              <SickDayIcon />
              <S.TextContainer>
                <S.Name>{t('dashboard.illness')}</S.Name>
                <S.Time>7{t('dashboard.days')} {t('dashboard.remains')}</S.Time>
              </S.TextContainer>
            </S.Illness>
          </S.Remains>
          <SmgSimpleButton type='primary'><CrossIcon />{t('dashboard.oooRequest')}</SmgSimpleButton>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default Requests
