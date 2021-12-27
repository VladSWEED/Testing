import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import SmgSimpleButton from '../../../../Controls/SmgSimpleButton/SmgSimpleButton'
import { CrossIcon } from '../../../../Components/Icons/Icons'
import {empolyees} from '../Employees'
import * as S from './DesktopServiceRequests.styled'

const DesktopServiceRequests: FC = () => {
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>{t('dashboard.serviceRequests')}</S.Header>
      <S.Content>
        <S.TableWrapper>
          <S.Table>
            <S.TableHeader>
              <S.HeaderRow>
                <S.FirstColumn>{t('dashboard.title')}</S.FirstColumn>
                <S.SecondColumn>{t('dashboard.status')}</S.SecondColumn>
                <S.ThirdColumn>{t('dashboard.modified')}</S.ThirdColumn>
              </S.HeaderRow>
            </S.TableHeader>
            <S.TableBody>
              {empolyees.map(item => (
                <S.BodyRow key={item.id}>
                  <S.FirstColumn>{item.title}</S.FirstColumn>
                  <S.SecondColumn>{item.status}</S.SecondColumn>
                  <S.ThirdColumn>{item.modified}</S.ThirdColumn>
                </S.BodyRow>
              ))}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>
        <S.Button>
          <SmgSimpleButton type="primary"><CrossIcon />{t('dashboard.itRequest')}</SmgSimpleButton>
        </S.Button>
      </S.Content>
    </S.Container>
  )
}

export default DesktopServiceRequests;