import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import SmgSimpleButton from '../../../../Controls/SmgSimpleButton/SmgSimpleButton'
import { CrossIcon } from '../../../../Components/Icons/Icons'
import { empolyees } from '../Employees'
import * as S from './MobileServiceRequests.styles'

const MobileServiceRequests: FC = () => {
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>{t('dashboard.serviceRequests')}</S.Header>
      <S.Content>
        <S.TableWrapper>
          {empolyees.map((item) => (
            <S.Item key={item.id}>
              <S.FirstRow>{item.title}</S.FirstRow>
              <S.SecondRow>{item.status}, {item.modified}</S.SecondRow>
            </S.Item>
          ))}
        </S.TableWrapper>
        <S.Button>
          <SmgSimpleButton type='primary'><CrossIcon />{t('dashboard.itRequest')}</SmgSimpleButton>
        </S.Button>
      </S.Content>
    </S.Container>
  )
}

export default MobileServiceRequests
