import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { team, projects } from '../../Team'
import * as S from './DesktopActiveProjects.styles'

const DesktopActiveProjects: FC = () => {
  const [id, setId] = useState(0);
  const log = (id: number) => setId(id)
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>{t('dashboard.activeProjects')}</S.Header>
      <S.Wrapper>
        <S.ProjectList>
          {projects.map((item) => (
            <S.ProjectItem key={item.id} item={id+1} onClick={() => log(item.id)}>
              <S.ProjectContent>
                <S.ProjectName>{item.name}</S.ProjectName>
                <S.ProjectStatus>{item.status}</S.ProjectStatus>
              </S.ProjectContent>
            </S.ProjectItem>
          ))}
        </S.ProjectList>
        <S.EmployeeList>
          {team[id].map((item) => {
            return (
              <S.EmployeeItem key={item.id} vacation={!!item.vacation}>
                <S.EmployeePhoto photo={item.photo} />
                <S.EmployeeInfo>
                  <S.EmployeePosition>{item.position}</S.EmployeePosition>
                  <Link to="#" className="name" onClick={() => {}}>{item.name}</Link>
                  {item.vacation ? (
                    <>
                      <S.Vacation>Vacation</S.Vacation>
                      <S.Date>{item.vacation.start}-{item.vacation.finish}</S.Date>
                    </>
                  ) : null}
                </S.EmployeeInfo>
              </S.EmployeeItem>
            )})}
        </S.EmployeeList>
      </S.Wrapper>
    </S.Container>
  )
}

export default DesktopActiveProjects
