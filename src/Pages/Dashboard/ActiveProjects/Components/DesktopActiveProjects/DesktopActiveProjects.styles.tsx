import styled from 'styled-components'

export const Container = styled.div`
    grid-area: projects;
    height: 100%;
`
export const Header = styled.div`
    height: 13%;
    font-size: 24px;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;
`
export const Wrapper = styled.div`
    display: flex;
    height: 87%;
    border: 1px solid black;
    align-items: flex-start;
    justify-content: space-between;
    border: 4px solid transparent;
    background-color: ${({ theme }) => theme.co.white};
    padding: 45px 20px 55px 45px;
    border-radius: 3px;
`

export const ProjectList = styled.div`
`

export const ProjectItem = styled.div<{item: number}>`
    width: 264px;
    height: 80px;
    border-radius: 7px;
    padding: 15px 25px;
    padding-left: 0;
    text-align: left;
    color: ${({ theme }) => theme.co.grey600};
    cursor: pointer;
    margin-bottom: 30px;
    margin-right: 25px;
    &:nth-child(${({ item }) => item}){
        background-color: ${({ theme }) => theme.co.green300};
        color: ${({ theme }) => theme.co.grey500};
        cursor: default;
        > div {
            border-left: solid 4px ${({ theme }) => theme.co.green200};
        }
    }
`
export const ProjectContent = styled.div`
    padding-left: 30px;
    border-left: solid 4px ${({ theme }) => theme.co.grey700};
`
export const ProjectName = styled.div`
    font-size: 18px;
    font-weight: 700;
`
export const ProjectStatus = styled.div`
    font-size: 14px;
`
export const EmployeeList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
    width: 100%;
    overflow: hidden;
    height: 100%;
    &:hover {
        overflow-y: scroll;
        &::-webkit-scrollbar {
            opacity: 0;
            transition: opacity 0.4s;
            width: 5px !important;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.co.neutral400};
            border-radius: 5px;
        }
    }
`

export const EmployeeItem = styled.div<{vacation: boolean}>`
    display: flex;
    width: 285px;
    margin-bottom: 30px;
    border: ${({ vacation, theme }) => vacation ? `2px solid ${theme.co.green200}` : ''};
    background-color: ${({ vacation, theme }) => vacation ? theme.co.green300 : ''};
    border-radius: 5px;
    padding: 3px 3px;
`
export const EmployeePhoto = styled.div<{ photo: string }>`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    object-fit: cover;
    background-image: url(images/${({ photo }) => photo}.jpg);
    background-position: 50% 50%;
    background-size: cover;
`
export const EmployeeInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    
    > .name {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.co.green200};
        line-height: normal;
        &:hover {
            text-decoration: underline;
        }
    }
`
export const Vacation = styled.div`
    font-weight: 600;
    font-size: 12px;
`
export const Date = styled.div`
    font-weight: 400;
    font-size: 12px;
`
export const EmployeePosition = styled.div`
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.27;
    color: ${({ theme }) => theme.co.grey200};
    white-space: nowrap;
`
