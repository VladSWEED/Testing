import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CrossIcon, EmptyFieldIcon } from '../../../Components/Icons'
import SmgSimpleButton from '../../../Controls/SmgSimpleButton/SmgSimpleButton'
import { Issues, Content, Container, Header, Wrapper, Text } from './SmgIssues.styles'

const SmgIssues: FC = () => {
  const [t] = useTranslation();
  return (
    <Container>
      <Header>{t('dashboard.smgIssues')}</Header>
      <Wrapper>
        <Content>
          <Issues>
            <EmptyFieldIcon />
            <Text>
              The world isn’t ideal.
              <br />If you notice a bug or want to propose an enhancement, let us know.
            </Text>
          </Issues>
          <SmgSimpleButton type="primary"><CrossIcon />{t('dashboard.smgIssue')}</SmgSimpleButton>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default SmgIssues
