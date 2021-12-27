import { FC } from 'react'
import { DashboardContainer } from './Dashboard.styles'
import TimeTracking from './TimeTracking/TimeTracking'
import Requests from './Requests/Requests'
import ActiveProjects from './ActiveProjects/ActiveProjects'
import ServiceRequests from './ServiceRequests/ServiceRequests'
import SmgIssues from './SmgIssues/SmgIssues'

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <TimeTracking />
      <Requests />
      <ActiveProjects />
      <ServiceRequests />
      <SmgIssues />
    </DashboardContainer>
  )
}

export default Dashboard
