import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { team, projects } from '../../Team'
import { LeftArrowIcon, RightArrowIcon } from '../../../../../Components/Icons'
import * as S from './MobileActiveProjects.styles'

const MobileActiveProjects: FC = () => {
  const [id, setId] = useState(0);
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);
  const project = projects[id];
  const arrowHandler = (id: number) => {
    if (id === projects.length-1) {
      setIsRight(true)
    } else if (!id) {
      setIsLeft(true)
    } else {
      setIsRight(false)
      setIsLeft(false)
    }
    setId(id)
  }
  const [t] = useTranslation();
  return (
    <S.Container>
      <S.Header>{t('dashboard.activeProjects')}</S.Header>
      <S.Wrapper>
        <S.Arrows>
          <S.Button onClick={() => arrowHandler(project.id - 1)} disabled={isLeft}>
            <LeftArrowIcon />
          </S.Button>
          <S.Button onClick={() => arrowHandler(project.id + 1)} disabled={isRight}>
            <RightArrowIcon />
          </S.Button>
        </S.Arrows>
        <S.ProjectList>
          <S.ProjectItem>
            <S.ProjectContent>
              <S.ProjectName>{project.name}</S.ProjectName>
              <S.ProjectStatus>{project.status}</S.ProjectStatus>
            </S.ProjectContent>
          </S.ProjectItem>
        </S.ProjectList>
        <S.EmployeeList>
          {team[id].map((item) => (
            <S.EmployeeItem key={item.id}>
              <S.EmployeePhoto photo={item.photo} />
              <S.EmployeeInfo>
                <S.EmployeePosition>{item.position}</S.EmployeePosition>
                <Link to='#' className='name' onClick={() => {}}>
                  {item.name}
                </Link>
              </S.EmployeeInfo>
            </S.EmployeeItem>
          ))}
        </S.EmployeeList>
      </S.Wrapper>
    </S.Container>
  )
}

export default MobileActiveProjects
