import styled from 'styled-components'

export const DashboardContainer = styled.div`
    display: grid;
    column-gap: 45px;
    grid-template: repeat(2, 500px) / repeat(2, 320px) 680px;
    grid-template-areas:
        "tracking requests projects"
        "service service issues";
    justify-content: center;
    row-gap: 40px;
    padding: 80px 60px;
    background-color: ${({ theme }) => theme.co.neutral100};
    
    @media(max-width: 1450px) {
        grid-template-columns: 320px 320px;
        grid-template-rows: repeat(4, 500px);
        grid-template-areas:
        "tracking requests"
        "projects projects"
        "service service" 
        "issues issues"; 
    }
    @media(max-width: 768px) {
        padding: 20px 20px 10px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 500px) minmax(200px, 0.5fr) minmax(200px, 0.5fr) 500px; 
        grid-template-areas:
        "tracking"
        "requests"
        "projects"
        "service" 
        "issues";
    }
`;
