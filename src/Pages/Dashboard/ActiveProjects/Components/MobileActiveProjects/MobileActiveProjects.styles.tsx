import styled from 'styled-components'

export const Container = styled.div`
    grid-area: projects;
    height: 100%;
`
export const Header = styled.div`
    font-size: 24px;
    height: 10%;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;
`
export const Wrapper = styled.div`
    display: flex;
    height: 90%;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid transparent;
    background-color: ${({ theme }) => theme.co.white};
    padding: 25px 25px 25px;
    border-radius: 3px;
    position: relative;
`

export const ProjectList = styled.div`
    width: 100%;
    postition: relative;
`
export const Arrows = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: calc(115px / 2);
`

export const Button = styled.button<{disabled: boolean}>`
    border: none;
    background: none;
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
    
`

export const ProjectItem = styled.div`
    background-color: ${({ theme }) => theme.co.green300};
    height: 80px;
    border-radius: 7px;
    position: relative;
`
export const ProjectContent = styled.div`
    text-align: center;
    padding: 20px 25px;
    :before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 40%;
        left: 30%;
        border-bottom: 4px solid ${({ theme }) => theme.co.green200};
    }
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
    margin-top: 25px;
    width: 100%;
    overflow: hidden;
    &:hover {
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 5px !important ;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.co.neutral400};
            border-radius: 5px;
        }
    }
`

export const EmployeeItem = styled.div`
    display: flex;
    width: 285px;
    margin-bottom: 30px;
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
export const EmployeePosition = styled.div`
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.27;
    color: ${({ theme }) => theme.co.grey200};
    white-space: nowrap;
`
